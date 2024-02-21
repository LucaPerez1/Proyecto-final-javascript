const productos = [
    { id: 1, nombre: "Whisky Jhonny Walker Black Label 750ml", precio: "$30.000,00", imagen: "../img/Black-label.jpg" },
    { id: 2, nombre: "Fernet branca 750ml", precio: "$8.000,00", imagen: "../img/Fernet-branca.jpg" },
    { id: 3, nombre: "Vino tinto Luigi Bosca Malbec 750ml", precio: "$7.000,00", imagen: "../img/Luigi-bosca.jpg" },
    { id: 4, nombre: "Ron Havana Club Añejo Especial Dorado 750ml", precio: "$10.000,00", imagen: "../img/Havana-club.jpg" },
    { id: 5, nombre: "Vodka smirnoff 700ml", precio: "$3.400,00", imagen: "../img/Smirnoff.jpg" },
    { id: 6, nombre: "Cerveza Brahama Chopp lata 473ml x6 unidades", precio: "$10.500,00", imagen: "../img/Brahma.jpg" },
    { id: 7, nombre: "Fernet branca 750ml + 2 cocas 2.25ml", precio: "$11.000,00", imagen: "../img/Fernet con coca.jpg" },
    { id: 8, nombre: "Vodka Skyy durazno 750ml", precio: "$6.000,00", imagen: "../img/Vodka-Skyy.jpg" },
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

guardarProductosLS(productos);
