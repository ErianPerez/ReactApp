
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState, React } from 'react';
import './itemDetail.css';
import './ItemCount'
import ItemCount from "./ItemCount";

function ItemDetail(items) {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setTimeout(setIsLoading(true), 5000);
  }, [])
  return (
    <div className="body">
      <div className='detail'>
        <div className='cuadro'>
          <img src={items.props.image} className='image'></img>
        </div>
        <div className='datos'>
          <h3 className='titleDetail'>{items.props.title}</h3>
          <h4 className='precio'>$ {items.props.price}</h4>
          <p className="texto">{items.props.description}</p>
          {isLoading &&
              <div>             
                <ItemCount count={items.props.rating.count} initial={0} price={items.props.price}></ItemCount>
              </div>               
          }
          {isLoading &&
            <h6 className='footerDetail'>Stock Disponible: {items.props.rating.count}</h6>
          }
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;