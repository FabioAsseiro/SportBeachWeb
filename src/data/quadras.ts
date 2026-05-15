const quadras = [
  {
    id: 1,
    name: "Arena Real",
    distance: "320 m",
    localization: "Copacabana",
    image: "https://picsum.photos/500?x=1",
    tags: ["Futevôlei", "Beach Tennis", "Vôlei"],
    status: "Fechada",
    info: "4 quadras · #1 no ranking local",
    priceDayUse: 15,
    liveCount: 0,
    nextEvent: "Desafio de Duplas · 10/07",
    jogadores: [
      { name: "Carlos Oliveira", esporte: "Vôlei", nota: 4.2, jogos: 18 },
      { name: "Maria Fernanda", esporte: "Futevôlei", nota: 4.8, jogos: 25 },
    ],
    eventos: ["Desafio de Duplas - 10/07", "Torneio Mensal - 20/07"],
  },
  {
    id: 2,
    name: "Arena Lua & Sol",
    distance: "8 km",
    localization: "Praia Norte",
    image: "https://picsum.photos/500?x=2",
    tags: ["Beach Tennis", "Vôlei"],
    status: "Aberta",
    info: "6 quadras · 145 jogadores ativos",
    priceDayUse: 15,
    liveCount: 2,
    nextEvent: "Desafio de Duplas · 10/07",
    jogadores: [
      { name: "Fabio Nogueira", esporte: "Futevôlei", nota: 4.2, jogos: 18 },
      { name: "Ana Silva", esporte: "Vôlei", nota: 4.8, jogos: 25 },
    ],
    eventos: ["Desafio de Duplas - 10/07"],
  },
  {
    id: 321312,
    name: "Arena Maori",
    distance: "23 km",
    localization: "Osasco",
    image: "https://picsum.photos/500?x=3",
    tags: ["Beach Tennis", "Futevôlei"],
    status: "Aberta",
    info: "6 quadras · 145 jogadores ativos",
    priceDayUse: 15,
    liveCount: 1,
    nextEvent: "Desafio de Duplas · 10/07",
    jogadores: [
      { name: "Fabio Nogueira", esporte: "Futevôlei", nota: 4.2, jogos: 18 },
      { name: "Ana Silva", esporte: "Vôlei", nota: 4.8, jogos: 25 },
    ],
    eventos: ["Desafio de Duplas - 10/07"],
  },
  {
    id: 3213123,
    name: "Arena Fluxo",
    distance: "23 km",
    localization: "Osasco",
    image: "https://picsum.photos/500?x=4",
    tags: ["Beach Tennis", "Futevôlei"],
    status: "Aberta",
    info: "6 quadras · 145 jogadores ativos",
    priceDayUse: 15,
    liveCount: 1,
    nextEvent: "Desafio de Duplas · 10/07",
    jogadores: [
      { name: "Fabio Nogueira", esporte: "Futevôlei", nota: 4.2, jogos: 18 },
      { name: "Ana Silva", esporte: "Vôlei", nota: 4.8, jogos: 25 },
      { name: "João Pedro", esporte: "Beach Tennis", nota: 4.5, jogos: 30 },
      { name: "Luiza Costa", esporte: "Futevôlei", nota: 4.7, jogos: 22 },
      { name: "Marcos Santos", esporte: "Vôlei", nota: 4.3, jogos: 15 }
    ],
    eventos: ["Desafio de Duplas - 10/07"],
  }
];

// Calcula rating automaticamente como média das notas dos jogadores
const quadrasComRating = quadras.map((q) => ({
  ...q,
  rating:
    q.jogadores.length > 0
      ? (
          q.jogadores.reduce((acc, j) => acc + j.nota, 0) / q.jogadores.length
        ).toFixed(1)
      : null,
}));

export { quadrasComRating as quadras };