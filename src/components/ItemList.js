
import { useState } from "react";
import Item from "./Item";
import "./ItemList.css"

function ItemList(props){

    return(
        <div className="items justify-content-evenly "> 
            {props.items && props.items.map(i => <Item key={i.id} id={i.id} name={i.title} price={i.price} image={i.image} count={i.rating.count} description={i.description}/>)} 
        </div>
    )
}

export default ItemList;


