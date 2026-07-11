/**
 * Cloudinary image helper.
 *
 * All site imagery is served from Cloudinary under a single cloud account.
 * Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment once you have a
 * real Cloudinary cloud name — until then this falls back to a placeholder
 * so the codebase stays consistent and easy to find/replace later.
 *
 * ─── Naming convention (public IDs) ─────────────────────────────────────────
 *
 * Public IDs are FLAT — no folders — matching how assets are uploaded
 * directly to the Cloudinary media library (e.g. `engineers-on-site`).
 * Use descriptive, hyphen-joined, lowercase kebab-case names that read like
 * a breadcrumb of where the image is used:
 *
 *   heroes-home
 *   heroes-about
 *   heroes-contact
 *   heroes-projects
 *   heroes-quote
 *   heroes-services-<service-slug>                  e.g. heroes-services-mep-engineering
 *   heroes-solutions-<solution-slug>                 e.g. heroes-solutions-hvac
 *
 *   services-<service-slug>-<item-slug>              e.g. services-architecture-drawings-floor-plans
 *   services-<service-slug>-related-<project-slug>
 *
 *   solutions-<solution-slug>-<item-slug>
 *
 *   projects-<project-slug>-cover
 *   projects-<project-slug>-gallery-<n>
 *
 *   team-<person-slug>
 *   testimonials-<person-slug>
 *
 * Reuse the same public ID across multiple pages when it's genuinely the
 * same photo (e.g. `engineers-on-site` is used on both the About page and
 * the homepage) — upload it once in Cloudinary and every reference resolves.
 *
 * ─── Usage ───────────────────────────────────────────────────────────────────
 *
 *   import { cld } from '@/lib/cloudinary';
 *
 *   <img src={cld('heroes-services-mep-engineering', { w: 1800 })} alt="..." />
 */

export const CLOUDINARY_CLOUD_NAME =
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "gea-media";

export type CldOptions = {
  /** Target width in pixels. Cloudinary will scale/deliver at this size. */
  w?: number;
  /** Quality setting. Defaults to "auto" (Cloudinary picks the best quality/size tradeoff). */
  q?: string | number;
  /** Crop mode. Defaults to "fill" when a width is provided. */
  crop?: string;
};

/**
 * Build a Cloudinary delivery URL for a given public ID.
 *
 * Always applies f_auto (best format per browser) and q_auto (or a custom
 * quality) so every image is served optimally without extra setup.
 */
export function cld(publicId: string, opts: CldOptions = {}): string {
  const { w, q = "auto", crop } = opts;

  const transforms = [
    "f_auto",
    `q_${q}`,
    w ? `w_${w}` : null,
    w && crop ? `c_${crop}` : w ? "c_fill" : null,
  ]
    .filter(Boolean)
    .join(",");

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transforms}/${publicId}`;
}
