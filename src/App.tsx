import './App.css'
import cardName from './components/ui/cardName'

function App() {
  return (
    <div className="App bg-purple-800 h-screen flex flex-col items-center justify-center gap-4">
      <h1>Bem vindo ao Sport Beach</h1>
      <p>Aplicativo focado para atividades esportivas na areia.</p>
      {cardName("Fabio Nogueira", "Futvolei", 5.5, 36)}
      {cardName("Maria Silva", "Beach Tennis", 4.8, 24)}
      {cardName("Carlos Oliveira", "Volei de Praia", 4.2, 18)}
    </div>
  )
}

export default App
