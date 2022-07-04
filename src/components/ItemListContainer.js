import { useEffect, useState, React } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';


function ItemListContainer(props){
    const [productosFetch, setProductosFetch] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() =>{
        setIsLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(res => setProductosFetch(res))
            .catch(err => console.log(err))
            setIsLoading(false)
    }, [])
    
    return(    
        <div >
            <div>
                <h2>Bienvenido {props.name}! Continue con su compra</h2>
                
            </div>
            <div>{isLoading && <h2>Cargando...</h2>}</div>
            <div className='itemlist' >
                <ItemList items={productosFetch}></ItemList>
            </div>
        </div>
    );
}

export default ItemListContainer;