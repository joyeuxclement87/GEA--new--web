#!/usr/bin/env node
/**
 * One-time codemod: converts every cld('gea/a/b/c', ...) public ID in the
 * codebase to a flat, no-folder public ID (e.g. 'a-b-c'), matching the
 * convention of directly-uploaded assets like 'engineers-on-site'.
 *
 * Steps:
 *   1. Scan src/ for every cld('...') call.
 *   2. Compute a flat name for each (strip leading "gea/", join remaining
 *      segments with "-").
 *   3. Detect collisions (two different original IDs mapping to the same
 *      flat name) and abort with a report if any are found.
 *   4. If safe, rewrite every occurrence across every file.
 *
 * Run with: node scripts/flatten-cloudinary-ids.js
 * Dry run (report only, no writes): node scripts/flatten-cloudinary-ids.js --dry
 */

const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "..", "src");
const DRY_RUN = process.argv.includes("--dry");

function collectFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(collectFiles(full));
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

function flatten(id) {
  const segments = id.split("/").filter((s) => s !== "gea" && s.length > 0);
  return segments.join("-");
}

function main() {
  const files = collectFiles(SRC_DIR).filter(
    (f) => !f.endsWith(path.join("lib", "cloudinary.ts"))
  );

  const idPattern = /cld\(\s*['"]([^'"]+)['"]/g;
  const allIds = new Set();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    let match;
    while ((match = idPattern.exec(content)) !== null) {
      allIds.add(match[1]);
    }
  }

  const mapping = new Map(); // original -> flat
  const reverse = new Map(); // flat -> [originals]
  for (const id of allIds) {
    const flat = flatten(id);
    mapping.set(id, flat);
    if (!reverse.has(flat)) reverse.set(flat, []);
    reverse.get(flat).push(id);
  }

  const collisions = Array.from(reverse.entries()).filter(([, origs]) => origs.length > 1);

  if (collisions.length > 0) {
    console.log(`Found ${collisions.length} collisions — aborting without writing:\n`);
    for (const [flat, origs] of collisions) {
      console.log(`  "${flat}" <= ${origs.join(", ")}`);
    }
    process.exit(1);
  }

  console.log(`No collisions. ${mapping.size} unique public IDs will be flattened.`);

  if (DRY_RUN) {
    console.log("\nDry run — sample of changes:");
    let i = 0;
    for (const [orig, flat] of mapping) {
      if (orig === flat) continue; // already flat, no change
      console.log(`  ${orig}  ->  ${flat}`);
      i++;
      if (i >= 20) {
        console.log(`  ...and ${mapping.size - i} more`);
        break;
      }
    }
    return;
  }

  // Sort by length descending so longer IDs are replaced before any shorter
  // substrings of them (avoids partial-match corruption).
  const sortedOriginals = Array.from(mapping.keys()).sort((a, b) => b.length - a.length);

  let totalReplacements = 0;
  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let changed = false;
    for (const orig of sortedOriginals) {
      const flat = mapping.get(orig);
      if (orig === flat) continue;
      const needle = `'${orig}'`;
      const replacement = `'${flat}'`;
      if (content.includes(needle)) {
        content = content.split(needle).join(replacement);
        changed = true;
        totalReplacements++;
      }
      const needleDouble = `"${orig}"`;
      const replacementDouble = `"${flat}"`;
      if (content.includes(needleDouble)) {
        content = content.split(needleDouble).join(replacementDouble);
        changed = true;
        totalReplacements++;
      }
    }
    if (changed) {
      fs.writeFileSync(file, content);
      console.log(`Updated ${path.relative(path.join(__dirname, ".."), file)}`);
    }
  }

  console.log(`\nDone. ${totalReplacements} public ID occurrences flattened.`);
}

main();
