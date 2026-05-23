// data.js — só o que a API do GitHub não tem.
// Repos sem entrada aqui aparecem normalmente com ícone padrão.
// Para um novo repo: adicione uma entrada apenas se quiser customizar.

const REPO_EXTRAS = {
  "dissmodel": {
    icon: "🧩",
    featured: true,
    order: 0,
    pills: []
  },
  "dissmodel-ca": {
    icon: "⬡",
    order: 1,
    pills: []
  },
  "dissmodel-sysdyn": {
    icon: "〜",
    order: 2,
    pills: []
  },
  "dissmodel-platform": {
    icon: "⚙",
    order: 3,
    pills: []
  },
  "brmangue-dissmodel": {
    icon: "🌿",
    order: 4,
    pills: []
  },
  "dissluc": {
    icon: "🗺",
    order: 5,
    pills: ["⚡ 3.9× raster speedup", "MAE 0.002276"]
  },
  "disscube": {
    icon: "🗄",
    order: 6,
    pills: []
  },
  "coastal-dynamics": {
    icon: "🌊",
    order: 7,
    pills: []
  }
  // Qualquer repo público da org não listado aqui
  // aparece automaticamente com icon "📦" e sem pills.
};

// Repos a esconder (ex: forks utilitários, templates internos)
const REPO_HIDDEN = [
  // "dissmodel-template"
];
