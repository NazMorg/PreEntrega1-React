import './itemContainer.css';

function ItemListContainer({greeting}) {
    const mensajeBienvenida = greeting;

    return (
        <div className="itemListContainer">
            <p>{mensajeBienvenida}</p>
        </div>
    );
}

export default ItemListContainer;