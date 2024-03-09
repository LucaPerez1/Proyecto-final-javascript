function renderCarrito() {
    const carrito = traerCarrito();
    let contenido = "";

    if (totalProductos() > 0) {
        contenido = ` <div class="d-flex justify-content-end">
        <button class="btn-primary justify-content-end" onclick="notificacionEliminarCarrito()">Eliminar carrito</button>
    </div>`;

        for (const producto of carrito) {
            contenido += `<div class="contenedorCarrito">
        <div class="col-xl-1 col-md-1 col-sm-1"><img src="${producto.imagen}" alt="${producto.nombre}"></div>
        <div class="col-xl-5 col-md-5 col-sm-3">
            <h2>${producto.nombre}</h2>
        </div>
        <div class="col-xl-5 col-md-5 col-sm-3">
            <h3>$${producto.precio}</h3>
        </div>
        <div class="col-xl-1 col-md-1 col-sm-1">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" fill="currentColor"
                class="bi bi-trash-fill" onclick="eliminarProducto(${producto.id})" viewBox="0 0 16 16">
                <path
                    d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
            </svg>
        </div>
    </div>`;
        }

        contenido += `<div class="total">
    <p>Total a pagar:</p>
    <p>$${sumaDelTotal()}</p>
    <button class="d-flex btn-primary" onclick="finalizarCompra()">Finalizar compra</button>
</div>`

    } else {
        contenido = `<div class="carritoVacio">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
            <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
            </svg>

            <h2>No hay ningun producto en el carrito</h2>

            <a class=" btn-primary" href="productos.html">Ir a comprar</a>
            
        </div>`
    }

    document.getElementById("carrito").innerHTML = contenido;
}

renderCarrito();