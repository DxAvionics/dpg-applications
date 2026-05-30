// ─────────────────────────────────────────────────────────────────────────────
// Davidson Properties Group, LLC — Availability Configuration
//
//   available = true  + on_hold = false → Green  "Now Available"
//   available = true  + on_hold = true  → Gold   "Application in Review" (still taking applications)
//   available = false + on_hold = false → Red    "Currently Occupied"
//
// A PROPERTY shows OPEN on the landing page if ANY of its units is available.
// A PROPERTY shows "Fully Occupied" only when EVERY unit is occupied.
// (The property card is always clickable either way.)
// ─────────────────────────────────────────────────────────────────────────────


// ══ 495 S 3RD EAST — UNIT FLAGS ══════════════════════════════════════════════
//   Used by 495-property.html AND unit-a / unit-b / unit-c application pages.
//   These names must NOT change — the application pages depend on them.

// UNIT A — 2 Bed / 1.5 Bath / Upper Level
var unitA_available = false;
var unitA_on_hold   = false;

// UNIT B — 3 Bed / 1 Bath / Basement
var unitB_available = false;
var unitB_on_hold   = false;

// UNIT C — Lofted Studio / Detached
var unitC_available = true;
var unitC_on_hold   = false;


// ══ PROPERTY REGISTRY — USED BY index.html (LANDING PAGE) ════════════════════
//
//   TO ADD A NEW PROPERTY:
//     1. Create its property page (e.g. "123main-property.html") and unit
//        application pages, following the 495 pattern.
//     2. Add this property's unit flags above (or in its own block).
//     3. Append a new { ... } object to DPG_PROPERTIES below.
//   The landing page renders one card per entry automatically. No other edits.
//
//   Each unit: { label, available, on_hold }

var DPG_PROPERTIES = [
  {
    id:      "495",
    name:    "495 S 3rd East",
    city:    "Mountain Home, ID 83647",
    type:    "Residential Triplex · 3 Units",
    page:    "495-property.html",
    features: [
      "0.275 acre lot · 3,508 sq ft total",
      "Walking distance to downtown Mountain Home",
      "Three independent units — varied floor plans",
      "On-site parking · fenced yard"
    ],
    units: [
      { label: "Unit A", available: unitA_available, on_hold: unitA_on_hold },
      { label: "Unit B", available: unitB_available, on_hold: unitB_on_hold },
      { label: "Unit C", available: unitC_available, on_hold: unitC_on_hold }
    ]
  }
  // ── NEXT PROPERTY (example — uncomment & edit when ready) ──
  // ,{
  //   id: "123main", name: "123 Main St", city: "Boise, ID 83702",
  //   type: "Duplex · 2 Units", page: "123main-property.html",
  //   features: ["...", "..."],
  //   units: [
  //     { label: "Unit 1", available: true,  on_hold: false },
  //     { label: "Unit 2", available: false, on_hold: false }
  //   ]
  // }
];
