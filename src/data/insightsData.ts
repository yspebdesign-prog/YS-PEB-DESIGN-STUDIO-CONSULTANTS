import { InsightArticle } from '../types';

export const INITIAL_INSIGHTS: InsightArticle[] = [
  {
    id: 'tapered-rafter-optimization-case-study',
    slug: 'tapered-rafter-optimization-case-study',
    title: 'Optimizing Tapered I-Beam Rafters: Achieving 14.8% Steel Tonnage Reduction in a 36m Clear-Span Warehouse',
    subtitle: 'A detailed structural analysis of moment-profile matching, web-depth gradients, and flange bracing configuration under IS 800:2007 Limit State Design.',
    excerpt: 'How careful variation of tapered portal frame web depths and selective flange transitions reduced total structural steel by 32 metric tons for an industrial logistics facility in Ghaziabad, UP without compromising code safety.',
    category: 'PEB Optimization',
    type: 'Case Study',
    readTime: '7 min read',
    date: 'March 14, 2026',
    author: {
      name: 'Yash Singh',
      role: 'Lead PEB Structural Consultant, YS PEB Design Studio',
    },
    tags: ['IS 800:2007', 'Clear Span', 'Steel Weight', 'Tapered Rafter', 'Ghaziabad UP', 'Value Engineering'],
    featured: true,
    codeReferences: [
      'IS 800:2007 — General Construction in Steel (Limit State Method)',
      'IS 875 (Part 1, 2 & 3): 2015 — Design Loads for Buildings',
      'MBMA 2010 — Metal Building Systems Manual',
    ],
    projectMetrics: {
      span: '36.0m Clear Span',
      tonnage: '184 MT (Final) vs 216 MT (Pre-bid estimate)',
      savings: '14.8% (32 MT steel saved)',
      location: 'Ghaziabad Industrial Area, Uttar Pradesh',
      crane: 'Future provision for 5 MT hoist',
    },
    contentSections: [
      {
        heading: '1. The Engineering Challenge: Clear Span Volume vs. Tonnage Economics',
        body: [
          'In large clear-span industrial buildings, primary rigid portal frames account for 55% to 65% of the total structural steel tonnage. For a 36m clear-span logistics warehouse with an 8.5m eave height situated in Ghaziabad, the initial tender proposal utilized heavy standard hot-rolled sections and conservative uniform plate depths that resulted in a preliminary structural weight of 216 metric tons.',
          'The client—a competitive steel fabricator facing strict cost margins—engaged YS PEB Design Studio & Consultants to re-engineer and optimize the primary portal framing under IS 800:2007 Limit State criteria while ensuring complete deflection compliance under seismic and high wind conditions (Basic Wind Speed Vb = 47 m/s).',
        ],
        diagramType: 'portal-frame',
      },
      {
        heading: '2. Moment-Gradient Matching: Why Uniform Sections Waste Steel',
        body: [
          'Under gravity and lateral load combinations, bending moments in a pinned-base portal frame peak sharply at the haunch/knee joint (Mu ~ 820 kN·m) and decay rapidly toward the ridge inflection points. Using a uniform rafter section means up to 60% of the span operates at an over-designed stress ratio of 0.35 to 0.50.',
          'By transitioning to built-up tapered plates, we sculpted the member depth precisely matching the envelope bending moment diagram:',
        ],
        bullets: [
          'Haunch Knee Depth: 1,050 mm (flange: 250 x 14 mm, web: 6.0 mm with longitudinal stiffeners)',
          'Mid-Rafter Inflection Zone: Tapered down to 420 mm depth (flange: 200 x 10 mm, web: 5.0 mm)',
          'Ridge Apex Section: Sized at 580 mm depth for positive sagging moments under dead + live loads',
          'Column Base: Pinned base with 400 mm depth expanding to 1,050 mm at knee joint',
        ],
        callout: {
          type: 'formula',
          title: 'IS 800:2007 Section 8.2.2 Check',
          text: 'Design Bending Strength Md = βb · Zp · fyd ≤ 1.2 · Ze · fy / γm0. By verifying local web slenderness (d/tw ≤ 126ε) under combined axial compression and bending, non-compact plate buckling was avoided without adding redundant web stiffeners.',
        },
      },
      {
        heading: '3. Flange Bracing & Lateral-Torsional Buckling (LTB) Control',
        body: [
          'A frequent error in aggressive PEB weight reduction is reducing flange thickness without providing positive lateral restraint. Under high wind uplift (IS 875 Part 3 internal suction + external roof lift), the bottom flange goes into compression over the haunch zone.',
          'We engineered cold-formed angle flange braces (ISA 50x50x4) connected directly from the bottom rafter flange to the adjacent continuous cold-formed Z-purlins at calculated intervals of 3.0m. This reduced the effective unbraced compression length (Lcr) from 9.0m to 1.5m, raising the critical buckling moment Mcr by 240% and eliminating lateral-torsional instability.',
        ],
        diagramType: 'knee-joint',
      },
      {
        heading: '4. Shop-Floor Practicality: Standardizing Plate Widths & Nesting',
        body: [
          'Theoretical weight optimization is worthless if it drives up fabrication scrap. In our workshop detailing package, all web plates were nested from standard 1,250mm and 1,500mm wide raw plates (IS 2062 Grade E250BR), with tapered cuts arranged in mirror pairs to achieve scrap levels below 4.2%.',
          'Flange splices were restricted to standardized 8.8-grade M20 and M24 HSFG bolts with pre-punched template layouts, ensuring that field erection crews completed the 36m frame assembly without a single torch modification on site.',
        ],
      },
    ],
    keyTakeaways: [
      'Sculpting web depth along the bending moment envelope reduced primary framing weight by 14.8% (32 MT total steel saved).',
      'Positive bottom-flange bracing to cold-formed purlins allowed thinner compression flanges without risking lateral-torsional buckling under wind uplift.',
      'Plate nesting coordination ensured theoretical steel savings converted directly to fabrication cost reduction on the shop floor.',
      'All deflection criteria (H/150 for column lateral sway, L/180 for rafter gravity deflection) strictly maintained as per IS 800:2007 Table 6.',
    ],
  },
  {
    id: 'is-875-wind-load-calculations-industrial-sheds',
    slug: 'is-875-wind-load-calculations-industrial-sheds',
    title: 'Demystifying IS 875 (Part 3): 2015 Wind Load Calculations for High-Eave Industrial Sheds in North India',
    subtitle: 'A practical structural engineer’s guide to terrain categories, internal pressure coefficients (Cpi), and localized cladding suction in Delhi NCR, UP & Haryana.',
    excerpt: 'Step-by-step breakdown of basic wind speed derivations, permeability conditions, and local wind suction zones on ridge caps, corner bays, and eaves for safe PEB structural design.',
    category: 'IS Code Standards',
    type: 'Code Guide',
    readTime: '9 min read',
    date: 'March 08, 2026',
    author: {
      name: 'Yash Singh',
      role: 'Lead PEB Structural Consultant, YS PEB Design Studio',
    },
    tags: ['IS 875', 'Wind Load', 'Delhi NCR', 'Terrain Category 2', 'Cladding Loads', 'Cpe & Cpi'],
    featured: false,
    codeReferences: [
      'IS 875 (Part 3): 2015 — Wind Loads on Buildings and Structures',
      'IS 800:2007 — Code of Practice for General Construction in Steel',
      'SP 64 (S&T): 2001 — Explanatory Handbook on Indian Standard Code of Practice for Design Loads',
    ],
    contentSections: [
      {
        heading: '1. Basic Wind Speed (Vb) and Regional Design Velocity (Vz)',
        body: [
          'For structural engineers practicing in North India (Delhi NCR, Greater Noida, Ghaziabad, Faridabad, Gurugram, Sonipat), the basic wind speed specified in IS 875 (Part 3): 2015 Appendix A is Vb = 47 m/s (approx 169 km/h). In Rajasthan zones like Bhiwadi or Neemrana, values range between 47 m/s and 50 m/s.',
          'The design wind speed Vz at height z is evaluated using the fundamental expression:',
        ],
        callout: {
          type: 'formula',
          title: 'Design Wind Speed Formula (IS 875 Cl. 6.3)',
          text: 'Vz = Vb × k1 × k2 × k3 × k4 \nWhere: \n• k1 = Risk coefficient (1.0 for 50-year industrial design life) \n• k2 = Terrain height factor (Terrain Category 2 for open industrial zones) \n• k3 = Topography factor (1.0 for flat ground slope < 3°) \n• k4 = Importance factor for cyclonic region (1.0 for non-coastal North India)',
        },
      },
      {
        heading: '2. Design Wind Pressure (pz) & Critical Height Variations',
        body: [
          'Once Vz is derived, design wind pressure is calculated as pz = 0.6 · (Vz)². For a typical 9.0m eave height warehouse with 1:10 roof slope in Terrain Category 2, Vz at mean roof height (10.5m) evaluates to ~46.2 m/s, yielding a basic design pressure pz = 1.28 kN/m² (128 kg/m²).',
          'However, applying this uniformly is dangerous. Wind pressure acts as dynamic pressure combined with aerodynamic suction across exterior surfaces.',
        ],
      },
      {
        heading: '3. Internal Pressure Coefficients (Cpi): The Permeability Factor',
        body: [
          'Many tender drawings default to an internal pressure coefficient of Cpi = ±0.20 (assuming normal openings < 5%). In real-world industrial logistics and manufacturing sheds, continuous high rolling shutters (frequently left open for loading/unloading) and industrial wall louvers significantly alter the building permeability.',
        ],
        bullets: [
          'Cpi = ±0.20: Buildings with sealed walls and small windows (< 5% wall area)',
          'Cpi = ±0.50: Medium permeability (5% to 20% wall area opened)',
          'Cpi = ±0.70: Dominant openings on one windward wall (high internal pressurization)',
        ],
        callout: {
          type: 'code-warning',
          title: 'Critical Design Warning',
          text: 'Designing a logistics hub with high rolling shutter doors using Cpi = ±0.2 instead of Cpi = ±0.5 can underestimate roof uplift forces on purlins and rafter knee joints by as much as 28%, leading to purlin fastener pull-out during seasonal monsoon squalls.',
        },
      },
      {
        heading: '4. Local Suction Zones: Why Corners & Ridges Fail First',
        body: [
          'Wind tunnel studies codified in Table 5 of IS 875 (Part 3) demonstrate that roof wind pressure is not uniform. The separation of airflow creates intense localized negative pressure (suction) along eaves, gable verges, and ridge caps:',
        ],
        bullets: [
          'Central Roof Zone: External pressure coefficient Cpe = -0.4 to -0.7',
          'Eave & Verge Edges (Zone 0.1w width): Cpe peaks between -1.0 and -1.4',
          'Ridge Cap Zone: Cpe up to -1.2 to -1.5',
        ],
        diagramType: 'purlin-detail',
      },
    ],
    keyTakeaways: [
      'Always verify whether client operations involve continuous open rolling shutters (requiring Cpi = ±0.50 instead of ±0.20).',
      'End bays and verge edges experience 80% to 120% higher localized uplift than interior bays; purlin spacing or gauge must be strengthened locally.',
      'Check self-drilling screw pullout capacity against local suction combinations (1.5 Dead Load uplift combinations).',
      'Combine wind load cases with 0.9 DL + 1.5 WL to ensure foundation uplift and base plate anchoring safety.',
    ],
  },
  {
    id: 'eot-crane-runway-girder-design-considerations',
    slug: 'eot-crane-runway-girder-design-considerations',
    title: 'Overhead EOT Crane Runway Girder Design: Managing Dynamic Lateral Surge & Fatigue in Heavy Fabrication Sheds',
    subtitle: 'Technical guide on crane bracket sizing, runway girder deflection limitations (L/600 to L/800), and rail alignment tolerances.',
    excerpt: 'Detailed review of stepped column geometry, vertical impact allowances (25%), lateral surge forces (10%), and crane runway girder selection for 10 MT to 30 MT industrial cranes.',
    category: 'Structural Engineering',
    type: 'Technical Discussion',
    readTime: '8 min read',
    date: 'February 27, 2026',
    author: {
      name: 'Yash Singh',
      role: 'Lead PEB Structural Consultant, YS PEB Design Studio',
    },
    tags: ['Crane Design', 'EOT Crane', 'Runway Girders', 'Surge Loads', 'Fatigue Check', 'IS 800'],
    featured: false,
    codeReferences: [
      'IS 800:2007 — Section 3.4 (Crane Loadings) & Section 13 (Fatigue)',
      'IS 875 (Part 2): 1987 — Imposed Loads for Industrial Buildings',
      'CISC Crane-Supporting Steel Structures Design Guide',
    ],
    projectMetrics: {
      span: '24.0m Frame Span with 21.5m Crane Rail Span',
      crane: '15 MT EOT Class M5 / Heavy Duty',
      location: 'Faridabad Industrial Cluster, Haryana',
    },
    contentSections: [
      {
        heading: '1. The Dynamic Forces of Electric Overhead Traveling (EOT) Cranes',
        body: [
          'Industrial buildings housing overhead cranes operate under cyclic, dynamic shock loadings that differ substantially from static gravity structures. A moving crane generates three simultaneous force components on the PEB primary frame:',
          '1. Maximum Vertical Wheel Loads (including crane self-weight, crab weight, lifted payload, and vertical impact factor).',
          '2. Lateral Surge Forces (induced across the crane rail by crab acceleration and braking).',
          '3. Longitudinal Tractive Forces (acting parallel to the crane rail induced by bridge wheel braking).',
        ],
      },
      {
        heading: '2. Code Multipliers: Impact Factors as per IS 875 & IS 800',
        body: [
          'Under Indian standards, the following dynamic amplification factors must be rigorously combined with static wheel loads:',
        ],
        bullets: [
          'Vertical Impact: +25% additional static wheel load for electric overhead cranes (+10% for hand-operated cranes).',
          'Transverse Lateral Surge: 10% of the weight of the crab trolley + lifted load, distributed equally across runway rails.',
          'Longitudinal Tractive Force: 5% of all vertical wheel loads applied along the top of rail.',
        ],
        callout: {
          type: 'tip',
          title: 'Stepped Columns vs. Cantilever Brackets',
          text: 'For crane capacities up to 7.5 MT, a cantilever bracket welded directly to a tapered column is economical. For 10 MT to 30 MT cranes, stepped columns (heavy lower column carrying the crane runway girder directly on its cap, with a lighter upper column supporting the roof portal) are structurally superior and prevent excessive column flange twist.',
        },
      },
      {
        heading: '3. Crane Runway Girder Selection & Channel Cap Reinforcement',
        body: [
          'A standard I-beam possesses high vertical section modulus but poor minor-axis (lateral) moment capacity. When the crane trolley brakes abruptly with a 15 MT load, the lateral surge causes severe horizontal bending along the top flange.',
          'The industry standard solution implemented in YS PEB designs is the compound section: an ISMB or built-up plate girder with an inverted channel (ISMC) welded continuously to the top compression flange.',
        ],
        bullets: [
          'Vertical bending moment is resisted by the composite built-up I-section + channel.',
          'Lateral surge bending is resisted exclusively by the top flange + channel behaving as a horizontal beam.',
          'Vertical deflection under static wheel loads without impact is restricted to L/600 (L/800 for precision/foundry cranes).',
          'Horizontal deflection of runway girder restricted to L/400 to prevent rail binding and motor burnout.',
        ],
        diagramType: 'base-plate',
      },
    ],
    keyTakeaways: [
      'Never omit channel reinforcement or wide top flanges on runway girders for cranes exceeding 5 MT.',
      'Check building lateral sway at crane bracket level: maximum lateral drift must be limited to H_bracket / 400 to prevent crane derailment.',
      'Provide crane stops with heavy hydraulic/spring buffers securely anchored to the runway girder ends rather than building columns.',
      'Rail joints should be staggered relative to girder splice joints, with 45-degree mitered joints for smooth wheel traversal.',
    ],
  },
  {
    id: 'eliminating-shop-fabrication-errors-peb-detailing',
    slug: 'eliminating-shop-fabrication-errors-peb-detailing',
    title: 'Eliminating Shop Floor Rework: Critical Detailing Tolerances in Built-Up PEB Plates & End-Plate Splices',
    subtitle: 'From bolt-hole pitch verification to camber compensation: how high-precision shop drawings reduce fabrication cycle times by 30%.',
    excerpt: 'Examining the most frequent manufacturing and erection disconnects between design engineers and fabrication floors, including flange-to-web weld symbols, fit-up tolerances, and CNC nesting.',
    category: 'Fabrication & Detailing',
    type: 'Technical Discussion',
    readTime: '6 min read',
    date: 'February 15, 2026',
    author: {
      name: 'Yash Singh',
      role: 'Lead PEB Structural Consultant, YS PEB Design Studio',
    },
    tags: ['Detailing', 'Shop Drawings', 'HSFG Bolts', 'Camber', 'Fabrication Errors', 'BOM'],
    featured: false,
    codeReferences: [
      'IS 7215:1974 — Tolerances for Fabrication of Steel Structures',
      'IS 4000:1992 — Code of Practice for High Strength Bolts in Steel Structures',
      'AWS D1.1 — Structural Welding Code (Steel)',
    ],
    contentSections: [
      {
        heading: '1. The Cost of Detailing Disconnects',
        body: [
          'In steel fabrication, fixing a mistake on the drawing board costs minutes; fixing it on the shop floor with a plasma cutter costs hours; fixing it at the site 12 meters in the air costs thousands of rupees, delays handover, and damages fabricator reputation.',
          'Over 70% of erection delays stem from detailing ambiguities: mismatched bolt hole grids on matching end plates, incorrect weld edge bevels, clash between flange brace cleats and purlin seats, and inadequate clearance for torque wrench sockets.',
        ],
      },
      {
        heading: '2. Moment End-Plate Splice Details: Pitch & Edge Clearances',
        body: [
          'In rigid moment-resisting knee joints, 8.8 grade M24 or M27 HSFG bolts operate under high pre-tension and prying action. Detailing must guarantee:',
        ],
        bullets: [
          'Standard hole diameter is d + 2.0mm (26mm for M24 bolt). Thermal cutting must be cleanly reamed.',
          'Minimum edge distance from bolt center to plate sheared edge = 1.7 × d_hole (minimum 45mm for M24).',
          'Pitch spacing along the tension flange must provide sufficient clearance for pneumatic impact wrenches (minimum 65mm clearance from web-flange fillet weld toe).',
          'Flush end-plates must be pre-straightened to maintain plate flatness tolerance ≤ 1.0mm across the contact surface.',
        ],
        diagramType: 'knee-joint',
      },
      {
        heading: '3. Web-to-Flange Submerged Arc Welding (SAW) Details',
        body: [
          'Built-up PEB members require double continuous fillet welds connecting the web plate to both flanges. Detailing drawings must clearly designate weld throat sizes (typically 5mm to 8mm leg length) rather than generic full-penetration notes that unnecessarily escalate welding consumable costs.',
          'At high-stress moment connections (within 1.5 times the member depth from the column face), complete joint penetration (CJP) groove welds with backing bars or 100% UT testing notes are mandatory.',
        ],
      },
    ],
    keyTakeaways: [
      'Shop drawings must provide 3D isometric connection orientation to eliminate mirror-image left/right column assembly errors.',
      'Check socket clearance: never locate a high-tension bolt closer than 40mm to a stiffener plate.',
      'Provide 15mm to 25mm shop fabrication camber on rafters exceeding 30m span to prevent visible sag after dead load deflection.',
      'Include accurate shipping piece piece-mark tags and individual component weights on every fabrication drawing for crane lifting planning.',
    ],
  },
  {
    id: 'fixed-vs-pinned-base-foundation-low-sbc',
    slug: 'fixed-vs-pinned-base-foundation-low-sbc',
    title: 'Managing High Base Overturning Moments in PEBs: Pinned vs. Fixed Base on Low Bearing Capacity Soils (SBC 120 kN/m²)',
    subtitle: 'Comparative structural evaluation of footing dimensions, anchor bolt cluster tension breakout, and tie-beam lateral load distribution.',
    excerpt: 'Detailed analysis of how choosing pinned-base portal frames over fixed-base schemes reduced foundation concrete volume by 42% on low-bearing alluvial soil without exceeding lateral drift limits.',
    category: 'Foundation Design',
    type: 'Article',
    readTime: '7 min read',
    date: 'January 28, 2026',
    author: {
      name: 'Yash Singh',
      role: 'Lead PEB Structural Consultant, YS PEB Design Studio',
    },
    tags: ['Foundation', 'Base Plate', 'SBC 120', 'Anchor Bolts', 'Pedestal Design', 'Soil Bearing'],
    featured: false,
    codeReferences: [
      'IS 456:2000 — Plain and Reinforced Concrete Code of Practice',
      'IS 1904:1986 — Design and Construction of Foundations in Soils',
      'ACI 318 Appendix D / IS 800:2007 (Anchor Bolt Tension Cones)',
    ],
    contentSections: [
      {
        heading: '1. The Foundation Dilemma: Steel Economy vs. Civil Concrete Cost',
        body: [
          'In Pre-Engineered Building design, steel designers and civil foundation contractors frequently clash. A fixed-base portal frame reduces rafter mid-span positive bending moments and column lateral drift, allowing lighter steel sections.',
          'However, a fixed base transfers immense overturning moments (frequently 300 to 600 kN·m per column) into the foundation pedestal. On weak or moderate soils—such as alluvial soils common across the Yamuna and Ganga river basins with Safe Bearing Capacities of 100 to 130 kN/m²—resisting this moment forces footing sizes to balloon from 2.5m x 2.5m to 4.5m x 5.0m with eccentric rebar reinforcement.',
        ],
        diagramType: 'pedestal',
      },
      {
        heading: '2. Pinned Base: Eliminating Overturning Moment',
        body: [
          'By designing the column base as a nominally pinned connection (typically 4 anchor bolts situated inside the column flange boundary near the neutral axis):',
        ],
        bullets: [
          'Base moment is assumed zero (or minimal rotational restraint ~ 10-15%).',
          'Footing experiences only axial compression (P) and horizontal base shear (H).',
          'Footing pressure distribution remains uniform without eccentric edge tension or soil uplift.',
          'Footing concrete volume per column dropped from 11.2 m³ to 5.4 m³—saving over 50% in civil excavation and RCC costs.',
        ],
      },
      {
        heading: '3. Anchor Bolt Embedment Depth & Shear Key Design',
        body: [
          'Even in a pinned base, lateral horizontal shear from wind suction and seismic acceleration can reach 60 to 110 kN per column. Relying solely on bolt bearing across pedestal concrete risks edge spalling.',
          'For high shear reactions, YS PEB designs incorporate a welded structural shear key (such as an ISMC or heavy plate stub projecting 100mm below the base plate into a pre-formed pedestal pocket grouted with non-shrink high-strength grout).',
        ],
        callout: {
          type: 'formula',
          title: 'Anchor Bolt Tension Breakout (IS 456 & ACI 318)',
          text: 'Embedment length must guarantee concrete cone breakout capacity exceeds bolt tensile yield strength: L_embed ≥ 25 to 30 times bolt diameter. For M24 Grade 4.6 or 8.8 bolts, standard embedment is 600mm with an anchor plate washer.',
        },
      },
    ],
    keyTakeaways: [
      'On soils with SBC < 140 kN/m², pinned-base PEBs almost always provide the lowest total project cost (combining steel + civil foundation).',
      'Anchor bolts for pinned bases should be placed close to the column web inside the flange toes to minimize unintended fixity moments.',
      'Always install continuous ground tie beams connecting column pedestals in both directions to absorb lateral base shear and prevent differential settlement.',
      'Provide non-shrink cementitious grout (minimum 30mm to 50mm thickness) beneath base plates to transfer axial loads uniformly to pedestals.',
    ],
  },
  {
    id: 'cold-formed-z-vs-c-purlins-structural-efficiency',
    slug: 'cold-formed-z-vs-c-purlins-structural-efficiency',
    title: 'Cold-Formed Z vs. C Purlins: Continuous Lap System Structural Efficiency & Sag Rod Spacing',
    subtitle: 'Why continuous nested Z-purlins deliver up to 35% higher load capacity compared to simply supported C-sections in industrial roofing.',
    excerpt: 'Examining the bending moment redistribution in 6m to 8m bay spacing, continuous lapping over portal frames, and critical sag-rod intervals to prevent lateral torsional buckling.',
    category: 'PEB Optimization',
    type: 'Article',
    readTime: '6 min read',
    date: 'January 12, 2026',
    author: {
      name: 'Yash Singh',
      role: 'Lead PEB Structural Consultant, YS PEB Design Studio',
    },
    tags: ['Z-Purlin', 'Cold-Formed', 'Sag Rods', 'Lapped Joint', 'Sheeting Loads', 'IS 801'],
    featured: false,
    codeReferences: [
      'IS 801:1975 — Code of Practice for Use of Cold-Formed Light Gauge Steel Structural Members',
      'IS 811:1987 — Specifications for Cold-Formed Light Gauge Structural Steel Sections',
      'AISI S100 — North American Specification for Cold-Formed Steel Structural Members',
    ],
    contentSections: [
      {
        heading: '1. The Secondary Framing Workhorse: Z vs. C Geometries',
        body: [
          'Secondary roof framing (purlins) typically represents 18% to 24% of the total steel tonnage in a Pre-Engineered Building. Selecting the appropriate profile and joint detailing has a profound effect on both steel weight and roof stability.',
          'While C-sections are easier to detail for simple single-span framing, their asymmetrical flange orientation creates twisting under gravity loads. Z-purlins, with one flange slightly narrower than the other, can be nested and lapped over portal rafters to create a continuous structural beam line.',
        ],
        diagramType: 'purlin-detail',
      },
      {
        heading: '2. The Structural Advantage of the Lapped Joint',
        body: [
          'When Z-purlins are lapped over the frame rafter for a distance of 10% to 15% of the bay span on both sides (e.g., 600mm to 900mm lap on a 7.0m bay):',
        ],
        bullets: [
          'The purlin behaves as a continuous multi-span beam rather than a simple support.',
          'Maximum bending moment drops from wL²/8 to wL²/12 at midspan and wL²/10 at support—a 33% reduction in design moment.',
          'Over the support where negative moment peaks, double section thickness exists inside the lap, doubling bending and shear capacity exactly where needed most.',
          'Midspan deflection decreases by up to 50% under standard live and sheeting loads.',
        ],
      },
      {
        heading: '3. Sag Rods & Sleeve Bridging: Arresting Lateral Buckling',
        body: [
          'Cold-formed light gauge sections (typically 1.6mm to 2.5mm thick with 345 MPa yield strength) are prone to distortional and lateral-torsional buckling. The top flange is restrained continuously by self-drilling screw attachment to the metal roof sheeting.',
          'However, the bottom flange is completely unrestrained unless sag rods or bridge braces are provided. Under wind suction uplift, the bottom flange goes into compression. Installing 12mm or 16mm round sag rods at mid-bay or third-bay points locks the purlins into alignment and prevents out-of-plane bow.',
        ],
      },
    ],
    keyTakeaways: [
      'Nested Z-purlin continuous laps reduce secondary steel weight by 15% to 22% compared to simply-supported C-purlins.',
      'Lap length must be minimum 12% to 15% of bay spacing; a shorter lap creates shear stress concentrations at the bolt line.',
      'Never skip sag rods on bays exceeding 6.0m length: minimum one row of sag rods at mid-span is mandatory for structural stability.',
      'Check purlin screw pull-over limits: high wind suction on gable verges requires double screw fastening on exterior purlin lines.',
    ],
  },
];
