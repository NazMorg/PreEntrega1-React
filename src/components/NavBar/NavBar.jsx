import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <div className='contenedorNavBar'>
            <h1 className='titulo'>The Khajit's Corner</h1>
            <nav className='navBar'>
                <CartWidget />
            </nav>
        </div>
    );
}

export default NavBar;