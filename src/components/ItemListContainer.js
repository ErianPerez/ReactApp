import { useEffect, useState, React } from 'react';
import { useLocation } from 'react-router-dom'
import refreshPage from './RefreshPage'
import './ItemListContainer.css';
import ItemList from './ItemList';
import './Cargando.css'

function ItemListContainer(props) {
    const [productosFetch, setProductosFetch] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    let location = useLocation()
    useEffect(() => {

        if (location.pathname != "/") {
            const fetchItems = async () => {
                setIsLoading(true)
                setTimeout(async () => {
                    const response = await fetch(`https://fakestoreapi.com/products${location.pathname}`);
                    const result = await response.json()
                    setProductosFetch(result)

                    setIsLoading(false)
                }, 2000);
            }
            fetchItems();
        } else {
            const fetchItems = async () => {
                setIsLoading(true)
                setTimeout(async () => {
                    const response = await fetch('https://fakestoreapi.com/products');
                    const result = await response.json()
                    setProductosFetch(result)
                    
                    setIsLoading(false)
                }, 2000);
            }
            fetchItems();
        }
    }, [location])
    
    return (
        <div >
            <div>
                <h2>Bienvenido {props.name}! Continue con su compra</h2>

            </div>
            {isLoading && <div className='divplus'> <div className='contenedor'>  <h2 className='cargando'>Cargando los Productos...</h2> </div> </div>}
            <div className='itemlist' >
                <ItemList items={productosFetch}></ItemList>
            </div>
        </div>
    );
}

export default ItemListContainer;