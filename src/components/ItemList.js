
import { useState } from "react";
import Item from "./Item";
import "./ItemList.css"

function ItemList(props){

    return(
        
    <div className="items justify-content-evenly"> 
        {props.items && props.items.map(i => <Item key={i.id} name={i.name} price={i.price} stock={i.stock}/>)} 
    </div>
    )
}

export default ItemList;


