import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quadras } from "../data/quadras";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const MODALIDADES = ["Todas", "Beach Tennis", "Futevôlei", "Vôlei"];
const ORDENAR = ["Mais próximas", "Melhor ranking", "Mais ativas"];

export function Lobby() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [filtro, setFiltro] = useState("Todas");
  const [ordem, setOrdem] = useState("Mais próximas");
  const [busca, setBusca] = useState("");

  

  const quadrasFiltradas = quadras.filter((q) => {
    const matchBusca =
      busca === "" ||
      q.name.toLowerCase().includes(busca.toLowerCase()) ||
      q.localization.toLowerCase().includes(busca.toLowerCase());

    const matchFiltro =
      filtro === "Todas" || (q.tags && q.tags.includes(filtro));

    return matchBusca && matchFiltro;
  });

  const destaque = quadrasFiltradas[0];
  const demais = quadrasFiltradas.slice(1);

  return (
    <div className="min-h-screen bg-[#f5f7fa] dark:bg-slate-950 font-sans transition-colors">

      {/* NAVBAR */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-10 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center gap-6">
          <div className="flex items-center gap-2.5 mr-4">
            <div className="w-8 h-8 rounded-full bg-orange-500" />
            <span className="text-base font-semibold text-gray-900 dark:text-white">Sport Beach</span>
          </div>

          <nav className="flex gap-1 flex-1">
            {["Arenas", "Usuário", "Ranking", "Configuração"].map((item, i) => (
              <button
                key={item}
                className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${
                  i === 0
                    ? "bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 font-medium"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              title={theme === "light" ? "Ativar modo escuro" : "Ativar modo claro"}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <button className="text-sm px-3 py-1.5 border border-gray-200 dark:border-slate-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
              Entrar
            </button>
            <button className="text-sm px-3 py-1.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Cadastrar arena
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between gap-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
              Encontre arenas perto de você
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              Beach tennis, futvolei, vôlei de praia e mais
            </p>
            <div className="flex gap-6">
              {[
                { num: "47", lbl: "Arenas cadastradas" },
                { num: "1.2k", lbl: "Jogadores ativos" },
                { num: "312", lbl: "Partidas esse mês" },
              ].map(({ num, lbl }) => (
                <div key={lbl}>
                  <div className="text-xl font-semibold text-orange-500">{num}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500">{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BUSCA */}
          <div className="flex items-center gap-2.5 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl px-4 py-2.5 w-72 transition-colors">
            <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Buscar arena ou bairro…"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="bg-transparent text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 outline-none w-full"
            />
          </div>
        </div>
      </section>

      {/* FILTROS */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 flex-wrap bg-[#f5f7fa] dark:bg-slate-950 transition-colors">
        <span className="text-xs text-gray-400 dark:text-gray-500 mr-1">Modalidade</span>
        {MODALIDADES.map((m) => (
          <button
            key={m}
            onClick={() => setFiltro(m)}
            className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
              filtro === m
                ? "bg-orange-50 dark:bg-orange-950 border-orange-300 dark:border-orange-700 text-orange-700 dark:text-orange-400 font-medium"
                : "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 hover:border-gray-300 dark:hover:border-slate-600"
            }`}
          >
            {m}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M3 6h18M6 12h12M9 18h6" />
          </svg>
          <select
            value={ordem}
            onChange={(e) => setOrdem(e.target.value)}
            className="text-xs border border-gray-200 dark:border-slate-700 rounded-lg px-2 py-1.5 bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 outline-none transition-colors"
          >
            {ORDENAR.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
      </div>

      {/* GRID */}
      <main className="max-w-6xl mx-auto px-6 pb-12 bg-[#f5f7fa] dark:bg-slate-950 transition-colors">
        {quadrasFiltradas.length === 0 && (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500 text-sm">
            Nenhuma arena encontrada para "{busca}"
          </div>
        )}

        {/* CARD DESTAQUE (primeiro resultado) */}
        {destaque && (
          <div
            onClick={() => navigate(`/quadra/${destaque.id}`)}
            className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden cursor-pointer hover:border-orange-300 dark:hover:border-orange-600 transition-colors mb-4 flex"
          >
            <div className="relative w-56 shrink-0 bg-sky-100 dark:bg-slate-700">
              {destaque.image && (
                <img src={destaque.image} alt={destaque.name} className="w-full h-full object-cover" />
              )}
              {destaque.liveCount > 0 && (
                <span className="absolute top-3 left-3 flex items-center gap-1.5 text-xs font-medium bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-full border border-orange-200 dark:border-orange-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  {destaque.liveCount} ao vivo
                </span>
              )}
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h2 className="text-base font-semibold text-gray-900 dark:text-white">{destaque.name}</h2>
                  <div className="flex items-center gap-1.5">
                    {destaque.rating && (
                      <span className="flex items-center gap-1 text-xs bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-700">
                        ★ {destaque.rating}
                      </span>
                    )}
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      destaque.status === "Aberta"
                        ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700"
                        : "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700"
                    }`}>
                      {destaque.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 dark:text-gray-500 mb-3">
                  {destaque.localization} · {destaque.distance}
                </p>
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {destaque.tags?.map((t) => (
                    <span key={t} className="text-xs bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-700 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                {destaque.nextEvent && (
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Próximo evento:{" "}
                    <span className="text-orange-600 dark:text-orange-400 font-medium">{destaque.nextEvent}</span>
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-50 dark:border-slate-700 mt-3">
                <span className="text-xs text-gray-400 dark:text-gray-500">{destaque.info}</span>
                <svg className="w-4 h-4 text-gray-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* GRID 2 COLUNAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {demais.map((quadra) => (
            <div
              key={quadra.id}
              onClick={() => navigate(`/quadra/${quadra.id}`)}
              className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden cursor-pointer hover:border-orange-300 dark:hover:border-orange-600 transition-colors"
            >
              <div className="relative h-36 bg-sky-50 dark:bg-slate-700">
                {quadra.image && (
                  <img src={quadra.image} alt={quadra.name} className="w-full h-full object-cover" />
                )}
                {quadra.liveCount > 0 && (
                  <span className="absolute top-2.5 left-2.5 flex items-center gap-1.5 text-xs font-medium bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full border border-orange-200 dark:border-orange-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                    {quadra.liveCount} ao vivo
                  </span>
                )}
                <span className={`absolute top-2.5 right-2.5 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                  quadra.status === "Aberta"
                    ? "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700"
                    : "bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700"
                }`}>
                  {quadra.status}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h2 className="text-sm font-semibold text-gray-900 dark:text-white">{quadra.name}</h2>
                  {quadra.rating && (
                    <span className="flex items-center gap-1 text-xs bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full border border-amber-200 dark:border-amber-700 shrink-0">
                      ★ {quadra.rating}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-2.5">
                  {quadra.localization} · {quadra.distance}
                </p>
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {quadra.tags?.map((t) => (
                    <span key={t} className="text-xs bg-orange-50 dark:bg-orange-950 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-700 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2.5 border-t border-gray-50 dark:border-slate-700">
                  <span className="text-xs text-gray-400 dark:text-gray-500">{quadra.info}</span>
                  <svg className="w-3.5 h-3.5 text-gray-300 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}