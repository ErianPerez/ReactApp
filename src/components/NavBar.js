    import './NavBar.css';

    function NavBar(){
        return(
            <header className='navbar nav-link navbar-custom fixed-top align-items-sm-stretch'>
                <button className='btn-primary rounded-pill '>Home</button>
                <button className='btn-primary rounded-pill'>Nosotros</button>
                <button className='btn-primary rounded-pill' src="#">Carrito</button>
            </header>

        );
    }

    export default NavBar;


