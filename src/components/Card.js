
import './Card.css';

function Card({name, price}){
    return(
        <div className='card'>
            <h4>{name}</h4>
            <p>{price}</p>
        </div>

    );
}

export default Card;
