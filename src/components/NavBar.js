    import './NavBar.css';
    import CartWidget from './CartWidget';
    import { NavLink } from 'react-router-dom';
    import Body from './Body';
    function NavBar(){
        return(
            <header className='navbar nav-link navbar-custom fixed-top align-items-sm-stretch'>
                <img src={require('../assets/logo.png')} alt='logo' className='img-thumbnail img-fluid'></img>
                <button className='btn-primary rounded-pill navbar'><NavLink className='texto' to={'/'}>Home</NavLink></button>
                <button className='btn-primary rounded-pill navbar'><NavLink className='texto' to={`/category/men's clothing`}>Ropa Masculina</NavLink></button>
                <button className='btn-primary rounded-pill navbar'><NavLink className='texto' to={`/category/women's clothing`}>Ropa Femenina</NavLink></button>
                <button className='btn-primary rounded-pill navbar'><NavLink className='texto' to={`/category/jewelery`}>Joyeria</NavLink></button>
                <button className='btn-primary rounded-pill navbar'><NavLink className='texto' to={`/category/electronics`}>Electronica</NavLink></button>
                <NavLink to={'/cart'}><CartWidget/></NavLink>
            </header>

        );
    }

    export default NavBar;


