import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Lobby } from "./pages/Lobby";
import { Quadra } from "./pages/Quadra";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/quadra/:id" element={<Quadra />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);