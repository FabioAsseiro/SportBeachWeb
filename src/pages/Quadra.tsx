import { useNavigate, useParams } from "react-router-dom";
import { quadras } from "../data/quadras";
import { CardName } from "../components/ui/CardName";

export function Quadra() {
  const navigate = useNavigate();
  const { id } = useParams();

  const quadra = quadras.find((q) => q.id === Number(id));

  if (!quadra) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-bold">Quadra não encontrada.</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0c16] text-white">

      {/* Topo */}
      <div className="relative">
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded text-white"
        >
          Voltar
        </button>

        <img
          src={quadra.image}
          className="w-full h-56 object-cover"
        />

        <div className="absolute bottom-0 left-0 p-4 bg-linear-to-t from-black/70 to-transparent w-full">
          <h1 className="text-3xl font-extrabold">{quadra.name}</h1>
          <p className="text-gray-300 text-sm">
            {quadra.localization} · {quadra.info}
          </p>
        </div>
      </div>

      <div className="px-5 mt-6">

        {/* DAY USE */}
        <div className="bg-white text-black p-5 rounded-2xl shadow-lg mb-6 border border-orange-400">
          <h2 className="font-bold text-xl mb-1">💰 Day Use</h2>
          <p className="text-2xl font-extrabold text-orange-600">R$ {quadra.priceDayUse}</p>
          <button className="mt-3 bg-orange-500 w-full text-white py-2 rounded-xl font-bold hover:bg-orange-600">
            Reservar agora
          </button>
        </div>

        {/* JOGADORES */}
        <h2 className="text-2xl font-bold mb-3">Jogadores</h2>
        <div className="flex flex-col gap-4 mb-8">
          {quadra.jogadores.map((j) => (
           CardName({ name: j.name, esporte: j.esporte, nota: j.nota, jogos: j.jogos })
          ))}
        </div>

        {/* EVENTOS */}
        <h2 className="text-2xl font-bold mb-3">Eventos</h2>

        <div className="flex flex-col gap-3 mb-16">
          {quadra.eventos.map((e, idx) => (
            <div
              key={idx}
              className="bg-white text-black p-4 rounded-xl shadow flex items-center gap-3"
            >
              <span className="text-2xl">📅</span>
              <span className="font-medium">{e}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}