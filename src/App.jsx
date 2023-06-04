import './App.css';
import ContainerProduct from './components/ContainerProduct/ContainerProduct';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Vista from './components/Vista/Vista';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a Helton!"/>
      
      <ContainerProduct/> 
      <Vista/>
    </div>
  );
}

export default App;
