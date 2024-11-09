function NavBar() {
   


    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Tu Marca</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Colección</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onclick="toggleCart()">Carrito <span id="cart-count" class="badge badge-light">0</span></a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar;
    
        

