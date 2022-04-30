import './ItemListContainer.css'

const ItemListContainer = ({greetings}) => {
  return (
    <div className="itemListContainer">
        <h2>{greetings}</h2>
    </div>
  )
}

export default ItemListContainer