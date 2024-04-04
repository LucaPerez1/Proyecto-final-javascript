//FUNCIONES LS PRODUCTOS 
const guardarProductosLS = () => {
    fetch('../js/catalogo.json')
        .then(response => response.json())
        .then(data => {

            localStorage.setItem('productos', JSON.stringify(data));

        })
}

const traerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

function formatearPrecioARS(precio) {
    return precio.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS'
    });
}
//FUNCIONES PARA OBTENER LA ID
const obtenerIdProductos = () => {
    return JSON.parse(localStorage.getItem("producto")) || 0;
}

const verProducto = (id) => {
    localStorage.setItem("producto", JSON.stringify(id));
}

const traerProductoLS = () => {
    const productos = traerProductosLS();
    const id = obtenerIdProductos();
    const producto = productos.find(item => item.id === id);

    return producto;
}

//FUNCIONES PARA OBTENER CATEGORIA
const verCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));

    filtroCategoria();
}

const obtenerCategoria = () => {
    return JSON.parse(localStorage.getItem("categoria")) || 'todos';
}

window.onload = function () {
    filtroCategoria();
}

const tituloProductos = (categoria) => {
    let titulo;
    if (categoria.toLowerCase() === "todos") {
        titulo = "Productos";
    } else {
        titulo = categoria;
    }
    document.getElementById("tituloProductos").innerHTML = titulo;
}

const filtroCategoria = () => {
    const productos = traerProductosLS();
    const categoria = obtenerCategoria();
    const productosFiltro = categoria.toLowerCase() === 'todos' ? productos : productos.filter(item => item.categoria === categoria);

    renderizarProductos(productosFiltro);
    tituloProductos(categoria);
}

//FUNNCIONES CARRITO
const guardarCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos))
}

const traerCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const totalProductos = () => {
    const carrito = traerCarrito();

    return carrito.length;
}

const botonCarrito = () => {
    document.getElementById("botonCantidad").innerHTML = totalProductos();
}

const agregarProductoAlCarrito = () => {
    const producto = traerProductoLS();
    const carrito = traerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    botonCarrito();
    renderCostoTotal();
    notificacionProductoAgregado(producto);
}

const sumaDelTotal = () => {
    const carrito = traerCarrito();

    const total =carrito.reduce((acumulador, item) => acumulador += item.precio, 0)

    return formatearPrecioARS(total)
}

const renderCostoTotal = () => {
    document.getElementById("costoTotal").innerHTML = sumaDelTotal();
}

const eliminarCarrito = () => {
    localStorage.removeItem("carrito")
    renderCarrito();
    botonCarrito();
    renderCostoTotal();
}

const eliminarProducto = (id) => {
    const carrito = traerCarrito();
    const idProducto = carrito.findIndex(item => item.id === id);

    if (idProducto !== -1) {

        carrito.splice(idProducto, 1);

        guardarCarrito(carrito);
    }

    renderCarrito();
    botonCarrito();
    renderCostoTotal();
}

const notificacionEliminarCarrito = () => {
    Swal.fire({
        title: "¿Seguro que quieres eliminarlo?",
        text: "¡Eliminaras todos los productos del carrito!",
        icon: "warning",
        iconColor: "#ffd000",
        background: "#242424",
        color: "#ffffff",
        showCancelButton: true,
        confirmButtonColor: "#ffa500",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Eliminado",
                background: "#242424",
                color: "#ffffff",
                text: "Todos los productos del carrito fueron eliminados",
                icon: "success",
                iconColor: "#ffd000",
                confirmButtonColor: "#ffa500",
            }).then(() => {
                eliminarCarrito();
            });
        }
    });
}

const notificacionProductoAgregado = (producto) => {

    Toastify({
        text: `Se agrego "${producto.nombre}" al carrito`,
        duration: 2000,
        avatar: `${producto.imagen}`,
        className: "notificaionAgregado",
        backgroundColor: "#ffd000",
        offset: {
            x: 0,
            y: 110,
        },

    }).showToast();

}

const finalizarCompra = () => {
    Swal.fire({
        title: "!Gracias por su Compra!",
        text: "El total a pagar es $" + sumaDelTotal(),
        background: "#242424",
        color: "#ffffff",
        imageUrl: "../img/Logo 2-04.png",
        imageWidth: 140,
        imageAlt: "Logo",
        showCancelButton: true,
        confirmButtonColor: "#ffa500",
        cancelButtonColor: "#d33",
        confirmButtonText: "Finalizar compra",
        cancelButtonText: "cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            eliminarCarrito();
        }
    });
}

guardarProductosLS();
botonCarrito();
renderCostoTotal();