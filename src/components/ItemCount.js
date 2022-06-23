import { useState } from "react";
import './ItemCount.css';


function ItemCount({stock, initial, price}){
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
            var number = Number(price.replace(/[^0-9.-]+/g,""));
            var result = num * number
            result = Math.round(result * 100) / 100
            console.log('Agregado(s) ' + (num) + ' Item(s) al Carrito! ' + 'Precio Final: $' + (result));
            alert('Agregado(s) ' + (num) + ' Item(s) al Carrito! ' + 'Precio Final: $' + (result));
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