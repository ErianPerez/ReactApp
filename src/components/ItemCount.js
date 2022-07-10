import { useState } from "react";
import './ItemCount.css';
import { NavLink } from 'react-router-dom';
function ItemCount({count, initial, price}){
    const[num, setNum] = useState(initial);
    let[agregado, setAgregado] = useState(true);
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
            var result = num * price
            result = Math.round(result * 100) / 100
            console.log('Agregado(s) ' + (num) + ' Item(s) al Carrito! ' + 'Precio Final: $' + (result));
            alert('Agregado(s) ' + (num) + ' Item(s) al Carrito! ' + 'Precio Final: $' + (result));
            setNum(0);
            setAgregado(false);
        }
    }
    return(
        <div>
            {agregado &&
                <div>
                    <p className="cantidad">Cantidad: {num}</p>
                    <div className="botones">
                        <button className="buttons2" onClick= {sumar}>+</button>
                        <button className="buttons2" onClick= {restar}>-</button>
                    </div>
                    <button className="buttons1" onClick= {Add2Cart}>Agregar al Carrito!</button>
                </div>
            }
            {!agregado && <NavLink to={'/cart'}><button>Finalizar la compra</button></NavLink>}
            
        </div>
    );
}

export default ItemCount;