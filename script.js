/* ═══════════════════════════════════════════════
   ElementX — script.js
   All 118 elements + Bohr model + Balancer + Quiz + Compare
   ═══════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────
   1. ELEMENT DATA (all 118)
   grid-col and grid-row follow standard layout
   ────────────────────────────────────────────── */
const ELEMENTS = [
  {z:1,  sym:'H',  name:'Hydrogen',      mass:1.008,    cat:'nonmetal',        grp:1,  per:1,  col:1,  row:1},
  {z:2,  sym:'He', name:'Helium',        mass:4.003,    cat:'noble-gas',       grp:18, per:1,  col:18, row:1},
  {z:3,  sym:'Li', name:'Lithium',       mass:6.941,    cat:'alkali-metal',    grp:1,  per:2,  col:1,  row:2},
  {z:4,  sym:'Be', name:'Beryllium',     mass:9.012,    cat:'alkaline-earth',  grp:2,  per:2,  col:2,  row:2},
  {z:5,  sym:'B',  name:'Boron',         mass:10.811,   cat:'metalloid',       grp:13, per:2,  col:13, row:2},
  {z:6,  sym:'C',  name:'Carbon',        mass:12.011,   cat:'nonmetal',        grp:14, per:2,  col:14, row:2},
  {z:7,  sym:'N',  name:'Nitrogen',      mass:14.007,   cat:'nonmetal',        grp:15, per:2,  col:15, row:2},
  {z:8,  sym:'O',  name:'Oxygen',        mass:15.999,   cat:'nonmetal',        grp:16, per:2,  col:16, row:2},
  {z:9,  sym:'F',  name:'Fluorine',      mass:18.998,   cat:'halogen',         grp:17, per:2,  col:17, row:2},
  {z:10, sym:'Ne', name:'Neon',          mass:20.180,   cat:'noble-gas',       grp:18, per:2,  col:18, row:2},
  {z:11, sym:'Na', name:'Sodium',        mass:22.990,   cat:'alkali-metal',    grp:1,  per:3,  col:1,  row:3},
  {z:12, sym:'Mg', name:'Magnesium',     mass:24.305,   cat:'alkaline-earth',  grp:2,  per:3,  col:2,  row:3},
  {z:13, sym:'Al', name:'Aluminium',     mass:26.982,   cat:'post-transition', grp:13, per:3,  col:13, row:3},
  {z:14, sym:'Si', name:'Silicon',       mass:28.086,   cat:'metalloid',       grp:14, per:3,  col:14, row:3},
  {z:15, sym:'P',  name:'Phosphorus',    mass:30.974,   cat:'nonmetal',        grp:15, per:3,  col:15, row:3},
  {z:16, sym:'S',  name:'Sulfur',        mass:32.065,   cat:'nonmetal',        grp:16, per:3,  col:16, row:3},
  {z:17, sym:'Cl', name:'Chlorine',      mass:35.453,   cat:'halogen',         grp:17, per:3,  col:17, row:3},
  {z:18, sym:'Ar', name:'Argon',         mass:39.948,   cat:'noble-gas',       grp:18, per:3,  col:18, row:3},
  {z:19, sym:'K',  name:'Potassium',     mass:39.098,   cat:'alkali-metal',    grp:1,  per:4,  col:1,  row:4},
  {z:20, sym:'Ca', name:'Calcium',       mass:40.078,   cat:'alkaline-earth',  grp:2,  per:4,  col:2,  row:4},
  {z:21, sym:'Sc', name:'Scandium',      mass:44.956,   cat:'transition-metal',grp:3,  per:4,  col:3,  row:4},
  {z:22, sym:'Ti', name:'Titanium',      mass:47.867,   cat:'transition-metal',grp:4,  per:4,  col:4,  row:4},
  {z:23, sym:'V',  name:'Vanadium',      mass:50.942,   cat:'transition-metal',grp:5,  per:4,  col:5,  row:4},
  {z:24, sym:'Cr', name:'Chromium',      mass:51.996,   cat:'transition-metal',grp:6,  per:4,  col:6,  row:4},
  {z:25, sym:'Mn', name:'Manganese',     mass:54.938,   cat:'transition-metal',grp:7,  per:4,  col:7,  row:4},
  {z:26, sym:'Fe', name:'Iron',          mass:55.845,   cat:'transition-metal',grp:8,  per:4,  col:8,  row:4},
  {z:27, sym:'Co', name:'Cobalt',        mass:58.933,   cat:'transition-metal',grp:9,  per:4,  col:9,  row:4},
  {z:28, sym:'Ni', name:'Nickel',        mass:58.693,   cat:'transition-metal',grp:10, per:4,  col:10, row:4},
  {z:29, sym:'Cu', name:'Copper',        mass:63.546,   cat:'transition-metal',grp:11, per:4,  col:11, row:4},
  {z:30, sym:'Zn', name:'Zinc',          mass:65.38,    cat:'transition-metal',grp:12, per:4,  col:12, row:4},
  {z:31, sym:'Ga', name:'Gallium',       mass:69.723,   cat:'post-transition', grp:13, per:4,  col:13, row:4},
  {z:32, sym:'Ge', name:'Germanium',     mass:72.630,   cat:'metalloid',       grp:14, per:4,  col:14, row:4},
  {z:33, sym:'As', name:'Arsenic',       mass:74.922,   cat:'metalloid',       grp:15, per:4,  col:15, row:4},
  {z:34, sym:'Se', name:'Selenium',      mass:78.971,   cat:'nonmetal',        grp:16, per:4,  col:16, row:4},
  {z:35, sym:'Br', name:'Bromine',       mass:79.904,   cat:'halogen',         grp:17, per:4,  col:17, row:4},
  {z:36, sym:'Kr', name:'Krypton',       mass:83.798,   cat:'noble-gas',       grp:18, per:4,  col:18, row:4},
  {z:37, sym:'Rb', name:'Rubidium',      mass:85.468,   cat:'alkali-metal',    grp:1,  per:5,  col:1,  row:5},
  {z:38, sym:'Sr', name:'Strontium',     mass:87.62,    cat:'alkaline-earth',  grp:2,  per:5,  col:2,  row:5},
  {z:39, sym:'Y',  name:'Yttrium',       mass:88.906,   cat:'transition-metal',grp:3,  per:5,  col:3,  row:5},
  {z:40, sym:'Zr', name:'Zirconium',     mass:91.224,   cat:'transition-metal',grp:4,  per:5,  col:4,  row:5},
  {z:41, sym:'Nb', name:'Niobium',       mass:92.906,   cat:'transition-metal',grp:5,  per:5,  col:5,  row:5},
  {z:42, sym:'Mo', name:'Molybdenum',    mass:95.96,    cat:'transition-metal',grp:6,  per:5,  col:6,  row:5},
  {z:43, sym:'Tc', name:'Technetium',    mass:98,       cat:'transition-metal',grp:7,  per:5,  col:7,  row:5},
  {z:44, sym:'Ru', name:'Ruthenium',     mass:101.07,   cat:'transition-metal',grp:8,  per:5,  col:8,  row:5},
  {z:45, sym:'Rh', name:'Rhodium',       mass:102.906,  cat:'transition-metal',grp:9,  per:5,  col:9,  row:5},
  {z:46, sym:'Pd', name:'Palladium',     mass:106.42,   cat:'transition-metal',grp:10, per:5,  col:10, row:5},
  {z:47, sym:'Ag', name:'Silver',        mass:107.868,  cat:'transition-metal',grp:11, per:5,  col:11, row:5},
  {z:48, sym:'Cd', name:'Cadmium',       mass:112.411,  cat:'transition-metal',grp:12, per:5,  col:12, row:5},
  {z:49, sym:'In', name:'Indium',        mass:114.818,  cat:'post-transition', grp:13, per:5,  col:13, row:5},
  {z:50, sym:'Sn', name:'Tin',           mass:118.710,  cat:'post-transition', grp:14, per:5,  col:14, row:5},
  {z:51, sym:'Sb', name:'Antimony',      mass:121.760,  cat:'metalloid',       grp:15, per:5,  col:15, row:5},
  {z:52, sym:'Te', name:'Tellurium',     mass:127.60,   cat:'metalloid',       grp:16, per:5,  col:16, row:5},
  {z:53, sym:'I',  name:'Iodine',        mass:126.904,  cat:'halogen',         grp:17, per:5,  col:17, row:5},
  {z:54, sym:'Xe', name:'Xenon',         mass:131.293,  cat:'noble-gas',       grp:18, per:5,  col:18, row:5},
  {z:55, sym:'Cs', name:'Caesium',       mass:132.905,  cat:'alkali-metal',    grp:1,  per:6,  col:1,  row:6},
  {z:56, sym:'Ba', name:'Barium',        mass:137.327,  cat:'alkaline-earth',  grp:2,  per:6,  col:2,  row:6},
  // La–Lu in row 8 (lanthanides)
  {z:57, sym:'La', name:'Lanthanum',     mass:138.905,  cat:'lanthanide',      grp:null,per:6, col:3,  row:8},
  {z:58, sym:'Ce', name:'Cerium',        mass:140.116,  cat:'lanthanide',      grp:null,per:6, col:4,  row:8},
  {z:59, sym:'Pr', name:'Praseodymium',  mass:140.908,  cat:'lanthanide',      grp:null,per:6, col:5,  row:8},
  {z:60, sym:'Nd', name:'Neodymium',     mass:144.242,  cat:'lanthanide',      grp:null,per:6, col:6,  row:8},
  {z:61, sym:'Pm', name:'Promethium',    mass:145,      cat:'lanthanide',      grp:null,per:6, col:7,  row:8},
  {z:62, sym:'Sm', name:'Samarium',      mass:150.36,   cat:'lanthanide',      grp:null,per:6, col:8,  row:8},
  {z:63, sym:'Eu', name:'Europium',      mass:151.964,  cat:'lanthanide',      grp:null,per:6, col:9,  row:8},
  {z:64, sym:'Gd', name:'Gadolinium',    mass:157.25,   cat:'lanthanide',      grp:null,per:6, col:10, row:8},
  {z:65, sym:'Tb', name:'Terbium',       mass:158.925,  cat:'lanthanide',      grp:null,per:6, col:11, row:8},
  {z:66, sym:'Dy', name:'Dysprosium',    mass:162.500,  cat:'lanthanide',      grp:null,per:6, col:12, row:8},
  {z:67, sym:'Ho', name:'Holmium',       mass:164.930,  cat:'lanthanide',      grp:null,per:6, col:13, row:8},
  {z:68, sym:'Er', name:'Erbium',        mass:167.259,  cat:'lanthanide',      grp:null,per:6, col:14, row:8},
  {z:69, sym:'Tm', name:'Thulium',       mass:168.934,  cat:'lanthanide',      grp:null,per:6, col:15, row:8},
  {z:70, sym:'Yb', name:'Ytterbium',     mass:173.054,  cat:'lanthanide',      grp:null,per:6, col:16, row:8},
  {z:71, sym:'Lu', name:'Lutetium',      mass:174.967,  cat:'lanthanide',      grp:null,per:6, col:17, row:8},
  {z:72, sym:'Hf', name:'Hafnium',       mass:178.49,   cat:'transition-metal',grp:4,  per:6,  col:4,  row:6},
  {z:73, sym:'Ta', name:'Tantalum',      mass:180.948,  cat:'transition-metal',grp:5,  per:6,  col:5,  row:6},
  {z:74, sym:'W',  name:'Tungsten',      mass:183.84,   cat:'transition-metal',grp:6,  per:6,  col:6,  row:6},
  {z:75, sym:'Re', name:'Rhenium',       mass:186.207,  cat:'transition-metal',grp:7,  per:6,  col:7,  row:6},
  {z:76, sym:'Os', name:'Osmium',        mass:190.23,   cat:'transition-metal',grp:8,  per:6,  col:8,  row:6},
  {z:77, sym:'Ir', name:'Iridium',       mass:192.217,  cat:'transition-metal',grp:9,  per:6,  col:9,  row:6},
  {z:78, sym:'Pt', name:'Platinum',      mass:195.084,  cat:'transition-metal',grp:10, per:6,  col:10, row:6},
  {z:79, sym:'Au', name:'Gold',          mass:196.967,  cat:'transition-metal',grp:11, per:6,  col:11, row:6},
  {z:80, sym:'Hg', name:'Mercury',       mass:200.592,  cat:'transition-metal',grp:12, per:6,  col:12, row:6},
  {z:81, sym:'Tl', name:'Thallium',      mass:204.383,  cat:'post-transition', grp:13, per:6,  col:13, row:6},
  {z:82, sym:'Pb', name:'Lead',          mass:207.2,    cat:'post-transition', grp:14, per:6,  col:14, row:6},
  {z:83, sym:'Bi', name:'Bismuth',       mass:208.980,  cat:'post-transition', grp:15, per:6,  col:15, row:6},
  {z:84, sym:'Po', name:'Polonium',      mass:209,      cat:'post-transition', grp:16, per:6,  col:16, row:6},
  {z:85, sym:'At', name:'Astatine',      mass:210,      cat:'halogen',         grp:17, per:6,  col:17, row:6},
  {z:86, sym:'Rn', name:'Radon',         mass:222,      cat:'noble-gas',       grp:18, per:6,  col:18, row:6},
  {z:87, sym:'Fr', name:'Francium',      mass:223,      cat:'alkali-metal',    grp:1,  per:7,  col:1,  row:7},
  {z:88, sym:'Ra', name:'Radium',        mass:226,      cat:'alkaline-earth',  grp:2,  per:7,  col:2,  row:7},
  // Ac–Lr in row 9 (actinides)
  {z:89, sym:'Ac', name:'Actinium',      mass:227,      cat:'actinide',        grp:null,per:7, col:3,  row:9},
  {z:90, sym:'Th', name:'Thorium',       mass:232.038,  cat:'actinide',        grp:null,per:7, col:4,  row:9},
  {z:91, sym:'Pa', name:'Protactinium',  mass:231.036,  cat:'actinide',        grp:null,per:7, col:5,  row:9},
  {z:92, sym:'U',  name:'Uranium',       mass:238.029,  cat:'actinide',        grp:null,per:7, col:6,  row:9},
  {z:93, sym:'Np', name:'Neptunium',     mass:237,      cat:'actinide',        grp:null,per:7, col:7,  row:9},
  {z:94, sym:'Pu', name:'Plutonium',     mass:244,      cat:'actinide',        grp:null,per:7, col:8,  row:9},
  {z:95, sym:'Am', name:'Americium',     mass:243,      cat:'actinide',        grp:null,per:7, col:9,  row:9},
  {z:96, sym:'Cm', name:'Curium',        mass:247,      cat:'actinide',        grp:null,per:7, col:10, row:9},
  {z:97, sym:'Bk', name:'Berkelium',     mass:247,      cat:'actinide',        grp:null,per:7, col:11, row:9},
  {z:98, sym:'Cf', name:'Californium',   mass:251,      cat:'actinide',        grp:null,per:7, col:12, row:9},
  {z:99, sym:'Es', name:'Einsteinium',   mass:252,      cat:'actinide',        grp:null,per:7, col:13, row:9},
  {z:100,sym:'Fm', name:'Fermium',       mass:257,      cat:'actinide',        grp:null,per:7, col:14, row:9},
  {z:101,sym:'Md', name:'Mendelevium',   mass:258,      cat:'actinide',        grp:null,per:7, col:15, row:9},
  {z:102,sym:'No', name:'Nobelium',      mass:259,      cat:'actinide',        grp:null,per:7, col:16, row:9},
  {z:103,sym:'Lr', name:'Lawrencium',    mass:266,      cat:'actinide',        grp:null,per:7, col:17, row:9},
  {z:104,sym:'Rf', name:'Rutherfordium', mass:267,      cat:'transition-metal',grp:4,  per:7,  col:4,  row:7},
  {z:105,sym:'Db', name:'Dubnium',       mass:270,      cat:'transition-metal',grp:5,  per:7,  col:5,  row:7},
  {z:106,sym:'Sg', name:'Seaborgium',    mass:271,      cat:'transition-metal',grp:6,  per:7,  col:6,  row:7},
  {z:107,sym:'Bh', name:'Bohrium',       mass:270,      cat:'transition-metal',grp:7,  per:7,  col:7,  row:7},
  {z:108,sym:'Hs', name:'Hassium',       mass:277,      cat:'transition-metal',grp:8,  per:7,  col:8,  row:7},
  {z:109,sym:'Mt', name:'Meitnerium',    mass:278,      cat:'transition-metal',grp:9,  per:7,  col:9,  row:7},
  {z:110,sym:'Ds', name:'Darmstadtium',  mass:281,      cat:'transition-metal',grp:10, per:7,  col:10, row:7},
  {z:111,sym:'Rg', name:'Roentgenium',   mass:282,      cat:'transition-metal',grp:11, per:7,  col:11, row:7},
  {z:112,sym:'Cn', name:'Copernicium',   mass:285,      cat:'transition-metal',grp:12, per:7,  col:12, row:7},
  {z:113,sym:'Nh', name:'Nihonium',      mass:286,      cat:'post-transition', grp:13, per:7,  col:13, row:7},
  {z:114,sym:'Fl', name:'Flerovium',     mass:289,      cat:'post-transition', grp:14, per:7,  col:14, row:7},
  {z:115,sym:'Mc', name:'Moscovium',     mass:290,      cat:'post-transition', grp:15, per:7,  col:15, row:7},
  {z:116,sym:'Lv', name:'Livermorium',   mass:293,      cat:'post-transition', grp:16, per:7,  col:16, row:7},
  {z:117,sym:'Ts', name:'Tennessine',    mass:294,      cat:'halogen',         grp:17, per:7,  col:17, row:7},
  {z:118,sym:'Og', name:'Oganesson',     mass:294,      cat:'noble-gas',       grp:18, per:7,  col:18, row:7},
];

/* ──────────────────────────────────────────────
   2. GROUP INFO
   ────────────────────────────────────────────── */
const GROUP_INFO = {
  1:  { name:'Group 1 — Alkali Metals (+ H)', props:'Highly reactive metals. Soft, low density, one valence electron. React vigorously with water to release hydrogen gas.', trend:'Reactivity increases down the group (Cs > Rb > K > Na > Li). Melting/boiling points decrease down the group.' },
  2:  { name:'Group 2 — Alkaline Earth Metals', props:'Reactive metals with two valence electrons. Harder and denser than group 1. Form 2+ ions readily.', trend:'Reactivity increases down the group. Solubility of hydroxides increases, sulfates decrease.' },
  3:  { name:'Group 3 — Transition Metals', props:'Scandium and Yttrium; the group includes lanthanides and actinides. Multiple oxidation states, colored compounds.', trend:'Properties vary; d-electron interactions become important.' },
  4:  { name:'Group 4 — Titanium Group', props:'High-melting, hard, refractory metals. Excellent corrosion resistance. Titanium widely used in aerospace.', trend:'Density and reactivity increase down the group.' },
  5:  { name:'Group 5 — Vanadium Group', props:'High melting points, multiple oxidation states (+2 to +5). Used in alloys and catalysts.', trend:'Greater tendency to form lower oxidation states down the group.' },
  6:  { name:'Group 6 — Chromium Group', props:'Hard, high-melting metals. Chromium notable for lustrous corrosion resistance; Tungsten has the highest melting point of all elements.', trend:'Melting points increase down: Cr<Mo<W.' },
  7:  { name:'Group 7 — Manganese Group', props:'Multiple oxidation states (Mn: −3 to +7). Manganese critical in steel production. Rhenium has an extremely high melting point.', trend:'Stability of highest oxidation state decreases down the group.' },
  8:  { name:'Group 8 — Iron Group', props:'Iron is the most abundant metal in Earth\'s core. Ruthenium and Osmium are among the densest elements.', trend:'Noble metal character increases: Fe < Ru < Os.' },
  9:  { name:'Group 9 — Cobalt Group', props:'Cobalt is ferromagnetic; Rhodium and Iridium are important catalysts in automotive catalytic converters.', trend:'Platinum-group metals (Rh, Ir) are highly unreactive.' },
  10: { name:'Group 10 — Nickel Group', props:'Nickel widely used in alloys (stainless steel, coins). Palladium and Platinum are exceptional catalysts.', trend:'Catalytic activity and resistance to oxidation increase down the group.' },
  11: { name:'Group 11 — Coinage Metals', props:'Copper, Silver, Gold. Excellent electrical/thermal conductors. High ductility and malleability. Known since antiquity.', trend:'All have a single s-electron above a filled d-shell. Gold is the most electronegative metal.' },
  12: { name:'Group 12 — Zinc Group', props:'Zinc, Cadmium, Mercury. Volatile compared to transition metals. Mercury is the only metal liquid at room temperature.', trend:'Volatility and toxicity increase down the group.' },
  13: { name:'Group 13 — Boron Group', props:'Boron is a metalloid; Al, Ga, In, Tl are metals. Aluminium is the most abundant metal in Earth\'s crust.', trend:'Metallic character increases down the group. The +1 oxidation state becomes more stable (inert-pair effect).' },
  14: { name:'Group 14 — Carbon Group', props:'Carbon is the basis of all life. Silicon is the second-most-abundant element in Earth\'s crust. Tin and Lead are classic metals.', trend:'Nonmetal → metalloid → metal. The +2 oxidation state stabilizes at Pb (inert-pair effect).' },
  15: { name:'Group 15 — Nitrogen Group (Pnictogens)', props:'Nitrogen makes up 78% of the atmosphere. Phosphorus is essential to DNA. Arsenic, Antimony, and Bismuth are metalloids/metals.', trend:'Nonmetal character decreases, metallic character increases down the group.' },
  16: { name:'Group 16 — Oxygen Group (Chalcogens)', props:'Oxygen and Sulfur are essential nonmetals. Selenium and Tellurium are metalloids. Polonium is radioactive.', trend:'Reactivity and electronegativity decrease; metallic character increases down the group.' },
  17: { name:'Group 17 — Halogens', props:'Most reactive nonmetals. All form salts with metals (halides). Fluorine is the most electronegative element of all.', trend:'Reactivity, electronegativity, and oxidizing power decrease down the group (F > Cl > Br > I > At).' },
  18: { name:'Group 18 — Noble Gases', props:'Chemically inert under normal conditions. Full outer electron shells. Used in lighting (neon, argon), cryogenics (helium), and nuclear industry (xenon).', trend:'Boiling points increase with atomic number. Heavier noble gases can form compounds with fluorine and oxygen.' },
};

/* ──────────────────────────────────────────────
   3. ELECTRON SHELLS (Bohr model distribution)
   ────────────────────────────────────────────── */
function getShells(z) {
  // Simplified KLMNO distribution (max 2,8,18,32,18,8,2)
  const maxShell = [2, 8, 18, 32, 18, 8, 2];
  let remaining = z;
  const shells = [];
  for (let i = 0; i < maxShell.length && remaining > 0; i++) {
    const n = Math.min(remaining, maxShell[i]);
    shells.push(n);
    remaining -= n;
  }
  return shells; // e.g. [2,8,8,1] for Na (z=11)
}

/* ──────────────────────────────────────────────
   4. BUILD PERIODIC TABLE GRID
   ────────────────────────────────────────────── */
const periodicTable = document.getElementById('periodicTable');

// Spacer label cells for La/Ac rows
function addLaAcLabels() {
  // Row 6 col 3 spacer
  const laDiv = document.createElement('div');
  laDiv.style.cssText = `grid-column:3;grid-row:8;display:flex;align-items:center;justify-content:center;font-size:0.48rem;color:var(--lanthanide);border:1px dashed var(--lanthanide);border-radius:6px;opacity:0.6;`;
  laDiv.textContent = '57–71';
  periodicTable.appendChild(laDiv);

  const acDiv = document.createElement('div');
  acDiv.style.cssText = `grid-column:3;grid-row:9;display:flex;align-items:center;justify-content:center;font-size:0.48rem;color:var(--actinide);border:1px dashed var(--actinide);border-radius:6px;opacity:0.6;`;
  acDiv.textContent = '89–103';
  periodicTable.appendChild(acDiv);
}

function buildTable() {
  periodicTable.innerHTML = '';

  // Actual rows used: 1–7 main, 8 lanthanides, 9 actinides → 9 rows
  // Grid: 18 cols × 10 rows (row 10 unused / spacer)
  periodicTable.style.gridTemplateRows = `repeat(9, var(--cell-h))`;

  ELEMENTS.forEach(el => {
    const div = document.createElement('div');
    div.className = `element-cell ${el.cat}`;
    div.style.cssText = `grid-column:${el.col};grid-row:${el.row};`;
    div.dataset.z = el.z;
    div.innerHTML = `
      <span class="cell-number">${el.z}</span>
      <span class="cell-symbol">${el.sym}</span>
      <span class="cell-name">${el.name}</span>
      <span class="cell-mass">${parseFloat(el.mass.toFixed(3))}</span>
    `;
    div.addEventListener('click', () => openModal(el));
    periodicTable.appendChild(div);
  });

  // Spacer labels for La/Ac rows main grid positions
  const la = document.createElement('div');
  la.style.cssText = `grid-column:3;grid-row:6;display:flex;align-items:center;justify-content:center;font-size:0.48rem;color:var(--lanthanide);border:1px dashed var(--lanthanide);border-radius:6px;opacity:0.6;cursor:default;`;
  la.textContent = '57–71 ↓';
  periodicTable.appendChild(la);

  const ac = document.createElement('div');
  ac.style.cssText = `grid-column:3;grid-row:7;display:flex;align-items:center;justify-content:center;font-size:0.48rem;color:var(--actinide);border:1px dashed var(--actinide);border-radius:6px;opacity:0.6;cursor:default;`;
  ac.textContent = '89–103 ↓';
  periodicTable.appendChild(ac);
}

/* ──────────────────────────────────────────────
   5. BOHR MODEL (Canvas)
   ────────────────────────────────────────────── */
let bohrAnim = null;

function drawBohr(canvas, el) {
  const ctx = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  const cx = W / 2, cy = H / 2;
  const shells = getShells(el.z);
  const isDark = document.documentElement.dataset.theme !== 'light';
  const bg = isDark ? '#0a0c10' : '#f0f2f8';
  const accent = isDark ? '#00e5ff' : '#0066cc';
  const shellColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)';
  const nucleusColor = isDark ? '#7c3aed' : '#6d28d9';

  // animation state
  let angles = shells.map(() => 0);
  let lastTime = null;

  if (bohrAnim) cancelAnimationFrame(bohrAnim);

  const shellRadii = shells.map((_, i) => 28 + i * Math.min(26, (Math.min(W, H) / 2 - 30) / shells.length));

  function draw(ts) {
    if (!lastTime) lastTime = ts;
    const dt = (ts - lastTime) / 1000;
    lastTime = ts;

    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Shells
    shells.forEach((count, i) => {
      const r = shellRadii[i];
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.strokeStyle = shellColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Electrons
      angles[i] += (2 * Math.PI / (1 + i * 0.6)) * dt * 0.8;
      for (let e = 0; e < count; e++) {
        const ang = angles[i] + (2 * Math.PI * e) / count;
        const ex = cx + r * Math.cos(ang);
        const ey = cy + r * Math.sin(ang);

        // Glow
        const grad = ctx.createRadialGradient(ex, ey, 0, ex, ey, 5);
        grad.addColorStop(0, accent);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(ex, ey, 5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ex, ey, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();
      }
    });

    // Nucleus
    const nGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 14);
    nGrad.addColorStop(0, '#fff');
    nGrad.addColorStop(0.3, nucleusColor);
    nGrad.addColorStop(1, 'transparent');
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = nGrad;
    ctx.fill();

    ctx.fillStyle = '#fff';
    ctx.font = `bold ${shells.length <= 2 ? 9 : 8}px Space Mono, monospace`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(el.z, cx, cy);

    bohrAnim = requestAnimationFrame(draw);
  }

  bohrAnim = requestAnimationFrame(draw);
}

/* ──────────────────────────────────────────────
   6. MODAL
   ────────────────────────────────────────────── */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalInner   = document.getElementById('modalInner');

const SHELL_NAMES = ['K Shell (n=1)', 'L Shell (n=2)', 'M Shell (n=3)', 'N Shell (n=4)', 'O Shell (n=5)', 'P Shell (n=6)', 'Q Shell (n=7)'];

function openModal(el) {
  const shells = getShells(el.z);
  const neutrons = Math.round(el.mass - el.z);
  const catLabel = el.cat.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  const shellRows = shells.map((n, i) => `
    <div class="shell-row">
      <span class="shell-name">${SHELL_NAMES[i] || `Shell ${i+1}`}</span>
      <span class="shell-count">${n}e⁻</span>
      <div class="shell-dots">${'<div class="shell-dot"></div>'.repeat(n)}</div>
    </div>
  `).join('');

  const shellConfig = shells.join(', ');

  modalInner.innerHTML = `
    <div class="modal-header" style="color:var(--${el.cat})">
      <div class="modal-symbol-box" style="color:var(--${el.cat})">
        <span class="ms-number">${el.z}</span>
        <span class="ms-symbol">${el.sym}</span>
        <span class="ms-mass">${parseFloat(el.mass.toFixed(3))}</span>
      </div>
      <div class="modal-title-block">
        <h2>${el.name}</h2>
        <div class="modal-category-badge" style="background:var(--${el.cat});color:#000;">${catLabel}</div>
        <p style="margin-top:8px;font-size:0.75rem;color:var(--text-muted)">
          Group: ${el.grp || '—'} &nbsp;|&nbsp; Period: ${el.per} &nbsp;|&nbsp; Electron Config: [${shellConfig}]
        </p>
      </div>
    </div>
    <div class="modal-grid">
      <div class="info-card">
        <h4>Atomic Properties</h4>
        <div class="info-row"><span class="label">Atomic Number</span><span class="value">${el.z}</span></div>
        <div class="info-row"><span class="label">Atomic Mass</span><span class="value">${el.mass} u</span></div>
        <div class="info-row"><span class="label">Symbol</span><span class="value">${el.sym}</span></div>
        <div class="info-row"><span class="label">Period</span><span class="value">${el.per}</span></div>
        <div class="info-row"><span class="label">Group</span><span class="value">${el.grp || 'f-block'}</span></div>
      </div>
      <div class="info-card">
        <h4>Particle Composition</h4>
        <div class="info-row"><span class="label">Protons</span><span class="value">${el.z} p⁺</span></div>
        <div class="info-row"><span class="label">Neutrons (≈)</span><span class="value">${neutrons} n⁰</span></div>
        <div class="info-row"><span class="label">Electrons</span><span class="value">${el.z} e⁻</span></div>
        <div class="info-row"><span class="label">Electron Shells</span><span class="value">${shells.length}</span></div>
        <div class="info-row"><span class="label">Valence Electrons</span><span class="value">${shells[shells.length-1]} e⁻</span></div>
      </div>
      <div class="bohr-card">
        <h4>⚛ Bohr Model — Electron Shell Distribution</h4>
        <div class="bohr-wrap">
          <canvas id="bohrCanvas" width="220" height="220"></canvas>
          <div class="shell-table">${shellRows}</div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add('open');

  // Start Bohr animation after DOM inserts
  requestAnimationFrame(() => {
    const canvas = document.getElementById('bohrCanvas');
    if (canvas) drawBohr(canvas, el);
  });
}

function closeModal() {
  modalOverlay.classList.remove('open');
  if (bohrAnim) { cancelAnimationFrame(bohrAnim); bohrAnim = null; }
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ──────────────────────────────────────────────
   7. SEARCH & FILTER
   ────────────────────────────────────────────── */
const searchInput    = document.getElementById('searchInput');
const clearSearch    = document.getElementById('clearSearch');
const categoryFilter = document.getElementById('categoryFilter');

function applyFilter() {
  const q   = searchInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const cells = document.querySelectorAll('.element-cell');

  clearSearch.classList.toggle('visible', q.length > 0);

  let anyMatch = false;
  cells.forEach(cell => {
    const z = parseInt(cell.dataset.z);
    const el = ELEMENTS.find(e => e.z === z);
    if (!el) return;

    const matchQ = !q
      || el.name.toLowerCase().includes(q)
      || el.sym.toLowerCase().includes(q)
      || String(el.z).includes(q);
    const matchCat = cat === 'all' || el.cat === cat;
    const match = matchQ && matchCat;

    cell.classList.toggle('dimmed', !match);
    cell.classList.toggle('highlighted', match && (q || cat !== 'all'));
    if (match) anyMatch = true;
  });

  // If no filter active, clear dimmed/highlighted
  if (!q && cat === 'all') {
    cells.forEach(c => { c.classList.remove('dimmed', 'highlighted'); });
  }
}

searchInput.addEventListener('input', applyFilter);
categoryFilter.addEventListener('change', applyFilter);
clearSearch.addEventListener('click', () => { searchInput.value = ''; applyFilter(); });

/* ──────────────────────────────────────────────
   8. GROUP VIEW
   ────────────────────────────────────────────── */
function buildGroupView() {
  const tabsEl   = document.getElementById('groupTabs');
  const contentEl = document.getElementById('groupContent');

  tabsEl.innerHTML = '';
  for (let g = 1; g <= 18; g++) {
    const btn = document.createElement('button');
    btn.className = 'group-btn' + (g === 1 ? ' active' : '');
    btn.textContent = `G${g}`;
    btn.dataset.grp = g;
    btn.addEventListener('click', () => {
      tabsEl.querySelectorAll('.group-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGroup(g);
    });
    tabsEl.appendChild(btn);
  }
  renderGroup(1);

  function renderGroup(g) {
    const info = GROUP_INFO[g] || { name: `Group ${g}`, props: '—', trend: '—' };
    const members = ELEMENTS.filter(el => el.grp === g);

    contentEl.innerHTML = `
      <div class="group-info-card">
        <h3>${info.name}</h3>
        <p>${info.props}</p>
        <p style="margin-top:10px"><strong style="color:var(--accent)">Trend:</strong> ${info.trend}</p>
      </div>
      <div class="group-info-card">
        <h3>Elements in this Group</h3>
        <div class="group-elements-grid" id="groupEls"></div>
      </div>
    `;
    const grid = document.getElementById('groupEls');
    members.forEach(el => {
      const chip = document.createElement('div');
      chip.className = 'group-element-chip';
      chip.style.color = `var(--${el.cat})`;
      chip.innerHTML = `<span class="chip-symbol">${el.sym}</span><span class="chip-name">${el.name}</span>`;
      chip.addEventListener('click', () => openModal(el));
      grid.appendChild(chip);
    });
  }
}

/* ──────────────────────────────────────────────
   9. CHEMICAL EQUATION BALANCER
   ────────────────────────────────────────────── */
/* Approach: algebraic/matrix method using fractional math */

function parseFormula(formula) {
  // Returns an object of {element: count}
  const regex = /([A-Z][a-z]?)(\d*)/g;
  const counts = {};
  let m;
  while ((m = regex.exec(formula)) !== null) {
    if (!m[1]) continue;
    const el = m[1];
    const n  = parseInt(m[2]) || 1;
    counts[el] = (counts[el] || 0) + n;
  }
  return counts;
}

function parseSide(str) {
  // "2H2O + Fe2O3" → [{coef:2, compound:'H2O'}, {coef:1, compound:'Fe2O3'}]
  return str.split('+').map(s => {
    s = s.trim();
    const m = s.match(/^(\d*)\s*(.+)$/);
    const coef = parseInt(m[1]) || 1;
    const compound = m[2].trim();
    return { coef, compound };
  });
}

function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }

function balanceEquation(equationStr) {
  // Normalize arrow
  let eq = equationStr.replace(/→|->|=>|=>/g, '→').replace(/→/g, '→');
  const parts = eq.split('→');
  if (parts.length !== 2) return { ok: false, msg: 'Use "→" or "->" to separate reactants and products.' };

  const reactants = parseSide(parts[0]);
  const products  = parseSide(parts[1]);
  const allCompounds = [...reactants, ...products];

  // Collect all elements
  const elements = [...new Set(
    allCompounds.flatMap(({ compound }) => Object.keys(parseFormula(compound)))
  )];

  /* Build matrix: each row = element, each col = compound.
     Reactant columns positive, product columns negative. */
  const n = allCompounds.length;
  const m = elements.length;

  // We need to solve Ax=0 where x are coefficients.
  // Use small brute force for up to 6 compounds (works for typical school equations).

  function tryBalance(maxCoef = 10) {
    // For each combination of coefficients
    for (let trial = 1; trial <= Math.pow(maxCoef, n - 1); trial++) {
      // Decode trial into coefficients (1 to maxCoef each)
      let t = trial;
      const coefs = [];
      for (let i = 0; i < n - 1; i++) {
        coefs.push((t % maxCoef) + 1);
        t = Math.floor(t / maxCoef);
      }
      coefs.push(1); // last free

      // Scale last coefficient
      // Check balance
      let balanced = true;
      for (const el of elements) {
        let sum = 0;
        reactants.forEach((r, i) => {
          const f = parseFormula(r.compound);
          sum += coefs[i] * (f[el] || 0);
        });
        products.forEach((p, i) => {
          const f = parseFormula(p.compound);
          sum -= coefs[reactants.length + i] * (f[el] || 0);
        });
        if (sum !== 0) { balanced = false; break; }
      }
      if (balanced) return coefs;
    }
    return null;
  }

  // Try up to maxCoef=12 for robustness
  let coefs = tryBalance(12);

  if (!coefs) {
    // Try harder with a different free variable
    coefs = tryBalance(20);
  }

  if (!coefs) {
    return { ok: false, msg: 'Could not balance this equation automatically. Try a simpler form or check your input.' };
  }

  // Build balanced equation string
  function fmtSide(compounds, startIdx) {
    return compounds.map((c, i) => {
      const cf = coefs[startIdx + i];
      return (cf === 1 ? '' : cf) + c.compound;
    }).join(' + ');
  }

  const lhs = fmtSide(reactants, 0);
  const rhs = fmtSide(products, reactants.length);
  const balanced = `${lhs} → ${rhs}`;

  // Build step explanation
  const steps = elements.map(el => {
    const left  = reactants.reduce((s, r, i) => s + coefs[i] * (parseFormula(r.compound)[el] || 0), 0);
    const right = products.reduce((s, p, i) => s + coefs[reactants.length + i] * (parseFormula(p.compound)[el] || 0), 0);
    return `<code>${el}</code>: ${left} atoms on each side ✓`;
  }).join('<br>');

  return { ok: true, balanced, steps };
}

document.getElementById('balanceBtn').addEventListener('click', () => {
  const input = document.getElementById('equationInput').value.trim();
  if (!input) return;
  const result = balanceEquation(input);
  const resDiv = document.getElementById('balancerResult');

  if (result.ok) {
    resDiv.innerHTML = `
      <div class="balance-output success">
        <div class="balance-eq-display">${result.balanced}</div>
        <div class="balance-steps"><strong>Verification:</strong><br>${result.steps}</div>
      </div>
    `;
  } else {
    resDiv.innerHTML = `<div class="balance-output error"><p style="color:#ef4444">⚠ ${result.msg}</p></div>`;
  }
});

document.querySelectorAll('.example-eq').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('equationInput').value = btn.dataset.eq;
    document.getElementById('balanceBtn').click();
  });
});

document.getElementById('equationInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('balanceBtn').click();
});

/* ──────────────────────────────────────────────
   10. QUIZ
   ────────────────────────────────────────────── */
let quizScore = 0, quizTotal = 0, quizIdx = 0, quizAnswered = false;

const QUIZ_TYPES = [
  el => ({ q: `What is the chemical symbol for ${el.name}?`,       a: el.sym,              opts: () => shuffleWith(el.sym, ELEMENTS.map(e => e.sym)) }),
  el => ({ q: `What is the atomic number of ${el.name}?`,          a: String(el.z),         opts: () => shuffleWith(String(el.z), ELEMENTS.map(e => String(e.z))) }),
  el => ({ q: `Which element has the symbol "${el.sym}"?`,         a: el.name,              opts: () => shuffleWith(el.name, ELEMENTS.map(e => e.name)) }),
  el => ({ q: `${el.name} belongs to which category?`,             a: el.cat.replace(/-/g,' '), opts: () => shuffleWith(el.cat.replace(/-/g,' '), [...new Set(ELEMENTS.map(e => e.cat.replace(/-/g,' ')))]) }),
  el => ({ q: `What is the approximate atomic mass of ${el.name}?`, a: String(Math.round(el.mass)), opts: () => shuffleWith(String(Math.round(el.mass)), ELEMENTS.map(e => String(Math.round(e.mass)))) }),
];

function shuffleWith(correct, pool) {
  const others = [...new Set(pool.filter(v => v !== correct))];
  // pick 3 random
  const picks = [];
  while (picks.length < 3 && others.length > 0) {
    const idx = Math.floor(Math.random() * others.length);
    picks.push(others.splice(idx, 1)[0]);
  }
  const all = [correct, ...picks];
  // shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

function generateQuestion() {
  const el = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
  const type = QUIZ_TYPES[Math.floor(Math.random() * QUIZ_TYPES.length)];
  const q = type(el);
  return { ...q, opts: q.opts() };
}

function renderQuiz() {
  const content = document.getElementById('quizContent');
  const qData = generateQuestion();
  quizAnswered = false;

  content.innerHTML = `
    <div class="quiz-question">${qData.q}</div>
    <div class="quiz-options">
      ${qData.opts.map(opt => `<button class="quiz-option" data-ans="${opt}">${opt}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="quizFeedback" style="display:none"></div>
    <div class="quiz-footer">
      <span class="quiz-score">Score: ${quizScore}/${quizTotal} (${quizTotal > 0 ? Math.round(100*quizScore/quizTotal) : 0}%)</span>
      <button class="btn-next" id="nextQ" style="display:none">Next Question →</button>
    </div>
  `;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => {
      if (quizAnswered) return;
      quizAnswered = true;
      quizTotal++;
      const correct = btn.dataset.ans === qData.a;
      if (correct) quizScore++;

      document.querySelectorAll('.quiz-option').forEach(b => {
        b.disabled = true;
        if (b.dataset.ans === qData.a) b.classList.add('correct');
        else if (b === btn && !correct) b.classList.add('wrong');
      });

      const fb = document.getElementById('quizFeedback');
      fb.style.display = 'block';
      fb.className = `quiz-feedback ${correct ? 'correct' : 'wrong'}`;
      fb.textContent = correct ? '✓ Correct!' : `✗ The correct answer was: ${qData.a}`;

      document.getElementById('nextQ').style.display = 'inline-block';
      document.querySelector('.quiz-score').textContent = `Score: ${quizScore}/${quizTotal} (${Math.round(100*quizScore/quizTotal)}%)`;
    });
  });

  document.getElementById('nextQ')?.addEventListener('click', renderQuiz);
}

/* ──────────────────────────────────────────────
   11. COMPARE
   ────────────────────────────────────────────── */
function buildCompareSelects() {
  const selA = document.getElementById('compareA');
  const selB = document.getElementById('compareB');
  ELEMENTS.forEach(el => {
    [selA, selB].forEach(sel => {
      const opt = document.createElement('option');
      opt.value = el.z;
      opt.textContent = `${el.z}. ${el.name} (${el.sym})`;
      sel.appendChild(opt);
    });
  });

  [selA, selB].forEach(sel => sel.addEventListener('change', renderCompare));
}

function renderCompare() {
  const zA = parseInt(document.getElementById('compareA').value);
  const zB = parseInt(document.getElementById('compareB').value);
  const res = document.getElementById('compareResult');

  if (!zA || !zB) { res.innerHTML = ''; return; }
  const a = ELEMENTS.find(e => e.z === zA);
  const b = ELEMENTS.find(e => e.z === zB);

  const rows = [
    ['Atomic Number',   a.z,                              b.z],
    ['Symbol',          a.sym,                            b.sym],
    ['Atomic Mass (u)', a.mass,                           b.mass],
    ['Category',        a.cat.replace(/-/g,' '),          b.cat.replace(/-/g,' ')],
    ['Period',          a.per,                            b.per],
    ['Group',           a.grp || 'f-block',               b.grp || 'f-block'],
    ['Protons',         a.z,                              b.z],
    ['Neutrons (≈)',    Math.round(a.mass - a.z),         Math.round(b.mass - b.z)],
    ['Electrons',       a.z,                              b.z],
    ['Valence Electrons', getShells(a.z).slice(-1)[0],    getShells(b.z).slice(-1)[0]],
    ['Electron Shells', getShells(a.z).join(', '),        getShells(b.z).join(', ')],
  ];

  res.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Property</th>
            <th class="el-col" style="color:var(--accent)">${a.name} (${a.sym})</th>
            <th class="el-col" style="color:var(--accent2)">${b.name} (${b.sym})</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(([label, va, vb]) => {
            const numA = parseFloat(va), numB = parseFloat(vb);
            const isNum = !isNaN(numA) && !isNaN(numB) && typeof va !== 'string';
            return `
              <tr>
                <td class="row-label">${label}</td>
                <td class="val-a ${isNum && numA > numB ? 'better-a' : ''}">${va}</td>
                <td class="val-b ${isNum && numB > numA ? 'better-b' : ''}">${vb}</td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

/* ──────────────────────────────────────────────
   12. VIEW NAVIGATION
   ────────────────────────────────────────────── */
const navTabs = document.querySelectorAll('.nav-tab');
navTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    navTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const viewId = `view-${tab.dataset.view}`;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');

    if (tab.dataset.view === 'quiz') renderQuiz();
  });
});

/* ──────────────────────────────────────────────
   13. THEME TOGGLE
   ────────────────────────────────────────────── */
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.dataset.theme === 'dark';
  html.dataset.theme = isDark ? 'light' : 'dark';
  // Redraw bohr if open
  const canvas = document.getElementById('bohrCanvas');
  if (canvas) {
    const z = parseInt(document.querySelector('.modal-inner')?.querySelector('.ms-number')?.textContent);
    if (z) {
      const el = ELEMENTS.find(e => e.z === z);
      if (el) drawBohr(canvas, el);
    }
  }
  showToast(isDark ? '☀ Light mode' : '◐ Dark mode');
});

/* ──────────────────────────────────────────────
   14. DOWNLOAD JSON
   ────────────────────────────────────────────── */
document.getElementById('downloadBtn').addEventListener('click', () => {
  const data = ELEMENTS.map(el => ({
    atomicNumber: el.z,
    symbol: el.sym,
    name: el.name,
    atomicMass: el.mass,
    category: el.cat,
    group: el.grp,
    period: el.per,
    protons: el.z,
    electronsApprox: el.z,
    neutronsApprox: Math.round(el.mass - el.z),
    electronShells: getShells(el.z),
  }));
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url; a.download = 'elements.json'; a.click();
  URL.revokeObjectURL(url);
  showToast('✓ elements.json downloaded!');
});

/* ──────────────────────────────────────────────
   15. TOAST
   ────────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

/* ──────────────────────────────────────────────
   16. INIT
   ────────────────────────────────────────────── */
buildTable();
buildGroupView();
buildCompareSelects();
