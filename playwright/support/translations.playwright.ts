import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// Lit site/js/translations.js et en extrait la constante "translations"
// (source de vérité des textes attendus dans les 4 langues)
const contenu = readFileSync(resolve("site/js/translations.js"), "utf-8");

export const translations = new Function(`${contenu}; return translations;`)();
