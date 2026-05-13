import { useNavigate } from "react-router-dom";
import { quadras } from "../data/quadras";

export function Lobby() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-black px-10 py-8">

      {/* HEADER */}
      <header className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 rounded-full bg-orange-500"></div>
        <h1 className="text-xl font-semibold">Sport Beach</h1>

        <nav className="ml-20 flex gap-10 text-[15px] font-medium">
          <button className="hover:text-orange-600 transition">Arena</button>
          <button className="hover:text-orange-600 transition">Usuário</button>
          <button className="hover:text-orange-600 transition">Configuração</button>
        </nav>
      </header>

      {/* GRID 2 COLUNAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl">

        {quadras.map((quadra) => (
          <div
            key={quadra.id}
            onClick={() => navigate(`/quadra/${quadra.id}`)}
            className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer
                       hover:scale-[1.02] hover:shadow-xl transition"
          >
            {/* Imagem */}
            <img
              src={quadra.image}
              alt={quadra.name}
              className="h-40 w-full object-cover"
            />

            {/* Conteúdo */}
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{quadra.name}</h2>

                <span
                  className={`
                    text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full
                    ${quadra.status === "Aberta"
                      ? "bg-green-500 shadow-md shadow-green-400/40"
                      : "bg-red-500 shadow-md shadow-red-500/40"
                    }
                  `}
                >
                  {quadra.status}
                </span>
              </div>

              <p className="text-gray-700 text-sm mt-1">
                {quadra.localization} · {quadra.distance}
              </p>

              {/* TAGS */}
              <div className="flex gap-2 mt-2 flex-wrap">
                {quadra.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* INFO */}
              <p className="text-gray-500 text-xs mt-3">{quadra.info}</p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}