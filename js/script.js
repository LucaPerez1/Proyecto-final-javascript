//Array de productos 
const productos = [
    {id:1, nombre:"Whisky Jhonny Walker Black Label", precio:30000},
    {id:2, nombre:"Fernet Branca", precio:8000},
    {id:3, nombre:"Vino tinto Luigi Bosca Malbec", precio:7000},
    {id:4, nombre:"Ron Havana Club dorado", precio:10000},
    {id:5, nombre:"Vodka smirnoff", precio:3400},
    {id:6, nombre:"Cerveza Brhama lata", precio:1200},
    {id:7, nombre:"Cerveza Heineken lata", precio:1300},
    {id:8, nombre:"Vodka Skyy durazno", precio:6000},
    {id:9, nombre:"Cerveza Corona Prron", precio:1500},
    {id:10, nombre:"Federico Alvear extra ducle", precio:9000},
]

function listaProductos() {
    let lista = "";

    productos.forEach(item => {
        lista += item.id + "-" + item.nombre + " - $" + item.precio + "\n";
    });

    return lista;
}

// Carrito
class Carrito {
    constructor() {
        this.productos = [];
        this.descuento = 10;
        this.minimoGastadoParaDescuento = 50000;
    }

    agregarProducto(id) {
        let producto = productos.find(item => item.id === id);

        if (producto) {
            let cantidad = parseInt(prompt("Ingrese la cantidad de " + producto.nombre +" que desea comprar:"));
            if (isNaN(cantidad) || cantidad <= 0) {
                console.log("Cantidad no válida. Producto no agregado al carrito.");
                return;
            }

            producto.cantidad = cantidad;
            this.productos.push(producto);
            alert("¡Agregaste " + producto.cantidad + " unidad(es) de " + producto.nombre + " al carrito!");
        } else {
            alert("¡No se encontró ningún producto con el #" + id + "!");
        }
    }

    listaCarrito() {
        let lista = "";

        this.productos.forEach(item => {
            lista += "-" + item.nombre + "\n" +"$" + item.precio + "/ud"+ "\n" + "Cantidad: " + item.cantidad + "\n";
        });

        return lista;
    }

    calcularTotal() {
        let total = 0;

        this.productos.forEach(item => {
            total += item.precio * item.cantidad;
        });

        return total;
    }

    aplicarDescuento() {
        if (this.calcularTotal() >= this.minimoGastadoParaDescuento) {
            return Math.round((this.calcularTotal() * this.descuento) / 100);
        } else {
            return 0;
        }
    }
}


// Ejecución del programa 
let edad = prompt("¿Cuál es tu edad?");
let ingreso = false;

if (edad >= 18) {
    alert("Bienvenido a Gold elixir\n\n!NUEVA PROMO¡: si tu compra supera los 50.000$ tenes un 10% de descuento.");
    ingreso = true;
} else {
    alert("Ingreso inválido, la venta de alcohol no está permitida a menores de 18 años");
}

if (ingreso) {

    const carrito = new Carrito();
    
    while (true) {
        let opcion = parseInt(prompt("Seleccione el producto que desea agregar al carrito: (0 para salir)\n\nRecorda que si tu compra supera los 50.000 tenes un 10%\n\n" + listaProductos()));
    
        if (opcion == 0) {
            break;
        }
    
        carrito.agregarProducto(opcion);
    }
    
    let productosCarrito = "Detalles de compra: \n\n" + carrito.listaCarrito();
    let subtotal = "Subtotal: $" + carrito.calcularTotal();
    let descuento = "Descuento: -$" + carrito.aplicarDescuento();
    let montoFinal = "Total: $" + Math.round(carrito.calcularTotal() - carrito.aplicarDescuento());
    alert(productosCarrito + "\n" + subtotal + "\n" + descuento + "\n" + montoFinal);
}
