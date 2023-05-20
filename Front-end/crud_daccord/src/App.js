import Home from './Paginas/Home/Home';
import Cadastro from './Paginas/Cadastro/Cadastro';
import Header from './componentes/Header'; //importar Header
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Licao from './Paginas/Licao/Licao';


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Header/> {/*adicionar Header*/}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/licoes' element={<Cadastro/>}/>
          <Route path='/licao/:id' element={<Licao/>}/>
        </Routes>
      </BrowserRouter>

    </div>

  )

}

export default App;
