import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <ItemListContainer greetings="Soy ItemListContainer"/>
      <ItemDetailContainer greetings="Soy ItemDetailContainer"/>
    </div>
  );
}

export default App;
