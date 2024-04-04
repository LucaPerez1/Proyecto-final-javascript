// INICIO REDNERIZAR PRODUCTOS
function renderizarProductos(productosFiltro) {
    let contenido = "";
    for (const producto of productosFiltro) {
        const precioFormateado = formatearPrecioARS(producto.precio);

        contenido += `<div class="col-xl-3 col-md-4 col-sm-6 contendorCards">
            <a href="producto.html" onclick="verProducto(${producto.id});" class="cardProductos">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="contenedorTextoCards">
                    <h2>${producto.nombre}</h2>
                    <p>${precioFormateado}</p>
                </div>
            </a>
        </div>`;
    }

    document.getElementById("contenedorProductos").innerHTML = contenido;
}
//FIN FUNCION RENDERIZAR PRODUCTOS

//
document.getElementById('categorias').addEventListener('change', function () {
    verCategoria(this.value);
});
