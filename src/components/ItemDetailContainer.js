import { useEffect, useState, React } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import './Cargando.css'
import './ItemDetailContainer.css'

function ItemDetailContainer(props) {
    const { id } = useParams()
    const [item, setItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const getItem = () => {
        setIsLoading(true)
        setTimeout(async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            const result = await response.json()  
            setItem(result)
            setIsLoading(false)
        }, 2000);
    }
    useEffect(() => {
        getItem();
    }, [])

    return (
            <div className='div' >
                <div >
                {isLoading && <div className='divplus'> <div className='contenedor'>  <h2 className='cargando'>Cargando el Producto...</h2> </div> </div>}
                {!isLoading && <ItemDetail props={item}></ItemDetail>}
                </div>
            </div>
    );
}

export default ItemDetailContainer;