import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner/Banner";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App bg-primary">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<><Banner /><ItemListContainer greetings="Todos los productos" /></>}/>
          <Route path="/:categoria" element={<><Banner /><ItemListContainer /></>}/>
          <Route path="/item/:id" element={<ItemDetailContainer greetings="Detalle del producto"/>}/>
          <Route path="/*" element={<Navigate to="/" replace/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
