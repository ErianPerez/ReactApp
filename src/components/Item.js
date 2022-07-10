
import { NavLink } from 'react-router-dom';
import './Item.css';
import ItemCount from './ItemCount';


function Item({id, name, price,count, image}){
    return(
        <div className='card'>
            <h4 className='title'>{name}</h4>
            <img src={image} className='imagen'></img>
            <h6>${price}</h6>
            <button className='button'><NavLink to={`/item/${id}`}>Ver Detalle</NavLink></button>
            <ItemCount count={count} initial={0} price={price}></ItemCount>
            <h6 className='footer'>Stock Disponible: {count}</h6>
        </div>
    );
}

export default Item;