import './CartWidget.css';


function CartWidget(){
    const imageClick = () => {
        console.log('Click');
    } 
    return (
        <div>
            <img className='img-thumbnail2' src={require('../assets/cart.png')} onClick={() => imageClick()} />
        </div>
    );
    }


export default CartWidget;