import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Turmas } from './pages/Turmas';
import { Avaliacoes } from './pages/Avaliacoes';
import { Avaliacao } from './pages/Avaliacao';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turmas" element={<Turmas />} />
        <Route path="/avaliacoes" element={<Avaliacoes />} />
        <Route path="/avaliacao" element={<Avaliacao />} />
        {/* <Route path="/turma/:idTurma" element={} />
        <Route path="/turma/:idTurma/:idProva" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
