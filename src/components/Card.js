
import './Card.css';
import ItemCount from './ItemCount';


function Card({name, price}){
    return(
        <div className='card'>
            <h4>{name}</h4>
            <p>{price}</p>
            <ItemCount stock={5} initial={1}></ItemCount>
        </div>
    );
}

export default Card;
