import Footer from 'components/Footer/footer';
import Menu from 'components/Menu/menu';
import PaginaPadrao from 'components/PaginaPadrao/paginaPadrao';
import Cardapio from 'pages/Cardapio/cardapio';
import Inicio from 'pages/Inicio/inicio';
import Sobre from 'pages/Sobre/sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />  
          </Route>
        </Routes>

        <Footer />
      </Router>
    </main>
  )
}