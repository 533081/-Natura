function NavBar() {
   


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="./index.html">Mi Tienda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/products.html">Productos</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Nosotros
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="./pages/weAre.html">Quiénes somos</a></li>
                                <li><a className="dropdown-item" href="./pages/login.html">Usuarios</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./pages/contactUs.html">Contáctanos</a>
                        </li>
                        <li className="nav-item">
                           
                            <a className="nav-link" href="./pages/shoppingCart.html"><i className="bi bi-cart3"></i> Carrito</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
    
        

