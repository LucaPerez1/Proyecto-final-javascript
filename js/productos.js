// INICIO REDNERIZAR PRODUCTOS
function renderizarProductos() {
    const productos = traerProductosLS();
    const categoria = obtenerCategoria();
    const productosFiltro = categoria === "todos" ? productos : productos.filter(item => item.categoria === categoria);

    let contenido = "";
    for (const producto of productosFiltro) {
        contenido += `<div class="col-xl-3 col-md-6 col-sm-6 contendorCards">
            <a href="producto.html" onclick="verProducto(${producto.id});" class="cardProductos">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div>
                    <h2>${producto.nombre}</h2>
                    <p>${producto.precio}</p>
                </div>
            </a>
        </div>`;
    }

    document.getElementById("contenedorProductos").innerHTML = contenido;
}
//FIN FUNCION RENDERIZAR PRODUCTOS

function recargarPagina() {
    // Recargar la página
    location.reload();
}

renderizarProductos();

