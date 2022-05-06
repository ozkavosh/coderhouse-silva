import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greetings="Productos"/>
    </div>
  );
}

export default App;
