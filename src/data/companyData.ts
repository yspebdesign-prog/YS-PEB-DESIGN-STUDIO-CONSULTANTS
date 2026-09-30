import { ServiceItem, DesignSample, IndustryItem, ProcessStep, FeaturedProject } from '../types';

export const COMPANY_INFO = {
  name: 'YS PEB DESIGN STUDIO & CONSULTANTS',
  shortName: 'YS PEB Design Studio',
  tradeName: 'YS PEB DESIGN STUDIO & CONSULTANTS',
  legalName: 'Yash',
  tagline: 'Complete PEB Design Solutions — From Design to Fabrication',
  secondaryTagline: 'From Structural Design to Fabrication-Ready Drawings',
  sloganBanner: 'From Design to Fabrication Support',
  businessType: 'Pre-Engineered Building (PEB) Design Studio & Structural Engineering Consultancy',
  contactPerson: 'Yash Singh',
  phone: '+91 8810616535',
  phoneRaw: '918810616535',
  phoneDisplay: '+91 8810616535',
  email: 'ys.peb.design@gmail.com',
  gstNumber: '07BVIPY9182R1Z5',
  address: {
    line1: 'G/F, B-115, Kh No 44/2, Gali No-4/3',
    line2: 'Karawal Nagar, Rama Garden',
    city: 'New Delhi',
    pincode: '110094',
    state: 'Delhi',
    country: 'India',
    full: 'G/F, B-115, Kh No 44/2, Gali No-4/3, Karawal Nagar, Rama Garden, New Delhi - 110094',
  },
  primaryMarkets: [
    'Delhi NCR',
    'Uttar Pradesh',
    'Haryana',
    'Rajasthan',
    'Gujarat',
    'Pan India Engineering Support',
  ],
  targetAudience: [
    'PEB Fabricators',
    'Steel Structure Fabricators',
    'Industrial Contractors',
    'Construction Companies',
    'Warehouse Developers',
    'Factory Owners',
    'Industrial Building Contractors',
    'Infrastructure Companies',
    'Small & Medium PEB Companies lacking in-house design teams',
  ],
  whatsappDefaultMsg:
    'Hello YS PEB Design Studio & Consultants,\nI am interested in your PEB design / detailing services. I would like to discuss my project.',
  workingHours: 'Monday – Saturday: 9:30 AM – 7:00 PM IST',
  social: {
    linkedin:
      'https://www.linkedin.com/in/ys-peb-21b2143b2?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    instagram:
      'https://www.instagram.com/ys_peb_design_studio?stkn=MXBkNjFnZ2htNDNzNg==',
  },
};

export const TRUST_CARDS = [
  {
    title: 'PEB Structural Design',
    desc: 'Optimized tapered members, clear span geometry & accurate stress analysis',
    icon: 'DraftingCompass',
  },
  {
    title: 'Fabrication-Ready Drawings',
    desc: 'Detailed shop drawings, part marks, assembly sheets & erection plans',
    icon: 'FileText',
  },
  {
    title: 'Accurate Load Calculations',
    desc: 'Rigorous dead, live, wind, seismic & crane load assessment',
    icon: 'Activity',
  },
  {
    title: 'Engineering Support',
    desc: 'Continuous technical coordination from concept through site execution',
    icon: 'ShieldCheck',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'peb-structural-design',
    pageId: 'peb-design',
    title: 'PEB Structural Design',
    shortTitle: 'PEB Design',
    category: 'Core Engineering',
    tagline: 'Optimized tapered sections, clear span framing & structural economy',
    description:
      'Complete structural design solutions for Pre-Engineered Buildings based on project requirements, geometry, loading conditions and applicable design standards.',
    keyDeliverables: [
      '3D structural analysis model',
      'Optimized tapered plate profile schedules',
      'Main rigid frame design reports',
      'Secondary member (Purlin/Girt) design',
      'Bracing system & sag rod design',
      'Structural reaction summaries for foundations',
    ],
    technicalScope: [
      'Building configuration & geometry optimization',
      'Primary framing (tapered columns & rafters)',
      'Secondary framing (Cold-formed Z/C purlins and girts)',
      'Roof & wall bracing systems (rods, cables, or angles)',
      'Connection design & flange bracing requirements',
      'Deflection and drift limits assessment',
    ],
    iconName: 'Building2',
  },
  {
    id: 'peb-detailing',
    pageId: 'detailing',
    title: 'PEB Detailing',
    shortTitle: 'Detailing',
    category: 'Documentation',
    tagline: 'Precision component detailing to eliminate shop and site errors',
    description:
      'Detailed and fabrication-friendly drawings prepared to support accurate manufacturing and site erection.',
    keyDeliverables: [
      'Comprehensive Anchor Bolt setting plans',
      'Detailed General Arrangement (GA) drawings',
      'Individual component Part Drawings with hole punching dimensions',
      'Shop Assembly drawings with welding details',
      'Roof & Wall Sheeting layout plans',
      'Hardware & Bolt summary lists',
    ],
    technicalScope: [
      'Part numbering system & marking diagrams',
      'High-precision cleat and gusset plate detailing',
      'Erection marking plans for swift field assembly',
      'Flange brace and sag rod placement details',
      'Framed openings for overhead doors, louvers & vents',
    ],
    iconName: 'Compass',
  },
  {
    id: 'ga-drawings',
    pageId: 'detailing',
    title: 'GA Drawings (General Arrangement)',
    shortTitle: 'GA Drawings',
    category: 'Engineering Plans',
    tagline: 'Architectural clarity and structural alignment for clients and authorities',
    description:
      'General Arrangement drawings presenting building geometry, framing arrangement, dimensions, elevations and important structural information.',
    keyDeliverables: [
      'Building plan views & grid layouts',
      'Transverse and longitudinal cross-sections',
      'All exterior building elevations',
      'Eave and ridge height dimensioning',
      'Roof and wall framing layouts',
      'Door, window, and crane bracket clearance markers',
    ],
    technicalScope: [
      'Overall building dimensional control',
      'Clear span and clear height verification',
      'Coordination with architectural & utility layouts',
      'Cladding and insulation boundary definitions',
    ],
    iconName: 'Layers',
  },
  {
    id: 'fabrication-drawings',
    pageId: 'detailing',
    title: 'Fabrication Drawings',
    shortTitle: 'Fabrication Drawings',
    category: 'Shop Floor Support',
    tagline: 'Built specifically for fabricators: cut lists, weld symbols, and bolt grids',
    description:
      'Detailed drawings developed with fabrication and erection requirements in mind.',
    keyDeliverables: [
      'Shop drawings for built-up tapered rafters & columns',
      'Flange splice and web cut-out dimensions',
      'Base plate & cap plate punching details',
      'Bracing clip & purlin cleat detail sheets',
      'Bill of Materials (BOM) with precise cut lengths',
      'Shop welding details conforming to standards',
    ],
    technicalScope: [
      'Fabrication tolerances and clearance checks',
      'Minimization of steel scrap/waste through standard plate nesting',
      'Clear weld symbols and edge bevel specifications',
      'Shipping piece weight calculations',
    ],
    iconName: 'Hammer',
  },
  {
    id: 'foundation-design',
    pageId: 'foundation-design',
    title: 'Foundation Design',
    shortTitle: 'Foundation Design',
    category: 'Substructure',
    tagline: 'Engineered pedestals, footing sizing, and anchor bolt interface coordination',
    description:
      'Foundation and pedestal design based on structural requirements and project conditions.',
    keyDeliverables: [
      'Foundation layout and pedestal marking drawings',
      'Isolated and combined footing sizing calculations',
      'Pedestal reinforcement detailing & tie beam design',
      'Anchor bolt cluster embedment details',
      'Foundation interface reaction schedules',
    ],
    technicalScope: [
      'Transfer of base shear, axial load, and overturning moments',
      'Coordination with project-specific soil bearing capacities',
      'Tie beam integration for seismic and lateral stability',
      'Pedestal sizing based on base plate & anchor bolt clearances',
    ],
    iconName: 'Columns3',
  },
  {
    id: 'load-calculation',
    pageId: 'structural-design',
    title: 'Load Calculation',
    shortTitle: 'Load Analysis',
    category: 'Engineering Physics',
    tagline: 'Comprehensive loading matrices for safety, longevity, and structural balance',
    description:
      'Consideration of relevant dead loads, live loads, wind loads, seismic loads and other applicable loading conditions.',
    keyDeliverables: [
      'Primary structural dead load analysis (self-weight + cladding + accessories)',
      'Roof live loads and collateral mechanical/electrical service loads',
      'Wind load analysis based on basic wind speed and terrain categories',
      'Seismic load analysis corresponding to project seismic zones',
      'EOT Crane vertical, lateral surge, and longitudinal tractive forces',
    ],
    technicalScope: [
      'Evaluation of basic wind speed (Vb) and risk coefficients',
      'Internal and external pressure coefficients (Cpi / Cpe)',
      'Dynamic crane wheel load combinations and runway girder checks',
      'Deflection envelope verification under service combinations',
    ],
    iconName: 'Cpu',
  },
  {
    id: 'quantity-estimation',
    pageId: 'estimation',
    title: 'Quantity / Estimation',
    shortTitle: 'Estimation',
    category: 'Commercial Support',
    tagline: 'Accurate steel tonnage calculations to protect your margins during bidding',
    description:
      'Material quantity and project estimation support for PEB structures.',
    keyDeliverables: [
      'Preliminary structural steel tonnage estimation',
      'Primary built-up steel weight summary',
      'Secondary cold-formed steel (Z/C purlins) breakdown',
      'Sheeting, trim, and flashing surface area estimates',
      'Anchor bolts, high-strength connection bolts, and accessories count',
      'Material summary for competitive fabricator bidding',
    ],
    technicalScope: [
      'Weight optimization through efficient plate sizing',
      'Separation of primary frames, secondary framing, and cladding components',
      'Support for pre-bid tender estimates and post-design BOM reconciliation',
    ],
    iconName: 'Calculator',
  },
  {
    id: 'stability-certificate',
    pageId: 'stability-certificate',
    title: 'Stability Certificate Support',
    shortTitle: 'Stability Support',
    category: 'Documentation Support',
    tagline: 'Engineering calculation records and compliance coordination',
    description:
      'Engineering documentation and stability certificate support, subject to project requirements and applicable professional certification requirements.',
    keyDeliverables: [
      'Structural calculation packages & analysis verification reports',
      'As-designed structural member capacity check summaries',
      'Coordination documentation for chartered/structural engineers',
      'Deflection and load test review support where required',
    ],
    technicalScope: [
      'Compilation of verified design documentation',
      'Review against design assumptions and site constraints',
      'Professional coordination with authorized certifying authorities',
    ],
    iconName: 'FileCheck2',
  },
  {
    id: 'design-consultancy',
    pageId: 'about',
    title: 'Design Consultancy',
    shortTitle: 'Consultancy',
    category: 'Advisory',
    tagline: 'Technical guidance for fabricators, contractors, and project developers',
    description:
      'Technical design support for PEB fabricators and contractors, including design coordination and engineering assistance.',
    keyDeliverables: [
      'Value engineering reviews to optimize structural tonnage',
      'Connection design consulting for easier shop fabrication',
      'Framing layout feasibility studies for non-standard geometries',
      'On-call engineering support during site erection and queries',
    ],
    technicalScope: [
      'Bridge between structural intent and shop floor realities',
      'Resolution of site deviations and erection queries',
      'Technical tender evaluation for developers and contractors',
    ],
    iconName: 'Wrench',
  },
];

export const DESIGN_TO_FABRICATION_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Project Requirements',
    subtitle: 'Scope & Geometry Definition',
    description:
      'Collection and review of architectural plans, building dimensions (Length x Width x Height), bay spacing, crane requirements, cladding preferences, and local wind/seismic zone criteria.',
    deliverables: ['Design Input Sheet', 'Load Parameter Matrix', 'Framing Scheme Proposal'],
  },
  {
    step: '02',
    title: 'Structural Analysis & Design',
    subtitle: '3D Simulation & Member Sizing',
    description:
      'Complete 3D computer analysis applying dead, live, wind, seismic, and crane loads. Sizing and optimization of tapered web/flange plates and secondary cold-formed sections.',
    deliverables: ['3D Analysis Model', 'Design Calculation Note', 'Reaction Schedule'],
  },
  {
    step: '03',
    title: 'GA / Design Drawings',
    subtitle: 'Layout & Architectural Alignment',
    description:
      'Preparation of detailed General Arrangement (GA) drawings displaying building layouts, elevations, cross-sections, anchor bolt plans, and framing grids for client approval.',
    deliverables: ['Anchor Bolt Plan', 'GA Framing Plans', 'Transverse Sections & Elevations'],
  },
  {
    step: '04',
    title: 'Detailed Fabrication Drawings',
    subtitle: 'Shop-Floor Precision Documentation',
    description:
      'Generation of comprehensive fabrication documentation including assembly drawings, part drawings with cutting/punching data, weld callouts, and bolt lists.',
    deliverables: ['Shop Assembly Sheets', 'Part Details with Cut Lists', 'Fastener & BOM Summary'],
  },
  {
    step: '05',
    title: 'Fabrication & Site Support',
    subtitle: 'Erection Plans & Technical Coordination',
    description:
      'Delivering erection layout plans, member marking diagrams, and providing responsive technical clarification for shop floor personnel and site erection teams.',
    deliverables: ['Erection Marking Drawings', 'Technical Query Support', 'As-Built Reconciliations'],
  },
];

export const WORK_PROCESS_6_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Share Project Requirements',
    subtitle: 'Submit data via Form or WhatsApp',
    description:
      'Send building dimensions, location, preliminary architectural sketches, crane capacity, and specific fabrication guidelines.',
    deliverables: ['Project Specification Sheet', 'Immediate Acknowledgment'],
  },
  {
    step: '02',
    title: 'Review Drawings & Data',
    subtitle: 'Engineering Feasibility Assessment',
    description:
      'Thorough examination of geometry, site wind/seismic factors, crane clearance parameters, and material availability.',
    deliverables: ['Feasibility Checklist', 'Confirmed Timeline & Scope'],
  },
  {
    step: '03',
    title: 'Engineering / Structural Design',
    subtitle: 'Finite Element Modeling & Optimization',
    description:
      'Rigorous 3D structural analysis, load combinations calculation, and member section optimization to balance safety and steel economy.',
    deliverables: ['Analysis Summary', 'Column & Rafter Plate Schedules'],
  },
  {
    step: '04',
    title: 'GA & Detailed Drawings',
    subtitle: 'Preparation of Production CAD Sets',
    description:
      'Drafting of General Arrangement drawings, anchor bolt coordinates, fabrication part marks, and connection detailing.',
    deliverables: ['Anchor Bolt Plan', 'GA Drawing Set', 'Component Part Drawings'],
  },
  {
    step: '05',
    title: 'Client Coordination',
    subtitle: 'Review & Revision Iterations',
    description:
      'Collaborative review with the fabricator or project contractor to incorporate shop tooling preferences and client feedback.',
    deliverables: ['Incorporated Revisions', 'Final Approval Sign-off'],
  },
  {
    step: '06',
    title: 'Final Deliverables',
    subtitle: 'Ready-to-Fabricate Package Delivery',
    description:
      'Release of complete PDF and CAD drawing sets, bill of materials (BOM), bolt lists, and foundation interface reactions.',
    deliverables: ['High-Res PDF Sets', 'Editable CAD / DXF Files', 'BOM & Fastener Lists'],
  },
];

export const DESIGN_SAMPLES: DesignSample[] = [
  {
    id: 'sample-ga',
    title: 'PEB General Arrangement (GA) Drawing',
    category: 'PEB GA Sample',
    drawingNumber: 'YS-SMP-GA-001',
    scale: '1:100 @ A1',
    description:
      'Sample demonstration drawing presenting clear span portal frame geometry, longitudinal framing, crane clearance envelopes, and roof/wall sheeting layouts.',
    specifications: {
      span: '28.0 m Clear Span',
      eaveHeight: '9.5 m Eave Height',
      baySpacing: '6 Bays @ 7.5 m (45.0 m Length)',
      steelGrade: 'Grade 345 / 250 MPa',
      roofSlope: '1:10 Standard Slope',
      craneCapacity: '10 MT EOT Crane Provision',
      purlinProfile: 'Z-200 x 2.0 mm Cold Formed',
      designCode: 'Applicable Standard Engineering Practice',
    },
    features: [
      'Comprehensive grid lines and column centerline dimensions',
      'Transverse cross section with haunch and ridge details',
      'End-wall post and rafter arrangement',
      'Complete dimensional schedule for anchor bolts and pedestals',
    ],
    svgType: 'portal-frame',
  },
  {
    id: 'sample-structural',
    title: 'Structural Analysis & Frame Design Sample',
    category: 'Structural Design Sample',
    drawingNumber: 'YS-SMP-STR-002',
    scale: 'Technical Report / Schematic',
    description:
      'Sample demonstration of 3D analytical member sizing, stress utilization envelopes, moment distribution diagrams, and reaction summaries.',
    specifications: {
      span: '24.0 m Clear Span',
      eaveHeight: '8.0 m Clear Height',
      baySpacing: '6.5 m Typical Bay',
      steelGrade: 'Built-up Web/Flange Fe350',
      roofSlope: '1:10 Pitched',
      designCode: 'Load combination analysis & serviceability verification',
    },
    features: [
      'Moment diagram with haunch optimization',
      'Deflection envelope check under wind suction and gravity loads',
      'Plate thickness transitions along tapered rafter spans',
      'Anchor bolt reactions for foundation design interface',
    ],
    svgType: 'knee-joint',
  },
  {
    id: 'sample-fabrication',
    title: 'Shop Fabrication & Assembly Drawing Sample',
    category: 'Fabrication Drawing Sample',
    drawingNumber: 'YS-SMP-FAB-003',
    scale: '1:20 & 1:10 @ A2',
    description:
      'Sample demonstration of built-up tapered column and rafter fabrication sheet, displaying individual part cut dimensions, hole pitching, weld details, and BOM.',
    specifications: {
      steelGrade: 'Plate IS:2062 Gr E250 / E350',
      purlinProfile: 'Web-to-flange continuous submerged arc welding',
    },
    features: [
      'Individual part marks (P1, P2, FL1, WB1, ST1) with cut lengths',
      'Precision bolt hole diameters and center-to-center gauge lines',
      'Full penetration and fillet weld callouts',
      'Shipping piece mark and assembly weights',
    ],
    svgType: 'purlin-detail',
  },
  {
    id: 'sample-connection',
    title: 'High-Strength Bolted Connection Detail Sample',
    category: 'Connection Detail Sample',
    drawingNumber: 'YS-SMP-CON-004',
    scale: '1:10 @ A3',
    description:
      'Sample demonstration of moment-resisting knee (eave) and apex (ridge) splice joints using High-Strength Friction Grip (HSFG) bolts and end plates.',
    specifications: {
      steelGrade: 'Grade 8.8 / 10.9 HSFG Bolts',
    },
    features: [
      'Extended end-plate moment connection detailing',
      'Stiffener plates at tension and compression zones',
      'Backing plate and diagonal column web stiffeners',
      'Flange brace cleat connection for lateral torsional buckling resistance',
    ],
    svgType: 'base-plate',
  },
  {
    id: 'sample-foundation',
    title: 'Pedestal & Foundation Interface Sample',
    category: 'Foundation Drawing Sample',
    drawingNumber: 'YS-SMP-FND-005',
    scale: '1:25 @ A2',
    description:
      'Sample demonstration of RC pedestal sizing, anchor bolt projection templates, footing reinforcement, and column base plate interaction.',
    specifications: {
      steelGrade: 'Grade 4.6 / 8.8 Anchor Bolts',
    },
    features: [
      'Pin-base and fixed-base anchor bolt cluster layout',
      'Non-shrink grout layer specification (25-50 mm)',
      'Pedestal main vertical reinforcement and shear ties',
      'Anchor bolt template washer plates and embedment sleeves',
    ],
    svgType: 'pedestal',
  },
];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  {
    id: 'warehouses',
    title: 'Warehouses',
    icon: 'Warehouse',
    description:
      'Large clear-span logistics and distribution facilities requiring optimized internal storage volume, high clearance, and efficient roof drainage.',
    typicalSpan: '24m – 45m Clear Span',
    keyRequirements: ['Maximum storage volume', 'High eave clearance', 'Dock leveler integration', 'Skylight optimization'],
    idealFor: 'Logistics hubs, 3PL providers, e-commerce fulfillment centers',
  },
  {
    id: 'manufacturing-units',
    title: 'Manufacturing Units',
    icon: 'Factory',
    description:
      'Robust industrial buildings designed for heavy machinery, overhead EOT crane operation, high ventilation, and process utility supports.',
    typicalSpan: '18m – 36m Multi-Span / Clear',
    keyRequirements: ['EOT Crane runway integration', 'Vibration isolation', 'Heavy floor live loads', 'Utility pipe racks'],
    idealFor: 'Heavy engineering, automotive parts, machinery assembly',
  },
  {
    id: 'industrial-buildings',
    title: 'Industrial Buildings',
    icon: 'Building',
    description:
      'Versatile multi-bay industrial complexes catering to medium and light engineering processes with integrated administrative offices.',
    typicalSpan: '20m – 40m Spans',
    keyRequirements: ['Mezzanine floor integration', 'Fire safety zoning', 'Service openings', 'Energy-efficient daylighting'],
    idealFor: 'Industrial parks, processing facilities, maintenance hubs',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    icon: 'Wrench',
    description:
      'Compact to medium steel structures engineered for vehicle servicing, tool fabrication, and repair depots requiring wide access bays.',
    typicalSpan: '15m – 25m Clear Span',
    keyRequirements: ['Wide rolling shutter bays', 'Overhead hoist support', 'Natural ventilation (ridge vents/louvers)'],
    idealFor: 'Automotive workshops, heavy equipment service yards, repair depots',
  },
  {
    id: 'factories',
    title: 'Factories',
    icon: 'Boxes',
    description:
      'Process-driven industrial sheds with specific thermal, acoustic, and environmental containment requirements for production lines.',
    typicalSpan: '24m – 40m Spans',
    keyRequirements: ['Insulated roofing and cladding', 'Process exhaust penetrations', 'Overhead cable tray supports'],
    idealFor: 'Textile mills, FMCG packaging, electronics assembly plants',
  },
  {
    id: 'storage-buildings',
    title: 'Storage Buildings',
    icon: 'Package',
    description:
      'Economical, fast-track steel structures dedicated to raw material stockpiling, agricultural produce, and packaged commodities.',
    typicalSpan: '18m – 30m Clear Span',
    keyRequirements: ['Cost-effective steel weight', 'Pest and moisture resistant detailing', 'Rapid site erection'],
    idealFor: 'Raw material godowns, chemical storage, seasonal harvest storage',
  },
  {
    id: 'logistics-buildings',
    title: 'Logistics Buildings',
    icon: 'Truck',
    description:
      'High-throughput freight terminals with multiple loading bays, canopy projections, and continuous internal movement corridors.',
    typicalSpan: '30m – 50m Clear / Multi-Span',
    keyRequirements: ['Extended cantilever canopies', 'High-traffic apron clearances', 'Column-free sorting zones'],
    idealFor: 'Freight forwarders, cross-dock terminals, express parcel sorting hubs',
  },
  {
    id: 'commercial-industrial-sheds',
    title: 'Commercial / Industrial Sheds',
    icon: 'Store',
    description:
      'Multi-purpose industrial sheds suitable for wholesale markets, service stations, and commercial equipment displays.',
    typicalSpan: '15m – 30m Spans',
    keyRequirements: ['Aesthetic exterior facade interface', 'Glazing and canopy coordination', 'Adaptable floor layouts'],
    idealFor: 'Wholesale steel/hardware marts, exhibition halls, commercial sheds',
  },
  {
    id: 'agricultural-utility',
    title: 'Agricultural / Utility Structures',
    icon: 'Tractor',
    description:
      'Durable, ventilated structures for farm equipment shelters, grain storage silos, poultry sheds, and rural utility depots.',
    typicalSpan: '12m – 24m Spans',
    keyRequirements: ['Natural cross-ventilation', 'Corrosion-resistant detailing', 'Economical foundation interfaces'],
    idealFor: 'Agro-processing centers, cold-storage sheds, farm equipment housings',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Fabrication-Oriented Design',
    desc: 'We design structures with shop-floor practicalities in mind: standard plate nesting, sensible bolt gauges, and sensible plate thicknesses that minimize scrap and speed up fabrication.',
    icon: 'Layers',
  },
  {
    title: 'Practical Engineering Approach',
    desc: 'Our structural schemes bridge the gap between complex finite-element modeling and real-world site execution, preventing costly on-site modifications.',
    icon: 'Wrench',
  },
  {
    title: 'Detailed Drawings',
    desc: 'Every drawing package is prepared with thorough part marks, hole locations, assembly marks, and clear weld symbols for unambiguous execution.',
    icon: 'FileText',
  },
  {
    title: 'Clear Documentation',
    desc: 'Clean, structured documentation including design summaries, reaction sheets, BOM lists, and bolt schedules that keep clients and fabrication managers aligned.',
    icon: 'BookOpen',
  },
  {
    title: 'Responsive Coordination',
    desc: 'Direct communication with dedicated engineering personnel. Prompt response to shop queries, revisions, and site coordination needs.',
    icon: 'PhoneCall',
  },
  {
    title: 'Project-Specific Solutions',
    desc: 'No one-size-fits-all templates. Every building configuration is engineered strictly for its geographic wind zone, seismic conditions, and operational geometry.',
    icon: 'Settings2',
  },
  {
    title: 'Dedicated Support for Fabricators',
    desc: 'We act as an outsourced, reliable technical extension for PEB fabricators and contractors who need professional engineering without the overhead of an in-house team.',
    icon: 'Shield',
  },
  {
    title: 'Focus on Accuracy & Timely Delivery',
    desc: 'Strict checking workflows to ensure dimensions, clearances, and schedules are accurate the first time, keeping your project timelines on track.',
    icon: 'Clock',
  },
];

export const FAQS = [
  {
    q: 'What services does YS PEB Design Studio & Consultants provide?',
    a: 'We provide end-to-end engineering support for Pre-Engineered Buildings, including complete structural design, 3D analysis, General Arrangement (GA) drawings, fabrication shop drawings, anchor bolt plans, foundation/pedestal design, material quantity estimation, and technical design consultancy.',
  },
  {
    q: 'How do you support PEB fabricators who do not have an in-house design team?',
    a: 'We act as your dedicated external engineering team. You send us the building parameters and architectural requirements; we deliver complete structural analysis, GA drawings for client approval, and ready-to-cut fabrication part drawings with BOM and bolt lists. We offer flexible support on a project-by-project basis or for regular ongoing requirements.',
  },
  {
    q: 'What information is needed to start a PEB design and quote?',
    a: 'To begin, we typically require: building dimensions (Length x Width x Eave Height), project location (to determine wind speed and seismic zone), bay spacing preference, roof slope, crane requirement (tonnage and hook height, if any), mezzanine details (if any), and preferred sheeting or brickwork heights.',
  },
  {
    q: 'What deliverables are included in a typical drawing package?',
    a: 'A complete package includes: Anchor Bolt Layout & Reaction Summary, General Arrangement (GA) Framing Plans, Transverse & Longitudinal Sections, Detailed Shop Assembly & Part Drawings, Connection Details with weld/bolt data, Roof/Wall Sheeting Plans, and Bill of Materials (BOM).',
  },
  {
    q: 'In what formats do you provide deliverables?',
    a: 'We deliver clean, high-resolution PDF sets for printing and site use, as well as editable CAD / DXF format files where required for automated CNC cutting and shop floor coordination.',
  },
  {
    q: 'What is your policy regarding Stability Certificates?',
    a: 'Stability certificate requirements vary depending on the project, authority, and applicable regulations. Where required, engineering documentation and calculation packages can be prepared and certification coordinated with the appropriate qualified/authorized professional as per statutory requirements.',
  },
  {
    q: 'Which regions across India do you serve?',
    a: 'We operate pan-India, with special focus and quick coordination in Delhi NCR, Uttar Pradesh, Haryana, Rajasthan, and Gujarat.',
  },
  {
    q: 'How is project pricing determined?',
    a: 'Pricing depends on project scope, building size, required drawings, complexity (e.g., presence of heavy cranes, multiple mezzanines, complex geometry), and engineering requirements. Contact us with your project details for a transparent, project-specific quotation.',
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'proj-logistics-warehouse',
    title: 'Industrial Logistics & Distribution Warehouse',
    sector: 'Logistics, Warehousing & Supply Chain',
    location: 'Delhi-NCR (Farukhnagar Corridor)',
    buildingType: 'Clear-Span High-Bay PEB Warehouse',
    specs: {
      spanAndHeight: '36m Clear Span • 12.5m Clear Height (180m Length)',
      baySpacing: '8.0m Typical Bay Spacing',
      craneCapacity: 'Mezzanine Provisions (Heavy Deck Load 10 kN/m²)',
      designStandard: 'IS 800:2007 • MBMA 2010 • IS 875 (Part 3 Wind)',
      steelTonnage: 'Approx. 410 MT',
      builtUpArea: '6,480 sq.m (69,750 sq.ft)',
    },
    scopeOfWork: [
      '3D STAAD.Pro Structural Modeling & Wind Deflection Verification',
      'General Arrangement (GA) Framing & Cladding Approval Plans',
      'Anchor Bolt Layout & Foundation Reaction Package',
      'Detailed Shop Assembly & CNC Part Cut Drawings with BOM',
    ],
    status: 'Design & Detailing Completed',
    drawingRef: 'DWG-NCR-LOG-01',
  },
  {
    id: 'proj-heavy-manufacturing',
    title: 'Heavy Manufacturing & Engineering Shed',
    sector: 'Automotive & Heavy Equipment Fabrication',
    location: 'Pithampur Industrial Area, Madhya Pradesh',
    buildingType: 'Heavy Crane-Equipped Industrial Shed',
    specs: {
      spanAndHeight: '30m Clear Span • 11.0m Eave Height (120m Length)',
      baySpacing: '7.5m Typical Bay Spacing',
      craneCapacity: '25 MT Heavy Duty EOT Crane (Class IV Duty)',
      designStandard: 'IS 800:2007 • IS 807 (Crane Code) • MBMA',
      steelTonnage: 'Approx. 345 MT',
      builtUpArea: '3,600 sq.m (38,750 sq.ft)',
    },
    scopeOfWork: [
      'Crane Runway Girder, Surge Truss & Bracket Engineering',
      '3D Dynamic Seismic & Wind Surge Structural Analysis',
      'Complete Shop Fabrication Drawings with Weld Symbols & HSFG Bolt Lists',
      'Pedestal & Isolated Foundation Coordination Package',
    ],
    status: 'Design & Detailing Completed',
    drawingRef: 'DWG-MP-MFG-02',
  },
  {
    id: 'proj-agro-processing',
    title: 'Agro Commodity Processing & Storage Facility',
    sector: 'Agro-Processing, Milling & Grain Storage',
    location: 'Panipat Industrial Zone, Haryana',
    buildingType: 'Gabled Portal Frame Processing Plant',
    specs: {
      spanAndHeight: '28m Clear Span • 9.5m Clear Height (90m Length)',
      baySpacing: '6.0m Typical Bay Spacing',
      craneCapacity: '5 MT Underslung Maintenance Hoist',
      designStandard: 'IS 800:2007 • IS 875 • MBMA Standards',
      steelTonnage: 'Approx. 195 MT',
      builtUpArea: '2,520 sq.m (27,125 sq.ft)',
    },
    scopeOfWork: [
      'Optimized 3D Tapered Portal Frame Structural Design',
      'General Arrangement (GA) Approval Plans & Sections',
      'Shop Floor Assembly Details with Part Coordinates',
      'RCC Column Pedestal & Footing Design Calculations',
    ],
    status: 'Design & Detailing Completed',
    drawingRef: 'DWG-PAN-AGR-03',
  },
  {
    id: 'proj-multi-bay-godown',
    title: 'Multi-Bay Raw Material Storage Godown',
    sector: 'Industrial Storage & Bulk Goods Distribution',
    location: 'Sanand Industrial Hub, Gujarat',
    buildingType: 'Multi-Span Rigid Frame Structure (2-Bay)',
    specs: {
      spanAndHeight: '2 × 24m Multi-Span (48m Width) • 8.5m Clear Height (140m Length)',
      baySpacing: '7.0m Typical Bay Spacing',
      craneCapacity: 'Internal Valley Gutter & High-Capacity Drainage System',
      designStandard: 'IS 800:2007 • MBMA 2010 • NBC 2016',
      steelTonnage: 'Approx. 380 MT',
      builtUpArea: '6,720 sq.m (72,330 sq.ft)',
    },
    scopeOfWork: [
      'Multi-Span Frame Analysis with Internal Column Optimization',
      'Comprehensive GA Framing, Eave & Ridge Flashing Details',
      'Fabrication-Ready Component Part Drawings with Plate Nesting',
      'Foundation Reaction Summary & Base Plate Stiffener Details',
    ],
    status: 'Design & Detailing Completed',
    drawingRef: 'DWG-GUJ-STG-04',
  },
  {
    id: 'proj-textile-spinning',
    title: 'Textile Weaving & Spinning Complex',
    sector: 'Textiles & Apparel Infrastructure',
    location: 'Surat Industrial Corridor, Gujarat',
    buildingType: 'Wide Clear-Span Climate-Controlled Factory',
    specs: {
      spanAndHeight: '32m Clear Span • 8.0m Clear Height (110m Length)',
      baySpacing: '8.0m Typical Bay Spacing',
      craneCapacity: '3 MT Utility Hoist / Overhead HVAC & Ducting Loads',
      designStandard: 'IS 800:2007 • IS 1893 (Seismic Zone III) • MBMA',
      steelTonnage: 'Approx. 260 MT',
      builtUpArea: '3,520 sq.m (37,880 sq.ft)',
    },
    scopeOfWork: [
      'Rigid Deflection & Vibration Control Engineering Analysis',
      'Architectural Coordination & GA Approval Sets',
      'Fabrication Shop Drawings & Part Erection Mark Plans',
      'Civil Foundation & Machine Base Coordination Drawings',
    ],
    status: 'Design & Detailing Completed',
    drawingRef: 'DWG-SRT-TEX-05',
  },
  {
    id: 'proj-auto-press-shop',
    title: 'Automotive Press Shop & Stamping Unit',
    sector: 'Automotive OEM Manufacturing & Tooling',
    location: 'IMT Manesar, Haryana',
    buildingType: 'Heavy Industrial PEB with Tandem Cranes',
    specs: {
      spanAndHeight: '35m Clear Span • 14.0m Clear Height (150m Length)',
      baySpacing: '7.5m Typical Bay Spacing',
      craneCapacity: 'Dual Tandem 20 MT + 10 MT Heavy EOT Cranes',
      designStandard: 'IS 800:2007 • IS 807 • MBMA 2010',
      steelTonnage: 'Approx. 520 MT',
      builtUpArea: '5,250 sq.m (56,510 sq.ft)',
    },
    scopeOfWork: [
      '3D Heavy Industrial Structural Modeling & Crane Fatigue Analysis',
      'General Arrangement Approval Package & Elevation Sections',
      'Full Shop Fabrication Drawings with CNC Cutting Schedules & BOM',
      'Heavy Equipment Pedestal Foundation & Anchor Embedment Design',
    ],
    status: 'Design & Detailing Completed',
    drawingRef: 'DWG-MNS-AUT-06',
  },
];

