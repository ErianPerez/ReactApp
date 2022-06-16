import './ItemListContainer.css';
import Card from './Card';

function ItemListContainer(){
    return(
        //API PARA GENERAR PRODUCTOS
                // const options = {
        // 	method: 'GET',
        // 	headers: {
        // 		'X-RapidAPI-Key': 'c38723e74amsh714151ba9298579p1b5697jsn9c89be49c47d',
        // 		'X-RapidAPI-Host': 'goodfoods-search-grocery-product-reviews-by-barcode-v1.p.rapidapi.com'
        // 	}
        // };

        // fetch('https://goodfoods-search-grocery-product-reviews-by-barcode-v1.p.rapidapi.com/search?barcode=823734014026', options)
        // 	.then(response => response.json())
        // 	.then(response => console.log(response))
        // 	.catch(err => console.error(err));
        <div className='itemlist'>
            <div>
                <Card name="Vinos" price="500"/>
                <Card name="Cervezas" price="250"/>
                <Card name="Aperitivos" price="50"/>
                <Card name="Caramelos" price="10"/>
            </div>
            <div>
                <Card name="Carnes" price="1200"/>
                <Card name="Aceites" price="250"/>
                <Card name="Gaseosas" price="200"/>
                <Card name="Aguas Sabor." price="150"/>
            </div>
            <div>
                <Card name="Productos de Baño" price="120"/>
                <Card name="Remedios" price="700"/>
                <Card name="Galletas" price="80"/>
                <Card name="Limpieza" price="300"/>
            </div>
        </div>
    );
}

export default ItemListContainer;