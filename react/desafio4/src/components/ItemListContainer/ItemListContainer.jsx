import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greetings}) => {

  function onAdd(count){
    console.log(`Se agregó un elemento. Elementos actuales: ${count}`)
  }

  return (
    <div className="itemListContainer">
        <h2>{greetings}</h2>
        <ItemCount name="Ibuprofeno" stock={5} initial={1} onAdd={onAdd}/>

        <ItemCount name="Paracetamol" stock={12} initial={1} onAdd={onAdd}/>

        <ItemCount name="Actron" stock={3} initial={1} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer