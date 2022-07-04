import { useState } from "react";
import './ItemCount.css';


function ItemCount({count, initial, price}){
    const[num, setNum] = useState(initial);
    const sumar = () =>{
        if (num<count){
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
                <button className="buttons2" onClick= {sumar}>+</button>
                <button className="buttons2" onClick= {restar}>-</button>
            </div>
            <button className="buttons1" onClick= {Add2Cart}>Agregar al Carrito!</button>
        </div>
    );
}

export default ItemCount;