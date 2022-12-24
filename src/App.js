import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Carrito from './components/CartWidget';
import Item from './components/Item';
import ImagenLibro from './components/ImagenLibro';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar /> 
      <ItemListContainer />
      

    </div>
  );
}

export default App;