//INICIO FUNCION RENDERIZAR PRODUCTO (PAGINA ESPECIFICA DEL PRODUCTO)
function renderizarProducto() {
    const producto = traerProductoLS();
    const precioFormateado = formatearPrecioARS(producto.precio);
    let contenido = `<div class="col-xl-5 col-md-6 col-sm-10 contenedorImagen">
    <img src="${producto.imagen}" alt="${producto.nombre}" >
</div>

<div class="col-xl-6 col-md-6 col-sm-10 informacionProducto">
    <h2>${producto.nombre}</h2>
    <h3>${precioFormateado}</h3>
    <div class="descuento">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-cash" viewBox="0 0 16 16">
            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
            <path
                d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
        </svg>
        <h4><strong>15% de descuento</strong> pagando en con efectivo o transferencia</h4>
    </div>
    <a href="#">Ver medios de pago</a>
    <input class="btn-primary my-3" onclick="agregarProductoAlCarrito()"  type="submit" value="Agregar al carrito">
    <div>
        <div class="iconoEnvio"">
            <svg xmlns=" http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
            class="bi bi-truck" viewBox="0 0 16 16">
            <path
                d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
            <h4> Medios de envío</h4>
        </div>
        <div class="col-xl-6 col-md-8 col-sm-12 envio">
            <input type="text" class="col-xl-6" placeholder="Tu codigo postal">
            <button class="btnEnvio col-xl-6">Calcular</button>
        </div>
        <a href="https://www.correoargentino.com.ar/formularios/cpa" target="_blank">No sé mi código postal</a>
    </div>
    <div class="locales">
        <div class="d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                class="bi bi-shop" viewBox="0 0 16 16">
                <path
                    d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5M4 15h3v-5H4zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 0h-2v3h2z" />
            </svg>
            <h4>Nuestro local</h4>
        </div>
        <p>Golden elixir, Lanus Oeste, Buenos Aires - Atención de Lunes a Viernes de  9.30 a  18.00 hs Sábados 9.30 a 13.00 hs</p>
    </div>
</div>`

    document.getElementById ("producto").innerHTML = contenido 
}
//FIN FUNCION RENDERIZAR PRODUCTO (PAGINA ESPECIFICA DEL PRODUCTO)

renderizarProducto();