// data.js — só o que a API do GitHub não tem.
// Repos sem entrada aqui aparecem normalmente com ícone padrão.
// Para um novo repo: adicione uma entrada apenas se quiser customizar.

const REPO_EXTRAS = {
  "dissmodel": {
    icon: "🧩",
    featured: true,
    order: 0,
    pills: [],
    links: [
      { label: "📖 Docs", url: "https://dissmodel.github.io/dissmodel/" }
    ]
  },
  "dissmodel-ca": {
    icon: "⬡",
    order: 1,
    pills: [],
    links: [
      { label: "📖 Docs", url: "https://dissmodel.github.io/dissmodel-ca/" },
      { label: "🚀 Demo", url: "https://huggingface.co/spaces/profsergiocosta/dissmodel-ca-demo" }
    ]
  },
  "dissmodel-sysdyn": {
    icon: "〜",
    order: 2,
    pills: [],
    links: [
      { label: "📖 Docs", url: "https://dissmodel.github.io/dissmodel-sysdyn/" },
      { label: "🚀 Demo", url: "https://huggingface.co/spaces/profsergiocosta/dissmodel-sysdyn-demo" }
    ]
  },
  "dissmodel-platform": {
    icon: "⚙",
    order: 3,
    pills: [],
    links: []
  },
  "brmangue-dissmodel": {
    icon: "🌿",
    order: 4,
    pills: [],
    links: []
  },
  "dissluc": {
    icon: "🗺",
    order: 5,
    pills: ["⚡ 3.9× raster speedup", "MAE 0.002276"],
    links: []
  },
  "disscube": {
    icon: "🗄",
    order: 6,
    pills: [],
    links: []
  },
  "coastal-dynamics": {
    icon: "🌊",
    order: 7,
    pills: [],
    links: []
  }
  // Qualquer repo público da org não listado aqui
  // aparece automaticamente com icon "📦" e sem pills/links.
};

// Repos a esconder (ex: forks utilitários, templates internos)
const REPO_HIDDEN = [
  // "dissmodel-template"
];