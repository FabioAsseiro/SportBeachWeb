import { useNavigate } from "react-router-dom";

export function Lobby() {
  const navigate = useNavigate();

  const quadras = [
    {
      id: 1,
      name: "Arena Real",
      distance: "320 m",
      localization: "Copacabana",
      image: "https://picsum.photos/200?x=1",
      tags: ["Futevôlei", "Beach Tennis", "Vôlei"],
      status: "Aberta",
      info: "4 quadras · #1 no ranking local",
      priceDayUse: 15,
      jogadores: [
        { name: "Carlos Oliveira", esporte: "Vôlei de Praia", nota: 4.2, jogos: 18 },
        { name: "Maria Fernanda", esporte: "Futevôlei", nota: 4.8, jogos: 25 },
        { name: "João Pedro", esporte: "Beach Tennis", nota: 4.5, jogos: 30 },
        { name: "Luiza Costa", esporte: "Vôlei", nota: 4.7, jogos: 22 },
      ],
      eventos: ["Desafio de Duplas - 10/07", "Torneio Mensal - 20/07"],
    },
    {
      id: 2,
      name: "Arena Lua & Sol",
      distance: "8 km",
      localization: "Praia Norte",
      image: "https://picsum.photos/200?x=2",
      tags: ["Beach Tennis", "Vôlei"],
      status: "Aberta",
      info: "6 quadras · 145 jogadores ativos",
      priceDayUse: 15,
      jogadores: [
        { name: "Fabio Nogueira", esporte: "Futevôlei", nota: 4.2, jogos: 18 },
        { name: "Ana Silva", esporte: "Vôlei", nota: 4.8, jogos: 25 },
        { name: "Marcos Lima", esporte: "Beach Tennis", nota: 4.5, jogos: 30 },
        { name: "Julia Santos", esporte: "Vôlei de Praia", nota: 4.7, jogos: 22 },
      ],
      eventos: ["Desafio de Duplas - 10/07"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0c0c16] px-4 py-6 text-white">

      <h1 className="text-3xl font-bold">Arenas</h1>
      <p className="text-sm text-gray-300 mb-6">Beach Sports</p>

      {/* Tabs */}
      <div className="flex mb-5 border-b border-gray-700">
        {["Próximas", "Favoritas", "Todas"].map((tab, i) => (
          <button
            key={i}
            className={`px-4 py-2 text-sm ${
              i === 0 ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="flex flex-col gap-3">
        {quadras.map((quadra) => (
          <div
            key={quadra.id}
            onClick={() => navigate(`/quadra/${quadra.id}`, { state: quadra })}
            className="bg-[#1a1a25] rounded-xl p-4 shadow-md cursor-pointer hover:bg-[#222233] transition"
          >
            <div className="flex gap-3">
              <img src={quadra.image} className="w-14 h-14 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold">{quadra.name}</h2>
                  <span className="text-xs bg-green-500 text-black px-2 py-1 rounded-full">
                    {quadra.status}
                  </span>
                </div>

                <p className="text-gray-400 text-sm">
                  {quadra.localization} · {quadra.distance}
                </p>

                <div className="flex gap-2 mt-2 flex-wrap">
                  {quadra.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-black/40 px-2 py-1 rounded-full border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-xs mt-2">{quadra.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}