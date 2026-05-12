import { useLocation, useNavigate } from "react-router-dom";
import { CardName } from "../components/ui/CardName";

export function Quadra() {
  const navigate = useNavigate();
  const { state: quadra } = useLocation();

  if (!quadra) {
    return (
      <div className="p-6">
        <p className="text-red-600 font-bold">Nenhuma quadra foi encontrada.</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded" onClick={() => navigate("/")}>
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0c16] text-white px-4 py-6">

      {/* Voltar */}
      <button
        onClick={() => navigate("/")}
        className="text-sm bg-white text-black px-3 py-1 rounded mb-4"
      >
        Voltar
      </button>

      <img
        src={quadra.image}
        className="w-full h-44 object-cover rounded-xl mb-4"
      />

      <h1 className="text-3xl font-bold">{quadra.name}</h1>
      <p className="text-gray-300 text-sm mb-4">
        {quadra.localization} · Endereço exemplo
      </p>

      {/* Day Use */}
      <div className="bg-white text-black p-4 rounded-2xl mb-6 shadow">
        <h2 className="font-bold text-lg">Day Use</h2>
        <p className="mt-1">💰 R$ {quadra.priceDayUse}</p>
      </div>

      {/* Jogadores */}
      <h2 className="text-xl font-bold mb-2">Jogadores</h2>

      <div className="flex flex-col gap-4 mb-6">
        {quadra.jogadores.map((j: any) => (
          <CardName
            key={j.name}
            name={j.name}
            esporte={j.esporte}
            nota={j.nota}
            jogos={j.jogos}
          />
        ))}
      </div>

      {/* Eventos */}
      <div className="bg-white text-black p-4 rounded-2xl shadow mb-10">
        <h2 className="font-bold text-lg">Eventos</h2>
        <ul className="list-disc ml-4 mt-2">
          {quadra.eventos.map((e: string, i: number) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}