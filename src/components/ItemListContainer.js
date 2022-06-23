import { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer(props){

    const [info, setInfo] = useState([])

    useEffect(() =>{
        fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data))
    }, [])

    return(    
        <div >
            <div>
                <h2>Bienvenido {props.name}! Continue con su compra</h2>
            </div>
            <div className='itemlist' >
                <ItemList items={info}></ItemList>
            </div>
        </div>
    );
}

export default ItemListContainer;