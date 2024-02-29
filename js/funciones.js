const productos = [
    { id: 1, nombre: "Whisky Jhonny Walker Black Label 750ml", precio: "$30.000,00", imagen: "../img/Black-label.jpg", categoria: "whisky" },
    { id: 2, nombre: "Fernet branca 750ml", precio: "$8.000,00", imagen: "../img/Fernet-branca.jpg", categoria: "amargo"},
    { id: 3, nombre: "Vino tinto Luigi Bosca Malbec 750ml", precio: "$7.000,00", imagen: "../img/Luigi-bosca.jpg", categoria: "vino"},
    { id: 4, nombre: "Ron Havana Club Añejo Especial Dorado 750ml", precio: "$10.000,00", imagen: "../img/Havana-club.jpg", categoria: "ron"},
    { id: 5, nombre: "Vodka smirnoff 700ml", precio: "$3.400,00", imagen: "../img/Smirnoff.jpg", categoria: "vodka"},
    { id: 6, nombre: "Cerveza Brahama Chopp lata 473ml x6 unidades", precio: "$10.500,00", imagen: "../img/Brahma.jpg", categoria: "cerveza"},
    { id: 7, nombre: "Fernet branca 750ml + 2 cocas 2.25ml", precio: "$11.000,00", imagen: "../img/Fernet con coca.jpg", categoria: "promos"},
    { id: 8, nombre: "Vodka Skyy durazno 750ml", precio: "$6.000,00", imagen: "../img/Vodka-Skyy.jpg", categoria: "vodka"},
    { id: 9, nombre: "Cerveza Heineken Rubia lata 473ml x6 unidades",precio: "$8.550,00", imagen: "../img/heineken.png", categoria: "cerveza"},
    { id: 10, nombre: "Whisky Jhonny Walker Blue Label 750ml",precio: "$250.000,00", imagen: "../img/blue-label.png", categoria: "whisky"},
    { id: 11, nombre: "Gin spirito blue 700ml",precio: "$8.800,00", imagen: "../img/gin-spirito-blue.png", categoria: "gin"},
    { id: 12, nombre: "Cerveza Corona American Adjunct Lager 330mL x6 unidades",precio: "$7.300,00", imagen: "../img/coronax6.jpg", categoria: "cerveza"},
]

//Funciones local storage productos
const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos))
}

const traerProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

//Funciones obtener ID
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

//Funciones obtener categoria
const verCategoria = (id) => {
    localStorage.setItem("categoria", JSON.stringify(id));
} 
const obtenerCategoria = () => {
    return JSON.parse(localStorage.getItem("categoria"))  || "todos";
}

//funciones carrito
const guardarCarrito = (productos) => {
    localStorage.setItem("carrito",JSON.stringify(productos))
}

const traerCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || []; 
}

const agregarProductoAlCarrito = () => {
    const producto = traerProductoLS();
    const carrito = traerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
}

const sumaDelTotal = () => {
    const carrito = traerCarrito();

    //return carrito.reduce((acumulador, item) => acumulador += item.precio, 0)

    let suma = 0 

    for (const item of carrito) {
        suma += item.precio
    }

    return suma; 
}





guardarProductosLS(productos);
