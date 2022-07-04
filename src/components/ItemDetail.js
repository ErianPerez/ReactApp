
import Swal from "sweetalert2";  
  
function ItemDetail(props) {  
    const viewDetail = () => {
        Swal.fire({
            title: props.name,
            text: props.description,
            imageUrl: props.image,
            imageWidth: 600,
            imageHeight: 500,
            imageAlt: 'Custom image',
            footer: '$' + props.price,
          })
    }
    return (    
        <div>  
          <button onClick={viewDetail}>Ver Detalle del Producto</button>    
        </div>  
    );  
  }  

export default ItemDetail;