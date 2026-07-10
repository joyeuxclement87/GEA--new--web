export type SolutionCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  overview: string;
  applications: string[];
  collections: Array<{ name: string; desc: string; image: string }>;
  specs: Array<{ label: string; value: string }>;
  faqs: Array<{ q: string; a: string }>;
};

export const solutionCategoryDetails: Record<string, SolutionCategory> = {
  'bathroom-sanitary': {
    slug: 'bathroom-sanitary',
    title: 'Bathroom & Sanitary',
    tagline: 'Where Function Meets Design.',
    description: 'Premium sanitary ware, bathtubs, showers, vanities, and bathroom accessories for residential, hospitality, and commercial projects.',
    heroImage: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies bathroom and sanitary products from Europe\'s leading manufacturers. Every product is selected for design quality, durability, and performance in demanding environments — from luxury residences to commercial hospitality projects.',
    applications: ['Residential bathrooms', 'Hotel & hospitality suites', 'Commercial washrooms', 'Healthcare facilities', 'Educational facilities'],
    collections: [
      { name: 'Premium Vanity Collection', desc: 'Wall-hung and freestanding vanity units with integrated basin and storage.', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80' },
      { name: 'Freestanding Bathtub Series', desc: 'Sculptural freestanding baths in acrylic, stone resin, and cast iron.', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
      { name: 'Rainfall Shower Systems', desc: 'Overhead and handheld shower systems with thermostatic controls.', image: 'https://images.unsplash.com/photo-1560185127-6a7e2f2a8b5a?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '120+' },
      { label: 'Brand Partners', value: '8' },
      { label: 'Lead Time', value: '2–4 weeks' },
      { label: 'Warranty', value: 'Up to 10 years' },
    ],
    faqs: [
      { q: 'Do you supply bathroom products for commercial projects?', a: 'Yes, we supply bathroom and sanitary products for commercial projects of all scales — from hotels and office buildings to healthcare and hospitality facilities.' },
      { q: 'Can you provide product samples before ordering?', a: 'In many cases, samples can be arranged through our supplier network. Contact our team to discuss your requirements.' },
      { q: 'Do you supply complete bathroom packages?', a: 'Yes. We can curate complete bathroom packages including sanitary ware, taps, showers, accessories, and complementary tile selections for coordinated specification.' },
    ],
  },
  'tiles-flooring': {
    slug: 'tiles-flooring',
    title: 'Tiles & Flooring',
    tagline: 'Every Surface, Defined.',
    description: 'Porcelain, ceramic, natural stone, and wood-effect tiles for floors, walls, and facades from world-leading manufacturers.',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80',
    overview: 'From large-format porcelain slabs to handcrafted terracotta, GEA\'s tile and flooring range covers every project type and design intent. We source from manufacturers recognized for quality, consistency, and technical performance.',
    applications: ['Residential interiors', 'Commercial lobbies & corridors', 'Wet areas & pools', 'External facades', 'Retail & hospitality'],
    collections: [
      { name: 'Large Format Porcelain', desc: '1200x2400mm and 1600x3200mm slabs for seamless, uninterrupted surfaces.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80' },
      { name: 'Natural Stone Selection', desc: 'Marble, travertine, limestone, and granite in raw and honed finishes.', image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80' },
      { name: 'Wood-Effect Ceramics', desc: 'High-fidelity timber-look tiles for durability without wood maintenance.', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '200+' },
      { label: 'Brand Partners', value: '12' },
      { label: 'Lead Time', value: '1–3 weeks' },
      { label: 'Min. Order', value: 'By project' },
    ],
    faqs: [
      { q: 'Do you supply tiles for outdoor and wet areas?', a: 'Yes. We have a dedicated range of slip-resistant and frost-resistant tiles suitable for outdoor terraces, pool surrounds, and wet areas.' },
      { q: 'Can you provide quantity estimates for my project?', a: 'Our team can calculate tile quantities from your floor plans or room dimensions, including appropriate waste allowances.' },
      { q: 'Do you carry large-format slabs?', a: 'Yes. We supply large-format porcelain slabs up to 1600x3200mm for dramatic, seamless floor and wall installations.' },
    ],
  },
  electrical: {
    slug: 'electrical',
    title: 'Electrical Solutions',
    tagline: 'Power, Controlled.',
    description: 'Complete electrical systems including switchgear, distribution boards, cables, and intelligent energy management solutions.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies a comprehensive range of electrical products from global manufacturers, covering everything from basic wiring accessories to advanced smart energy management systems. All products meet international quality and safety certifications.',
    applications: ['Residential wiring', 'Commercial fit-out', 'Industrial installations', 'Data centres', 'Infrastructure projects'],
    collections: [
      { name: 'Distribution Boards & Panels', desc: 'MDB, SMDB, and final distribution boards from Schneider, Legrand, and Hager.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
      { name: 'Cable & Containment', desc: 'Power cables, data cables, cable trays, and conduit systems.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Smart Lighting Controls', desc: 'DALI, KNX, and wireless lighting control systems for intelligent spaces.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '180+' },
      { label: 'Brand Partners', value: '10' },
      { label: 'Standards', value: 'IEC/BS/CE' },
      { label: 'Warranty', value: 'Up to 5 years' },
    ],
    faqs: [
      { q: 'Do your products meet local electrical standards?', a: 'Yes. All electrical products we supply are certified to international standards including IEC, BS, and CE, and comply with local regulatory requirements.' },
      { q: 'Can you supply complete electrical packages for a project?', a: 'Yes. We can compile complete electrical material lists from your single-line diagrams and BOQ, and provide a comprehensive supply package.' },
      { q: 'Do you supply smart home electrical systems?', a: 'Yes. We supply KNX, DALI, and wireless smart electrical and lighting control systems suitable for residential and commercial applications.' },
    ],
  },
  plumbing: {
    slug: 'plumbing',
    title: 'Plumbing Systems',
    tagline: 'Reliable Water, Engineered Well.',
    description: 'High-performance piping, valves, fittings, and drainage systems designed for reliability and long-term performance.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies plumbing solutions including pipes, fittings, valves, drainage systems, and water management products suited to residential, commercial, and industrial environments.',
    applications: ['Residential plumbing', 'Commercial sanitary services', 'Industrial water systems', 'Hospital and laboratory projects'],
    collections: [
      { name: 'Pressure Pipe Systems', desc: 'Durable piping systems for potable water and pressure applications.', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80' },
      { name: 'Drainage & Waste', desc: 'Efficient drainage products and waste management systems.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Valve & Control Range', desc: 'High-grade control valves and fittings for performance-critical systems.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '150+' },
      { label: 'Brand Partners', value: '7' },
      { label: 'Lead Time', value: '2–5 weeks' },
      { label: 'Applications', value: 'Residential + Commercial' },
    ],
    faqs: [
      { q: 'Do you supply complete plumbing packages?', a: 'Yes. We can coordinate pipe systems, fittings, valves, and sanitary accessories for complete plumbing packages.' },
      { q: 'Can you help with specification documents?', a: 'Absolutely. Our team supports technical specification and product selection for plumbing systems.' },
    ],
  },
  hvac: {
    slug: 'hvac',
    title: 'HVAC Equipment',
    tagline: 'Comfort, Controlled.',
    description: 'Heating, ventilation, and air conditioning systems from global brands for all project scales.',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA provides HVAC equipment including split units, VRF systems, chillers, ventilation, and control systems for commercial, hospitality, and residential applications.',
    applications: ['Residential comfort systems', 'Office towers', 'Hotels', 'Healthcare', 'Industrial ventilation'],
    collections: [
      { name: 'VRF & Split Systems', desc: 'Zoned air conditioning for efficient climate control.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Ventilation Units', desc: 'Energy-efficient ventilation and fresh air systems.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80' },
      { name: 'Chiller Systems', desc: 'Industrial and commercial chiller solutions for high-load projects.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '90+' },
      { label: 'Brand Partners', value: '9' },
      { label: 'Lead Time', value: '3–6 weeks' },
      { label: 'Applications', value: 'Residential + Commercial' },
    ],
    faqs: [
      { q: 'Do you supply HVAC for hospitality projects?', a: 'Yes. We provide HVAC solutions designed for hotels, resorts, and high-occupancy buildings.' },
      { q: 'Can you supply controls and sensors?', a: 'Yes. We offer control systems and smart building integration for modern HVAC deployments.' },
    ],
  },
  'solar-energy': {
    slug: 'solar-energy',
    title: 'Solar Energy Solutions',
    tagline: 'Energy Independence, Designed.',
    description: 'Complete solar photovoltaic systems, battery storage, inverters, and mounting systems for efficient energy independence.',
    heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies solar energy systems for residential, commercial, and industrial projects, helping clients reduce environmental impact while improving long-term energy performance.',
    applications: ['Residential rooftops', 'Commercial buildings', 'Industrial facilities', 'Hybrid energy systems'],
    collections: [
      { name: 'PV Modules', desc: 'High-efficiency solar modules for rooftop and ground-mounted systems.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80' },
      { name: 'Battery Storage', desc: 'Energy storage solutions for peak load management and resilience.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Inverters & Mounting', desc: 'Smart inverters and mounting systems for reliable solar deployment.', image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '60+' },
      { label: 'Storage Options', value: 'Hybrid + Off-grid' },
      { label: 'Lead Time', value: '4–8 weeks' },
    ],
    faqs: [
      { q: 'Do you supply both panels and battery storage?', a: 'Yes. We can coordinate PV modules, inverters, and battery storage solutions into complete energy packages.' },
      { q: 'Are these systems suitable for commercial developments?', a: 'Yes. We support small to large commercial solar strategies with technical specification assistance.' },
    ],
  },
  'fire-safety': {
    slug: 'fire-safety',
    title: 'Fire Safety Equipment',
    tagline: 'Protection, Engineered for Life.',
    description: 'Certified fire detection, suppression, and emergency systems for projects that demand reliability and compliance.',
    heroImage: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA provides fire safety products including alarms, sprinklers, extinguishers, emergency lighting, and evacuation systems sourced from certified manufacturers.',
    applications: ['Residential', 'Commercial', 'Hospitality', 'Healthcare', 'Industrial'],
    collections: [
      { name: 'Detection & Alarm Systems', desc: 'Smoke and heat detection with panel integration.', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80' },
      { name: 'Suppression Systems', desc: 'Sprinkler and suppression products for compliant installations.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80' },
      { name: 'Emergency Lighting', desc: 'Reliable emergency and evacuation lighting solutions.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '80+' },
      { label: 'Compliance', value: 'IEC / EN / NFPA' },
      { label: 'Lead Time', value: '2–4 weeks' },
    ],
    faqs: [
      { q: 'Do you supply fully compliant fire systems?', a: 'Yes, through certified brands and technical support we can help source compliant systems for your jurisdiction.' },
      { q: 'Can you advise on fire system specifications?', a: 'Yes. Our team guides clients on product selection and specification details for a wide range of building types.' },
    ],
  },
  'security-systems': {
    slug: 'security-systems',
    title: 'Security Systems',
    tagline: 'Protection, Connected.',
    description: 'Integrated access control, CCTV, intrusion detection, and smart security solutions for modern facilities.',
    heroImage: 'https://images.unsplash.com/photo-1557597774-9d475d030a96?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies smart security systems for homes, offices, retail destinations, and industrial sites, with a focus on reliable integration and real-world performance.',
    applications: ['Residential', 'Commercial', 'Retail', 'Industrial', 'Critical infrastructure'],
    collections: [
      { name: 'Access Control', desc: 'Card, biometric, and mobile-enabled access systems.', image: 'https://images.unsplash.com/photo-1557597774-9d475d030a96?auto=format&fit=crop&w=800&q=80' },
      { name: 'Surveillance Systems', desc: 'CCTV and networked monitoring products.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Intrusion Detection', desc: 'Alarm systems and intelligent sensors for perimeter protection.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '70+' },
      { label: 'Brands', value: '8' },
      { label: 'Lead Time', value: '2–4 weeks' },
    ],
    faqs: [
      { q: 'Can you provide smart security packages?', a: 'Yes. We can support integrated security packages for access control, CCTV, and intrusion monitoring.' },
      { q: 'Do you support commercial installations?', a: 'Yes. We work with commercial and industrial clients on larger, integrated security deployments.' },
    ],
  },
  'water-pumps': {
    slug: 'water-pumps',
    title: 'Water Pumps',
    tagline: 'Flow, Managed Precisely.',
    description: 'Submersible pumps, booster systems, pressure tanks, and industrial pumping solutions for water supply and building services.',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA offers water pumps and pumping systems tailored to irrigation, water boosting, drainage, and industrial pressure applications.',
    applications: ['Domestic water boosting', 'Irrigation', 'Industrial pumping', 'Water treatment'],
    collections: [
      { name: 'Submersible Pumps', desc: 'Deep-well and submersible pump systems for water supply.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Booster Systems', desc: 'Pressure boosting solutions for multi-storey and high-demand buildings.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
      { name: 'Pump Controls', desc: 'Controls and automation for efficient pump operation.', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '50+' },
      { label: 'Applications', value: 'Residential + Industrial' },
      { label: 'Lead Time', value: '2–6 weeks' },
    ],
    faqs: [
      { q: 'Do you supply pumps for residential buildings?', a: 'Yes. We provide pressure booster systems and pumps for villas, apartment blocks, and commercial facilities.' },
      { q: 'Can you recommend pump sizing?', a: 'Yes. We can advise on pump selection based on demand, pressure, and application requirements.' },
    ],
  },
  'water-heaters': {
    slug: 'water-heaters',
    title: 'Water Heaters',
    tagline: 'Hot Water, Delivered Reliably.',
    description: 'Solar water heaters, heat pump systems, electric, and gas water heaters for domestic and commercial hot water supply.',
    heroImage: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA offers energy-efficient water heaters and hot water systems for residential, hospitality, and commercial applications, with products tailored for performance and durability.',
    applications: ['Domestic hot water', 'Hotels', 'Residential developments', 'Healthcare'],
    collections: [
      { name: 'Heat Pump Water Heaters', desc: 'High-efficiency heat pump systems for sustainable hot water generation.', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Solar Water Heating', desc: 'Solar solutions for energy-conscious developments.', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
      { name: 'Electric & Gas Units', desc: 'Reliable standard units for rapid deployment.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '40+' },
      { label: 'Energy Types', value: 'Solar / Heat Pump / Electric' },
      { label: 'Lead Time', value: '2–4 weeks' },
    ],
    faqs: [
      { q: 'Do you supply water heaters for commercial use?', a: 'Yes. We offer systems suitable for hospitality, healthcare, and mixed-use developments.' },
      { q: 'Could you advise on energy-efficient options?', a: 'Yes. Our team can recommend thermal efficiency-focused systems based on your installation requirements.' },
    ],
  },
  'doors-windows': {
    slug: 'doors-windows',
    title: 'Doors & Windows',
    tagline: 'Performance in Every Frame.',
    description: 'Aluminium, uPVC, and timber doors and windows engineered for thermal performance, security, and architectural aesthetics.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies architectural doors and windows from global manufacturers, focused on security, daylight, thermal performance, and premium finish quality.',
    applications: ['Residential', 'Commercial facades', 'Hospitality', 'Education'],
    collections: [
      { name: 'Aluminium Systems', desc: 'Slim-profile aluminium doors and windows for modern facades.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
      { name: 'uPVC Range', desc: 'High-performance uPVC systems with added insulation.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80' },
      { name: 'Timber Joinery', desc: 'Natural timber doors and windows for premium interiors.', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '100+' },
      { label: 'Material Options', value: 'Aluminium / uPVC / Timber' },
      { label: 'Lead Time', value: '4–8 weeks' },
    ],
    faqs: [
      { q: 'Do you provide high-performance glazing systems?', a: 'Yes. We can support façade and joinery packages with high-specification glazing options.' },
      { q: 'Can you supply for large commercial projects?', a: 'Yes. Our team supports premium and technical specifications across major developments.' },
    ],
  },
  'paint-finishes': {
    slug: 'paint-finishes',
    title: 'Paint & Finishes',
    tagline: 'Surface Quality, Perfected.',
    description: 'Interior and exterior paints, decorative coatings, texture finishes, and waterproofing systems from professional-grade brands.',
    heroImage: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies finish products that combine visual quality with technical performance, helping projects achieve enduring surfaces and dependable protection.',
    applications: ['Interior walls', 'Exterior facades', 'Protective coatings', 'Waterproofing'],
    collections: [
      { name: 'Decorative Interior Coatings', desc: 'Premium wall and ceiling coatings for refined interiors.', image: 'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80' },
      { name: 'Exterior Weatherproofing', desc: 'Durable coatings for exposed and high-traffic facades.', image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80' },
      { name: 'Texture & Special Finishes', desc: 'Decorative and feature finishes for design-led spaces.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '110+' },
      { label: 'Finish Options', value: 'Matte / Satin / Gloss' },
      { label: 'Lead Time', value: '1–3 weeks' },
    ],
    faqs: [
      { q: 'Do you provide waterproofing products?', a: 'Yes. We supply specialist systems for wet areas, balconies, and external protection.' },
      { q: 'Can you advise on finish selection?', a: 'Yes. We assist with finishes suited to your environment, maintenance expectations, and visual brief.' },
    ],
  },
  'hardware-tools': {
    slug: 'hardware-tools',
    title: 'Hardware & Tools',
    tagline: 'Precision in Every Detail.',
    description: 'Professional construction tools, precision hardware, fixings, anchors, and specialist equipment for engineering and fit-out projects.',
    heroImage: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies precision hardware and professional tools for contractors and manufacturers, supporting installation quality and long-term performance.',
    applications: ['Construction site fit-out', 'Manufacturing', 'Installation teams', 'Technical service work'],
    collections: [
      { name: 'Fixings & Anchors', desc: 'Structural and general-purpose fixings for robust installation.', image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&w=800&q=80' },
      { name: 'Professional Tools', desc: 'High-performance hand and power tools for site use.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80' },
      { name: 'Specialist Hardware', desc: 'Highly specific hardware for tailored assemblies and installations.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '300+' },
      { label: 'Lead Time', value: '1–3 weeks' },
      { label: 'Applications', value: 'Site + Installation' },
    ],
    faqs: [
      { q: 'Do you supply tools for contractors?', a: 'Yes. We support contractors and installers with professional equipment and hardware for project execution.' },
      { q: 'Can you support bulk orders?', a: 'Yes. Bulk procurement is available for contracting teams and large installations.' },
    ],
  },
  'smart-building': {
    slug: 'smart-building',
    title: 'Smart Building Solutions',
    tagline: 'Buildings That Think Ahead.',
    description: 'Building automation systems, IoT sensors, smart lighting controls, and integrated building management platforms for intelligent facilities.',
    heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80',
    overview: 'GEA supplies smart building devices and control systems that improve efficiency, comfort, and operational insight in modern developments.',
    applications: ['Commercial offices', 'Hotels', 'Residential developments', 'Campus buildings'],
    collections: [
      { name: 'Building Automation', desc: 'Integrated controls for lighting, climate, and energy visibility.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
      { name: 'IoT Sensors', desc: 'Occupancy, environmental, and energy monitoring devices.', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
      { name: 'Lighting Controls', desc: 'Intelligent lighting systems for responsive spaces.', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=80' },
    ],
    specs: [
      { label: 'Product Types', value: '45+' },
      { label: 'Integration', value: 'IoT + BMS' },
      { label: 'Lead Time', value: '3–6 weeks' },
    ],
    faqs: [
      { q: 'Can these systems be integrated with existing buildings?', a: 'Yes. We support retrofit and new-build integrations depending on the building infrastructure and control requirements.' },
      { q: 'Do you support large smart-building deployments?', a: 'Yes. Our team can coordinate scalable packages for complex commercial and hospitality projects.' },
    ],
  },
};

export function getSolutionCategory(slug: string) {
  return solutionCategoryDetails[slug];
}
