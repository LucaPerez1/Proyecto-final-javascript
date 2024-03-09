const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

const urlDeUbicacion = window.location.href;
const siEsIndex = urlDeUbicacion.includes("index.html");
const verificarUbicacion = siEsIndex ? "html/producto.html" : "producto.html";

const buscar = () => {
    const searchItern = searchInput.value.toLowerCase();
    const filtroProductos = traerProductosLS().filter((producto) => producto.nombre.toLowerCase().startsWith(searchItern));

    let contenido = "";

    for (const producto of filtroProductos) {
        contenido += `<a href="${verificarUbicacion}" onclick="verProducto(${producto.id});">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
        </a>`;
    }

    if (searchInput.value === "") {
        contenido = "";
    }

    resultsList.innerHTML = contenido;
}

searchInput.addEventListener("input", buscar);



