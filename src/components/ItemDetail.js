
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";  
import './itemDetail.css';

function ItemDetail(props) {  
    console.log(props)
    return (
      <body className="body">
        <div className='detail'>  
          <div className='cuadro'>
            <img src={props.props.image} className='image'></img>
          </div>
          <div className='datos'>
              <h3 className='titleDetail'>{props.props.title}</h3>
              <h4 className='precio'>$ {props.props.price}</h4>  
              <p className="texto">{props.props.description}</p>   
              <h6 className='footerDetail'>Stock Disponible: {props.props.count}</h6>
              
          </div>
        </div> 
      </body> 
    );  
  }  

export default ItemDetail;