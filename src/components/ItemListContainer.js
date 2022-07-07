import { useEffect, useState, React } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import './Cargando.css'

function ItemListContainer(props){
    const [productosFetch, setProductosFetch] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() =>{    
            const fetchItems = async () =>{
                setIsLoading(true)
                setTimeout(async () => {
                    const response = await fetch('https://fakestoreapi.com/products');
                    const result = await response.json()    
                    console.log(result)
                    setProductosFetch(result)
                    
                    setIsLoading(false)
                }, 2000);
            }
            fetchItems();
        
    }, [])
    
    return(    
        <div >
            <div>
                <h2>Bienvenido {props.name}! Continue con su compra</h2>
                
            </div>
            {isLoading &&<div className='contenedor2'> <h2 className='cargando'>Cargando los Productos...</h2></div>}
            <div className='itemlist' >
                <ItemList items={productosFetch}></ItemList>
            </div>
        </div>
    );
}

export default ItemListContainer;