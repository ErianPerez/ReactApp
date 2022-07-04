
import './Item.css';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';


function Item({name, price,count, image, description}){
    return(
        <div className='card'>
            <h4 className='title'>{name}</h4>
            <img src={image} className='imagen'></img>
            <h6>${price}</h6>
            <ItemDetail name = {name} price = {price} description = {description} image = {image} />
            <ItemCount count={count} initial={0} price={price}></ItemCount>
            <h6 className='footer'>Stock Disponible: {count}</h6>
        </div>
    );
}

export default Item;