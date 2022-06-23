
import './Item.css';
import ItemCount from './ItemCount';


function Item({name, price,stock}){
    return(
        <div className='card'>
            <h4 className='title'>{name}</h4>
            <p>{price}</p>
            <button className='button'>Ver Detalle del Producto</button>
            <ItemCount stock={stock} initial={0} price={price}></ItemCount>
            <h6 className='footer'>Stock Disponible: {stock}</h6>
        </div>
    );
}

export default Item;