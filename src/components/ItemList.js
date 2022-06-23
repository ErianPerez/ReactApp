import Item from "./Item";
import "./ItemList.css"

function ItemList(props){
    return(
        <div className="items">
            {props.items && props.items.map(i => <Item name={i.name} price={i.price} stock={i.stock}/>)}
        </div>
    );
}

export default ItemList;


