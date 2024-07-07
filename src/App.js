
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';
import Cardsdetails from './componentes/Cardsdetails';
import Cards from './componentes/Cards';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Cards/>}/>
      <Route path='/cart/:id' element={<Cardsdetails/>}/>
    </Routes>
    </>
  )
}

export default App;
