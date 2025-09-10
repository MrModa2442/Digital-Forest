import type { Tree } from './types';

// OAK SVGs
const OAK_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 80" stroke="#7a5548" stroke-width="2" fill="none"/><path d="M50 80 Q 45 75, 48 70 T 50 65" stroke="#4a644a" stroke-width="2" fill="none"/><path d="M50 80 Q 55 75, 52 70 T 50 65" stroke="#4a644a" stroke-width="2" fill="none"/></svg>`;
const OAK_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#7a5548" stroke-width="4" fill="none"/><path d="M50 75 L 40 65" stroke="#7a5548" stroke-width="3" fill="none"/><path d="M50 70 L 60 60" stroke="#7a5548" stroke-width="3" fill="none"/><circle cx="40" cy="62" r="8" fill="#5a7a5a"/><circle cx="60" cy="57" r="8" fill="#5a7a5a"/><circle cx="50" cy="55" r="10" fill="#6a8a6a"/></svg>`;
const OAK_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#7a5548" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M50 70 Q 35 65, 30 50" stroke="#7a5548" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M50 65 Q 65 60, 70 45" stroke="#7a5548" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="28" cy="48" r="12" fill="#6a8a6a"/><circle cx="72" cy="43" r="12" fill="#6a8a6a"/><circle cx="50" cy="40" r="15" fill="#5a7a5a"/><circle cx="40" cy="50" r="13" fill="#6a8a6a"/><circle cx="60" cy="48" r="13" fill="#5a7a5a"/></svg>`;
const OAK_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 40" stroke="#7a5548" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M50 80 Q 25 70, 20 45" stroke="#7a5548" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M50 75 Q 75 65, 80 40" stroke="#7a5548" stroke-width="7" fill="none" stroke-linecap="round"/><circle cx="18" cy="45" r="15" fill="#5a7a5a"/><circle cx="82" cy="40" r="15" fill="#5a7a5a"/><circle cx="50" cy="25" r="20" fill="#4a644a"/><circle cx="30" cy="35" r="18" fill="#6a8a6a"/><circle cx="70" cy="30" r="18" fill="#6a8a6a"/><circle cx="50" cy="40" r="15" fill="#5a7a5a"/></svg>`;

// PINE SVGs
const PINE_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#6b4f3f" stroke-width="2" fill="none"/><polygon points="50,65 45,75 55,75" fill="#3a5a40"/></svg>`;
const PINE_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#6b4f3f" stroke-width="3" fill="none"/><polygon points="50,55 40,70 60,70" fill="#4a6a50"/><polygon points="50,65 42,80 58,80" fill="#3a5a40"/></svg>`;
const PINE_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#6b4f3f" stroke-width="5" fill="none" stroke-linecap="round"/><polygon points="50,45 35,65 65,65" fill="#5a7a60"/><polygon points="50,55 38,75 62,75" fill="#4a6a50"/><polygon points="50,65 40,85 60,85" fill="#3a5a40"/></svg>`;
const PINE_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 40" stroke="#6b4f3f" stroke-width="7" fill="none" stroke-linecap="round"/><polygon points="50,35 30,60 70,60" fill="#5a7a60"/><polygon points="50,48 35,73 65,73" fill="#4a6a50"/><polygon points="50,61 38,86 62,86" fill="#3a5a40"/><polygon points="50,74 42,94 58,94" fill="#2a4a30"/></svg>`;

// SAKURA SVGs
const SAKURA_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70 Q 55 65, 60 70" stroke="#8a6a55" stroke-width="2" fill="none"/><circle cx="61" cy="69" r="3" fill="#ffc2d9"/></svg>`;
const SAKURA_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#8a6a55" stroke-width="3" fill="none"/><path d="M50 75 Q 40 70, 35 65" stroke="#8a6a55" stroke-width="2" fill="none"/><path d="M50 70 Q 60 65, 65 60" stroke="#8a6a55" stroke-width="2" fill="none"/><circle cx="34" cy="64" r="5" fill="#ffb3c1"/><circle cx="66" cy="59" r="5" fill="#ffb3c1"/><circle cx="50" cy="58" r="6" fill="#ffc2d9"/></svg>`;
const SAKURA_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#8a6a55" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 70 Q 30 60, 25 45" stroke="#8a6a55" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 65 Q 70 55, 75 40" stroke="#8a6a55" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="24" cy="43" r="10" fill="#ff9fbe"/><circle cx="76" cy="38" r="10" fill="#ff9fbe"/><circle cx="50" cy="40" r="12" fill="#ffb3c1"/><circle cx="35" cy="50" r="11" fill="#ffc2d9"/><circle cx="65" cy="48" r="11" fill="#ffc2d9"/></svg>`;
const SAKURA_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 45" stroke="#8a6a55" stroke-width="6" fill="none" stroke-linecap="round"/><path d="M50 80 Q 20 65, 15 35" stroke="#8a6a55" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 75 Q 80 60, 85 30" stroke="#8a6a55" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="13" cy="35" r="15" fill="#ff9fbe"/><circle cx="87" cy="30" r="15" fill="#ff9fbe"/><circle cx="50" cy="20" r="20" fill="#ffb3c1"/><circle cx="30" cy="30" r="18" fill="#ffc2d9"/><circle cx="70" cy="28" r="18" fill="#ffc2d9"/><circle cx="50" cy="35" r="15" fill="#ff9fbe"/></svg>`;

// WILLOW SVGs
const WILLOW_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70 Q 45 80 48 70" stroke="#8c7b62" stroke-width="2" fill="none"/></svg>`;
const WILLOW_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#8c7b62" stroke-width="3" fill="none"/><path d="M50 65 C 40 75, 45 85, 40 95" stroke="#9aab89" stroke-width="2" fill="none"/><path d="M50 65 C 60 75, 55 85, 60 95" stroke="#9aab89" stroke-width="2" fill="none"/></svg>`;
const WILLOW_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#8c7b62" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M50 55 C 30 70, 35 90, 30 95" stroke="#9aab89" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 55 C 70 70, 65 90, 70 95" stroke="#9aab89" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M45 52 C 35 65, 40 80, 35 90" stroke="#b6c8a9" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M55 52 C 65 65, 60 80, 65 90" stroke="#b6c8a9" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
const WILLOW_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 40" stroke="#8c7b62" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M50 45 C 10 65, 20 95, 15 95" stroke="#9aab89" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 45 C 90 65, 80 95, 85 95" stroke="#9aab89" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M45 42 C 20 60, 25 85, 20 95" stroke="#b6c8a9" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M55 42 C 80 60, 75 85, 80 95" stroke="#b6c8a9" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 45 C 40 70, 45 90, 40 95" stroke="#dde6d5" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 45 C 60 70, 55 90, 60 95" stroke="#dde6d5" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;

// MAPLE SVGs (REDESIGNED)
const mapleLeafPath = (x: number, y: number, size: number, angle: number, color: string) => `<path transform="translate(${x}, ${y}) rotate(${angle}) scale(${size/20})" d="M10 0 L7.5 5 L2.5 5 L5 9 L4 14 L10 11 L16 14 L15 9 L17.5 5 L12.5 5 Z" fill="${color}"/>`;
const MAPLE_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 75" stroke="#8a6e45" stroke-width="2"/>${mapleLeafPath(50, 72, 10, 0, "#d9534f")}</svg>`;
const MAPLE_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 65" stroke="#8a6e45" stroke-width="3"/><path d="M50 80 L 40 70" stroke="#8a6e45" stroke-width="2"/><path d="M50 75 L 60 65" stroke="#8a6e45" stroke-width="2"/>${mapleLeafPath(38, 67, 12, -10, "#d9534f")}${mapleLeafPath(62, 62, 12, 10, "#f0ad4e")}${mapleLeafPath(50, 60, 14, 0, "#d9534f")}</svg>`;
const MAPLE_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 55" stroke="#8a6e45" stroke-width="5" stroke-linecap="round"/><path d="M50 75 Q 35 70, 30 55" stroke="#8a6e45" stroke-width="4" fill="none"/><path d="M50 70 Q 65 65, 70 50" stroke="#8a6e45" stroke-width="4" fill="none"/>${mapleLeafPath(28, 52, 15, -20, "#d9534f")}${mapleLeafPath(72, 47, 15, 20, "#f0ad4e")}${mapleLeafPath(50, 45, 18, 0, "#d9534f")}${mapleLeafPath(40, 60, 16, -10, "#f0ad4e")}${mapleLeafPath(60, 55, 16, 10, "#d9534f")}</svg>`;
const MAPLE_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 45" stroke="#8a6e45" stroke-width="8" stroke-linecap="round"/><path d="M50 85 Q 25 75, 20 50" stroke="#8a6e45" stroke-width="6" fill="none"/><path d="M50 80 Q 75 70, 80 45" stroke="#8a6e45" stroke-width="6" fill="none"/>${mapleLeafPath(18, 47, 18, -30, "#d9534f")}${mapleLeafPath(82, 42, 18, 30, "#f0ad4e")}${mapleLeafPath(50, 25, 22, 0, "#d9534f")}${mapleLeafPath(30, 35, 20, -15, "#f0ad4e")}${mapleLeafPath(70, 32, 20, 15, "#d9534f")}${mapleLeafPath(50, 40, 18, 5, "#f0ad4e")}</svg>`;

// BAOBAB SVGs
const BAOBAB_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 C 48 85, 52 85, 50 75" stroke="#a1887f" stroke-width="3" fill="none"/><path d="M50 75 L 45 70" stroke="#a1887f" stroke-width="2"/><path d="M50 75 L 55 70" stroke="#a1887f" stroke-width="2"/></svg>`;
const BAOBAB_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 C 45 80, 55 80, 50 65" stroke="#a1887f" stroke-width="8" fill="none" stroke-linecap="round"/><path d="M50 65 L 40 55" stroke="#a1887f" stroke-width="3"/><path d="M50 65 L 60 55" stroke="#a1887f" stroke-width="3"/><path d="M50 65 L 50 50" stroke="#a1887f" stroke-width="3"/></svg>`;
const BAOBAB_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 C 35 75, 65 75, 50 50" stroke="#a1887f" stroke-width="18" fill="none" stroke-linecap="round"/><path d="M50 50 L 30 35" stroke="#a1887f" stroke-width="5" stroke-linecap="round"/><path d="M50 50 L 70 35" stroke="#a1887f" stroke-width="5" stroke-linecap="round"/><path d="M50 50 L 50 30" stroke="#a1887f" stroke-width="5" stroke-linecap="round"/><path d="M30 35 L 25 40" stroke="#a1887f" stroke-width="3" stroke-linecap="round"/><path d="M70 35 L 75 40" stroke="#a1887f" stroke-width="3" stroke-linecap="round"/></svg>`;
const BAOBAB_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 C 25 70, 75 70, 50 40" stroke="#a1887f" stroke-width="28" fill="none" stroke-linecap="round"/><path d="M50 40 L 20 20" stroke="#a1887f" stroke-width="7" stroke-linecap="round"/><path d="M50 40 L 80 20" stroke="#a1887f" stroke-width="7" stroke-linecap="round"/><path d="M50 40 L 50 15" stroke="#a1887f" stroke-width="7" stroke-linecap="round"/><path d="M20 20 L 10 25" stroke="#a1887f" stroke-width="4" stroke-linecap="round"/><path d="M20 20 L 25 10" stroke="#a1887f" stroke-width="4" stroke-linecap="round"/><path d="M80 20 L 90 25" stroke="#a1887f" stroke-width="4" stroke-linecap="round"/><path d="M80 20 L 75 10" stroke="#a1887f" stroke-width="4" stroke-linecap="round"/></svg>`;

// REDWOOD SVGs
const REDWOOD_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#5d4037" stroke-width="2"/><polygon points="50,70 45,80 55,80" fill="#2e7d32"/></svg>`;
const REDWOOD_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#5d4037" stroke-width="3"/><polygon points="50,50 40,70 60,70" fill="#388e3c"/><polygon points="50,65 42,85 58,85" fill="#2e7d32"/></svg>`;
const REDWOOD_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 30" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/><polygon points="50,30 35,60 65,60" fill="#43a047"/><polygon points="50,50 38,80 62,80" fill="#388e3c"/><polygon points="50,70 40,95 60,95" fill="#2e7d32"/></svg>`;
const REDWOOD_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 10" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/><polygon points="50,10 30,50 70,50" fill="#4caf50"/><polygon points="50,35 35,75 65,75" fill="#43a047"/><polygon points="50,60 38,95 62,95" fill="#388e3c"/><polygon points="50,80 42,98 58,98" fill="#2e7d32"/></svg>`;

// JACARANDA SVGs
const jacarandaFlowerToString = (cx: number, cy: number, color: string) => `<circle cx="${cx}" cy="${cy}" r="3" fill="${color}"/>`;
const JACARANDA_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#795548" stroke-width="2"/><path d="M50 75 L 55 70" stroke="#795548" stroke-width="1.5"/>${jacarandaFlowerToString(56, 69, "#b39ddb")}</svg>`;
const JACARANDA_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="M50 95 V 60" stroke="#795548" stroke-width="3"/><path d="M50 75 L 40 65" stroke="#795548" stroke-width="2"/><path d="M50 70 L 60 60" stroke="#795548" stroke-width="2"/>${jacarandaFlowerToString(39, 64, "#9575cd")}${jacarandaFlowerToString(61, 59, "#b39ddb")}${jacarandaFlowerToString(48, 58, "#9575cd")}</g></svg>`;
const JACARANDA_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="M50 95 V 50" stroke="#795548" stroke-width="4" stroke-linecap="round"/><path d="M50 70 Q 35 65, 30 50" stroke="#795548" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 65 Q 65 60, 70 45" stroke="#795548" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="28" cy="48" r="10" fill="#d1c4e9"/><circle cx="72" cy="43" r="10" fill="#b39ddb"/><circle cx="50" cy="40" r="12" fill="#9575cd"/><circle cx="40" cy="55" r="9" fill="#d1c4e9"/><circle cx="60" cy="52" r="9" fill="#b39ddb"/></g></svg>`;
const JACARANDA_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g><path d="M50 95 V 40" stroke="#795548" stroke-width="6" stroke-linecap="round"/><path d="M50 80 Q 25 70, 20 45" stroke="#795548" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M50 75 Q 75 65, 80 40" stroke="#795548" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="18" cy="45" r="15" fill="#b39ddb"/><circle cx="82" cy="40" r="15" fill="#9575cd"/><circle cx="50" cy="25" r="20" fill="#7e57c2"/><circle cx="30" cy="35" r="18" fill="#d1c4e9"/><circle cx="70" cy="30" r="18" fill="#b39ddb"/><circle cx="50" cy="40" r="15" fill="#9575cd"/></g></svg>`;

// --- NEW TREES START ---

// JOSHUA TREE SVGs (REDESIGNED)
const joshuaLeafCluster = (x: number, y: number, size: number, angle: number) => `<g transform="translate(${x}, ${y}) rotate(${angle}) scale(${size/10})"><path d="M0 0 L-4 -8 L0 -6 L4 -8 Z" fill="#556B2F"/><path d="M0 0 L-6 -2 L-8 2 L-2 2 Z" fill="#556B2F"/><path d="M0 0 L6 -2 L8 2 L2 2 Z" fill="#556B2F"/><path d="M0 0 L-2 6 L2 6 Z" fill="#556B2F"/></g>`;
const JOSHUA_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 80" stroke="#8B6914" stroke-width="3"/>${joshuaLeafCluster(50, 80, 10, 0)}</svg>`;
const JOSHUA_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 75" stroke="#8B6914" stroke-width="4"/><path d="M50 75 C 40 70, 40 65, 35 65" stroke="#8B6914" stroke-width="3" fill="none"/><path d="M50 75 C 60 70, 60 65, 65 65" stroke="#8B6914" stroke-width="3" fill="none"/>${joshuaLeafCluster(35, 65, 12, -30)}${joshuaLeafCluster(65, 65, 12, 30)}</svg>`;
const JOSHUA_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#8B6914" stroke-width="6"/><path d="M50 70 C 30 65, 25 55, 25 50" stroke="#8B6914" stroke-width="4" fill="none"/><path d="M50 70 C 70 65, 75 55, 75 50" stroke="#8B6914" stroke-width="4" fill="none"/><path d="M75 50 C 80 45, 85 45, 85 40" stroke="#8B6914" stroke-width="3" fill="none"/>${joshuaLeafCluster(25, 50, 14, -60)}${joshuaLeafCluster(85, 40, 14, 45)}${joshuaLeafCluster(50, 70, 10, 0)}</svg>`;
const JOSHUA_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 65" stroke="#8B6914" stroke-width="8"/><path d="M50 65 C 25 60, 20 45, 20 40" stroke="#8B6914" stroke-width="5" fill="none"/><path d="M50 65 C 75 60, 80 45, 80 40" stroke="#8B6914" stroke-width="5" fill="none"/><path d="M20 40 C 15 35, 15 30, 10 30" stroke="#8B6914" stroke-width="4" fill="none"/><path d="M80 40 C 85 35, 85 30, 90 30" stroke="#8B6914" stroke-width="4" fill="none"/>${joshuaLeafCluster(10, 30, 15, -70)}${joshuaLeafCluster(90, 30, 15, 70)}${joshuaLeafCluster(40, 50, 12, -45)}${joshuaLeafCluster(60, 50, 12, 45)}</svg>`;

// PALM TREE SVGs
const PALM_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 C 60 85, 65 75, 70 65" stroke="#3A5F0B" stroke-width="2" fill="none"/><path d="M50 95 C 40 85, 35 75, 30 65" stroke="#3A5F0B" stroke-width="2" fill="none"/></svg>`;
const PALM_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 Q 48 80 52 70" stroke="#D2B48C" stroke-width="3" fill="none"/><path d="M52 70 C 62 60, 72 55, 80 45" stroke="#3A5F0B" stroke-width="3" fill="none"/><path d="M52 70 C 42 60, 32 55, 20 45" stroke="#3A5F0B" stroke-width="3" fill="none"/><path d="M52 70 C 52 60, 62 50, 52 40" stroke="#3A5F0B" stroke-width="3" fill="none"/></svg>`;
const PALM_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 Q 45 70 55 50" stroke="#D2B48C" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M55 50 C 70 40, 85 30, 95 15" stroke="#3A5F0B" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M55 50 C 40 40, 25 30, 5 15" stroke="#3A5F0B" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M55 50 C 55 40, 70 30, 55 20" stroke="#3A5F0B" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M55 50 C 55 40, 40 30, 55 20" stroke="#3A5F0B" stroke-width="4" fill="none" stroke-linecap="round"/></svg>`;
const PALM_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 Q 40 60 60 30" stroke="#D2B48C" stroke-width="7" fill="none" stroke-linecap="round"/><path d="M60 30 C 80 20, 95 10, 100 0" stroke="#3A5F0B" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M60 30 C 40 20, 25 10, 0 0" stroke="#3A5F0B" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M60 30 C 60 20, 80 15, 60 5" stroke="#3A5F0B" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M60 30 C 60 20, 40 15, 60 5" stroke="#3A5F0B" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="58" cy="35" r="4" fill="#654321"/><circle cx="63" cy="35" r="4" fill="#654321"/></svg>`;

// MAGNOLIA SVGs
const magnoliaFlower = (cx: number, cy: number) => `<circle cx="${cx}" cy="${cy}" r="5" fill="#FFF8DC"/><circle cx="${cx}" cy="${cy}" r="2" fill="#FFD700"/>`;
const MAGNOLIA_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 75" stroke="#5C4033" stroke-width="2"/><ellipse cx="50" cy="70" rx="10" ry="5" fill="#006400"/></svg>`;
const MAGNOLIA_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 65" stroke="#5C4033" stroke-width="3"/><path d="M50 75 L 40 65" stroke="#5C4033" stroke-width="2"/><path d="M50 70 L 60 60" stroke="#5C4033" stroke-width="2"/><ellipse cx="38" cy="63" rx="12" ry="6" fill="#006400"/><ellipse cx="62" cy="58" rx="12" ry="6" fill="#006400"/><ellipse cx="50" cy="55" rx="15" ry="8" fill="#008000"/></svg>`;
const MAGNOLIA_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 55" stroke="#5C4033" stroke-width="5" stroke-linecap="round"/><path d="M50 70 L 30 50" stroke="#5C4033" stroke-width="4" stroke-linecap="round"/><path d="M50 65 L 70 45" stroke="#5C4033" stroke-width="4" stroke-linecap="round"/><ellipse cx="28" cy="48" rx="15" ry="8" fill="#006400"/><ellipse cx="72" cy="43" rx="15" ry="8" fill="#006400"/><ellipse cx="50" cy="40" rx="20" ry="10" fill="#008000"/>${magnoliaFlower(40, 55)}${magnoliaFlower(60, 50)}</svg>`;
const MAGNOLIA_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 45" stroke="#5C4033" stroke-width="8" stroke-linecap="round"/><path d="M50 80 L 20 50" stroke="#5C4033" stroke-width="6" stroke-linecap="round"/><path d="M50 75 L 80 45" stroke="#5C4033" stroke-width="6" stroke-linecap="round"/><ellipse cx="18" cy="48" rx="20" ry="10" fill="#006400"/><ellipse cx="82" cy="43" rx="20" ry="10" fill="#006400"/><ellipse cx="50" cy="30" rx="30" ry="15" fill="#008000"/>${magnoliaFlower(30, 40)}${magnoliaFlower(70, 35)}${magnoliaFlower(50, 45)}${magnoliaFlower(45, 25)}</svg>`;

// SPRUCE SVGs
const SPRUCE_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 80" stroke="#4F2A1D" stroke-width="2"/><polygon points="50,75 45,85 55,85" fill="#2E4636"/></svg>`;
const SPRUCE_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#4F2A1D" stroke-width="3"/><polygon points="50,65 40,80 60,80" fill="#3B5745"/><polygon points="50,75 45,90 55,90" fill="#2E4636"/></svg>`;
const SPRUCE_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#4F2A1D" stroke-width="5" stroke-linecap="round"/><polygon points="50,45 35,65 65,65" fill="#4A6854"/><polygon points="50,60 38,80 62,80" fill="#3B5745"/><polygon points="50,75 42,95 58,95" fill="#2E4636"/></svg>`;
const SPRUCE_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 30" stroke="#4F2A1D" stroke-width="7" stroke-linecap="round"/><polygon points="50,25 25,55 75,55" fill="#4A6854"/><polygon points="50,45 30,75 70,75" fill="#3B5745"/><polygon points="50,65 35,95 65,95" fill="#2E4636"/><polygon points="50,85 45,100 55,100" fill="#1F3024"/></svg>`;

// GINKGO SVGs
const ginkgoLeaf = (x: number, y: number, size: number, color: string) => `<path d="M${x},${y} Q${x - size},${y - size} ${x - size * 1.5},${y} Q${x - size},${y + size} ${x},${y} Z" fill="${color}"/><path d="M${x},${y} Q${x + size},${y - size} ${x + size * 1.5},${y} Q${x + size},${y + size} ${x},${y} Z" fill="${color}"/>`;
const GINKGO_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#70543E" stroke-width="2"/>${ginkgoLeaf(50, 68, 5, "#6B8E23")}</svg>`;
const GINKGO_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#70543E" stroke-width="3"/><path d="M50 75 L 40 65" stroke="#70543E" stroke-width="2"/><path d="M50 70 L 60 60" stroke="#70543E" stroke-width="2"/>${ginkgoLeaf(38, 63, 6, "#6B8E23")}${ginkgoLeaf(62, 58, 6, "#6B8E23")}</svg>`;
const GINKGO_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#70543E" stroke-width="5" stroke-linecap="round"/><path d="M50 70 Q 35 65, 30 50" stroke="#70543E" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M50 65 Q 65 60, 70 45" stroke="#70543E" stroke-width="4" stroke-linecap="round" fill="none"/>${ginkgoLeaf(28, 48, 8, "#6B8E23")}${ginkgoLeaf(72, 43, 8, "#6B8E23")}${ginkgoLeaf(50, 40, 10, "#9ACD32")}</svg>`;
const GINKGO_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 40" stroke="#70543E" stroke-width="7" stroke-linecap="round"/><path d="M50 80 Q 25 70, 20 45" stroke="#70543E" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M50 75 Q 75 65, 80 40" stroke="#70543E" stroke-width="5" stroke-linecap="round" fill="none"/>${ginkgoLeaf(18, 45, 10, "#FFD700")}${ginkgoLeaf(82, 40, 10, "#FFD700")}${ginkgoLeaf(50, 25, 15, "#FFD700")}${ginkgoLeaf(30, 35, 12, "#FFD700")}${ginkgoLeaf(70, 30, 12, "#FFD700")}</svg>`;

// ACACIA SVGs
const ACACIA_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 75" stroke="#5D4C3A" stroke-width="2"/><ellipse cx="50" cy="70" rx="15" ry="5" fill="#3D550C"/></svg>`;
const ACACIA_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 65" stroke="#5D4C3A" stroke-width="3"/><path d="M50 65 L 40 60" stroke="#5D4C3A" stroke-width="2"/><path d="M50 65 L 60 60" stroke="#5D4C3A" stroke-width="2"/><ellipse cx="50" cy="55" rx="25" ry="8" fill="#3D550C"/></svg>`;
const ACACIA_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 55" stroke="#5D4C3A" stroke-width="5" stroke-linecap="round"/><path d="M50 55 L 30 45" stroke="#5D4C3A" stroke-width="4" stroke-linecap="round"/><path d="M50 55 L 70 45" stroke="#5D4C3A" stroke-width="4" stroke-linecap="round"/><ellipse cx="50" cy="40" rx="40" ry="12" fill="#3D550C"/></svg>`;
const ACACIA_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 45" stroke="#5D4C3A" stroke-width="8" stroke-linecap="round"/><path d="M50 45 L 20 30" stroke="#5D4C3A" stroke-width="6" stroke-linecap="round"/><path d="M50 45 L 80 30" stroke="#5D4C3A" stroke-width="6" stroke-linecap="round"/><ellipse cx="50" cy="25" rx="50" ry="18" fill="#3D550C"/></svg>`;

// CYPRESS SVGs
const CYPRESS_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#4A423B" stroke-width="2"/><ellipse cx="50" cy="65" rx="5" ry="15" fill="#2E3B22"/></svg>`;
const CYPRESS_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#4A423B" stroke-width="3"/><ellipse cx="50" cy="40" rx="8" ry="25" fill="#2E3B22"/></svg>`;
const CYPRESS_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 30" stroke="#4A423B" stroke-width="5" stroke-linecap="round"/><ellipse cx="50" cy="20" rx="12" ry="40" fill="#2E3B22"/></svg>`;
const CYPRESS_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 10" stroke="#4A423B" stroke-width="7" stroke-linecap="round"/><ellipse cx="50" cy="5" rx="15" ry="55" fill="#2E3B22"/></svg>`;

// BIRCH SVGs
const BIRCH_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#EAE0D8" stroke-width="2"/><circle cx="50" cy="65" r="5" fill="#FFD700"/></svg>`;
const BIRCH_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#EAE0D8" stroke-width="3"/><path d="M50 70 L 60 65" stroke="#EAE0D8" stroke-width="2"/><circle cx="62" cy="63" r="8" fill="#FFD700"/><circle cx="48" cy="58" r="7" fill="#FFD700"/></svg>`;
const BIRCH_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#EAE0D8" stroke-width="4" stroke-linecap="round"/><path d="M52 90 h -4 v -5 h 4 z" fill="black"/><path d="M48 70 h 3 v -4 h -3 z" fill="black"/><path d="M50 70 Q 35 65, 30 50" stroke="#EAE0D8" stroke-width="3" fill="none"/><path d="M50 65 Q 65 60, 70 45" stroke="#EAE0D8" stroke-width="3" fill="none"/><circle cx="28" cy="48" r="10" fill="#FFD700"/><circle cx="72" cy="43" r="10" fill="#FFD700"/></svg>`;
const BIRCH_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 40" stroke="#EAE0D8" stroke-width="6" stroke-linecap="round"/><path d="M52 90 h -4 v -8 h 4 z" fill="black"/><path d="M48 70 h 3 v -6 h -3 z" fill="black"/><path d="M51 55 h -3 v -5 h 3 z" fill="black"/><path d="M50 80 Q 25 70, 20 45" stroke="#EAE0D8" stroke-width="4" fill="none"/><path d="M50 75 Q 75 65, 80 40" stroke="#EAE0D8" stroke-width="4" fill="none"/><circle cx="18" cy="45" r="12" fill="#FFD700"/><circle cx="82" cy="40" r="12" fill="#FFD700"/><circle cx="50" cy="30" r="15" fill="#FFD700"/></svg>`;

// BONSAI SVGs
const BONSAI_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M40 95 H 60 V 90 H 40 Z" fill="#604C3D"/><path d="M50 90 V 80" stroke="#5C4033" stroke-width="2"/><circle cx="50" cy="77" r="5" fill="#228B22"/></svg>`;
const BONSAI_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M35 95 H 65 V 88 H 35 Z" fill="#604C3D"/><path d="M50 88 Q 45 80 55 75" stroke="#5C4033" stroke-width="3"/><path d="M55 75 L 65 70" stroke="#5C4033" stroke-width="2"/><circle cx="67" cy="68" r="8" fill="#228B22"/><circle cx="50" cy="73" r="7" fill="#228B22"/></svg>`;
const BONSAI_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30 95 H 70 V 86 H 30 Z" fill="#604C3D"/><path d="M50 86 Q 35 75 50 65 Q 65 55 55 50" stroke="#5C4033" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="53" cy="48" r="10" fill="#228B22"/><circle cx="35" cy="70" r="9" fill="#228B22"/></svg>`;
const BONSAI_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M25 95 H 75 V 85 H 25 Z" fill="#604C3D"/><path d="M50 85 Q 30 70 45 60 Q 60 50 40 40 Q 55 30 50 20" stroke="#5C4033" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="52" cy="18" r="12" fill="#228B22"/><circle cx="38" cy="38" r="15" fill="#228B22"/><circle cx="48" cy="58" r="14" fill="#228B22"/></svg>`;

// SEQUOIA SVGs (REDESIGNED)
const SEQUOIA_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M48 95 H 52 L 51 80 H 49 Z" fill="#8B4513"/><path d="M50 80 L 45 75 L 55 75 Z" fill="#2E4032"/></svg>`;
const SEQUOIA_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M45 95 H 55 L 52 60 H 48 Z" fill="#8B4513"/><path d="M50 75 L 40 70 L 60 70 Z" fill="#2E4032"/><path d="M50 65 L 45 60 L 55 60 Z" fill="#2E4032"/></svg>`;
const SEQUOIA_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M40 95 H 60 L 54 40 H 46 Z" fill="#8B4513" stroke-linecap="round"/><path d="M50 60 L 30 55 L 70 55 Z" fill="#2E4032"/><path d="M50 50 L 35 45 L 65 45 Z" fill="#2E4032"/><path d="M50 40 L 40 35 L 60 35 Z" fill="#2E4032"/></svg>`;
const SEQUOIA_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M35 95 H 65 L 56 20 H 44 Z" fill="#8B4513" stroke-linecap="round"/><path d="M50 50 L 20 45 L 80 45 Z" fill="#2E4032"/><path d="M50 40 L 25 35 L 75 35 Z" fill="#2E4032"/><path d="M50 30 L 30 25 L 70 25 Z" fill="#2E4032"/><path d="M50 20 L 40 15 L 60 15 Z" fill="#2E4032"/></svg>`;

// RAINBOW EUCALYPTUS SVGs
const RAINBOW_S1_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 70" stroke="#A9A9A9" stroke-width="2"/><circle cx="50" cy="65" r="5" fill="#6B8E23"/></svg>`;
const RAINBOW_S2_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 60" stroke="#A9A9A9" stroke-width="3"/><path d="M50 90 V 70" stroke="#90EE90" stroke-width="3"/><path d="M50 70 L 60 65" stroke="#A9A9A9" stroke-width="2"/><circle cx="62" cy="63" r="8" fill="#6B8E23"/><circle cx="48" cy="58" r="7" fill="#6B8E23"/></svg>`;
const RAINBOW_S3_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 50" stroke="#A9A9A9" stroke-width="4"/><path d="M50 95 V 75" stroke="#90EE90" stroke-width="4"/><path d="M51 85 V 65" stroke="#ADD8E6" stroke-width="2"/><path d="M49 75 V 55" stroke="#FFA07A" stroke-width="2"/><path d="M50 70 Q 35 65, 30 50" stroke="#A9A9A9" stroke-width="3" fill="none"/><circle cx="28" cy="48" r="10" fill="#6B8E23"/><circle cx="65" cy="55" r="10" fill="#6B8E23"/></svg>`;
const RAINBOW_S4_STRING = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 95 V 40" stroke="#A9A9A9" stroke-width="6"/><path d="M50 95 V 70" stroke="#90EE90" stroke-width="5"/><path d="M52 90 V 60" stroke="#ADD8E6" stroke-width="3"/><path d="M48 85 V 50" stroke="#FFA07A" stroke-width="3"/><path d="M51 70 V 45" stroke="#DDA0DD" stroke-width="2"/><path d="M50 80 Q 25 70, 20 45" stroke="#A9A9A9" stroke-width="4" fill="none"/><path d="M50 75 Q 75 65, 80 40" stroke="#A9A9A9" stroke-width="4" fill="none"/><circle cx="18" cy="45" r="12" fill="#6B8E23"/><circle cx="82" cy="40" r="12" fill="#6B8E23"/><circle cx="50" cy="30" r="15" fill="#6B8E23"/></svg>`;


// --- NEW TREES END ---


const SvgToUrl = (svgString: string): string => {
    // Encode the raw SVG string in base64 to create a valid data URI.
    const base64 = btoa(svgString);
    return `data:image/svg+xml;base64,${base64}`;
}


export const TREES: Tree[] = [
  {
    id: 'oak',
    name: 'tree_oak',
    growthStages: [ SvgToUrl(OAK_S1_STRING), SvgToUrl(OAK_S2_STRING), SvgToUrl(OAK_S3_STRING), SvgToUrl(OAK_S4_STRING) ],
    price: 0,
  },
  {
    id: 'pine',
    name: 'tree_pine',
    growthStages: [ SvgToUrl(PINE_S1_STRING), SvgToUrl(PINE_S2_STRING), SvgToUrl(PINE_S3_STRING), SvgToUrl(PINE_S4_STRING) ],
    price: 0,
  },
  {
    id: 'sakura',
    name: 'tree_sakura',
    growthStages: [ SvgToUrl(SAKURA_S1_STRING), SvgToUrl(SAKURA_S2_STRING), SvgToUrl(SAKURA_S3_STRING), SvgToUrl(SAKURA_S4_STRING) ],
    price: 50,
  },
  {
    id: 'willow',
    name: 'tree_willow',
    growthStages: [ SvgToUrl(WILLOW_S1_STRING), SvgToUrl(WILLOW_S2_STRING), SvgToUrl(WILLOW_S3_STRING), SvgToUrl(WILLOW_S4_STRING) ],
    price: 75,
  },
  {
    id: 'maple',
    name: 'tree_maple',
    growthStages: [ SvgToUrl(MAPLE_S1_STRING), SvgToUrl(MAPLE_S2_STRING), SvgToUrl(MAPLE_S3_STRING), SvgToUrl(MAPLE_S4_STRING) ],
    price: 100,
  },
  {
    id: 'baobab',
    name: 'tree_baobab',
    growthStages: [ SvgToUrl(BAOBAB_S1_STRING), SvgToUrl(BAOBAB_S2_STRING), SvgToUrl(BAOBAB_S3_STRING), SvgToUrl(BAOBAB_S4_STRING) ],
    price: 150,
  },
  {
    id: 'redwood',
    name: 'tree_redwood',
    growthStages: [ SvgToUrl(REDWOOD_S1_STRING), SvgToUrl(REDWOOD_S2_STRING), SvgToUrl(REDWOOD_S3_STRING), SvgToUrl(REDWOOD_S4_STRING) ],
    price: 200,
  },
  {
    id: 'jacaranda',
    name: 'tree_jacaranda',
    growthStages: [ SvgToUrl(JACARANDA_S1_STRING), SvgToUrl(JACARANDA_S2_STRING), SvgToUrl(JACARANDA_S3_STRING), SvgToUrl(JACARANDA_S4_STRING) ],
    price: 250,
  },
  {
    id: 'joshua',
    name: 'tree_joshua',
    growthStages: [ SvgToUrl(JOSHUA_S1_STRING), SvgToUrl(JOSHUA_S2_STRING), SvgToUrl(JOSHUA_S3_STRING), SvgToUrl(JOSHUA_S4_STRING) ],
    price: 300,
  },
  {
    id: 'palm',
    name: 'tree_palm',
    growthStages: [ SvgToUrl(PALM_S1_STRING), SvgToUrl(PALM_S2_STRING), SvgToUrl(PALM_S3_STRING), SvgToUrl(PALM_S4_STRING) ],
    price: 350,
  },
  {
    id: 'magnolia',
    name: 'tree_magnolia',
    growthStages: [ SvgToUrl(MAGNOLIA_S1_STRING), SvgToUrl(MAGNOLIA_S2_STRING), SvgToUrl(MAGNOLIA_S3_STRING), SvgToUrl(MAGNOLIA_S4_STRING) ],
    price: 400,
  },
  {
    id: 'spruce',
    name: 'tree_spruce',
    growthStages: [ SvgToUrl(SPRUCE_S1_STRING), SvgToUrl(SPRUCE_S2_STRING), SvgToUrl(SPRUCE_S3_STRING), SvgToUrl(SPRUCE_S4_STRING) ],
    price: 500,
  },
  {
    id: 'ginkgo',
    name: 'tree_ginkgo',
    growthStages: [ SvgToUrl(GINKGO_S1_STRING), SvgToUrl(GINKGO_S2_STRING), SvgToUrl(GINKGO_S3_STRING), SvgToUrl(GINKGO_S4_STRING) ],
    price: 600,
  },
  {
    id: 'acacia',
    name: 'tree_acacia',
    growthStages: [ SvgToUrl(ACACIA_S1_STRING), SvgToUrl(ACACIA_S2_STRING), SvgToUrl(ACACIA_S3_STRING), SvgToUrl(ACACIA_S4_STRING) ],
    price: 750,
  },
  {
    id: 'cypress',
    name: 'tree_cypress',
    growthStages: [ SvgToUrl(CYPRESS_S1_STRING), SvgToUrl(CYPRESS_S2_STRING), SvgToUrl(CYPRESS_S3_STRING), SvgToUrl(CYPRESS_S4_STRING) ],
    price: 900,
  },
  {
    id: 'birch',
    name: 'tree_birch',
    growthStages: [ SvgToUrl(BIRCH_S1_STRING), SvgToUrl(BIRCH_S2_STRING), SvgToUrl(BIRCH_S3_STRING), SvgToUrl(BIRCH_S4_STRING) ],
    price: 1100,
  },
  {
    id: 'bonsai',
    name: 'tree_bonsai',
    growthStages: [ SvgToUrl(BONSAI_S1_STRING), SvgToUrl(BONSAI_S2_STRING), SvgToUrl(BONSAI_S3_STRING), SvgToUrl(BONSAI_S4_STRING) ],
    price: 1500,
  },
  {
    id: 'sequoia',
    name: 'tree_sequoia',
    growthStages: [ SvgToUrl(SEQUOIA_S1_STRING), SvgToUrl(SEQUOIA_S2_STRING), SvgToUrl(SEQUOIA_S3_STRING), SvgToUrl(SEQUOIA_S4_STRING) ],
    price: 2000,
  },
  {
    id: 'rainbow-eucalyptus',
    name: 'tree_rainbow_eucalyptus',
    growthStages: [ SvgToUrl(RAINBOW_S1_STRING), SvgToUrl(RAINBOW_S2_STRING), SvgToUrl(RAINBOW_S3_STRING), SvgToUrl(RAINBOW_S4_STRING) ],
    price: 10000,
  },
];