import { useState } from "react";
import './ItemCount.css';
import ItemListContainer from "./ItemListContainer";


function ItemCount({stock, initial}){
    const[num, setNum] = useState(initial);
    const sumar = () =>{
        if (num<stock){
            setNum(num + 1)
        }
    }
    const restar = () =>{
        if (num>0){
            setNum(num - 1)
        }
    }
    const Add2Cart = () => {
        if (num>0){
            console.log('Agregado(s) ' + (num) + ' Item(s) al Carrito!');
            alert('Agregado(s) ' + (num) + ' Item(s) al Carrito!');
            setNum(0);
        }
    }
    return(
        <div><p>Cantidad: {num}</p>
            <div className="botones">
                <button onClick= {sumar}>+</button>
                <button onClick= {restar}>-</button>
            </div>
            <button onClick= {Add2Cart}>Agregar al Carrito!</button>
        </div>
    );
}

export default ItemCount;