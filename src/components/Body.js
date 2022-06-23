
import './Body.css';
import ItemListContainer from './ItemListContainer';

function Body(){
    return(
        <section className='cuerpo'>
            <h2>Catalogo de Productos</h2>
            <p>Elegi lo que vas a llevar!:</p>
            <ItemListContainer name='Coder'/>
        </section>

    );
}

export default Body;