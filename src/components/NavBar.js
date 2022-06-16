    import './NavBar.css';
    import CartWidget from './CartWidget';

    function NavBar(){
        return(
            <header className='navbar nav-link navbar-custom fixed-top align-items-sm-stretch'>
                <img src={require('../assets/logo.png')} alt='logo' className='img-thumbnail img-fluid'></img>
                <button className='btn-primary rounded-pill navbar'>Home</button>
                <button className='btn-primary rounded-pill navbar'>Nosotros</button>
                <CartWidget/>
            </header>

        );
    }

    export default NavBar;


