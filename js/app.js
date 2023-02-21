// --------------------------------DOM-------------------------------
const shop = document.getElementById("shop");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const contadorCarrito= document.getElementById("cantidadCarrito");

// --------------------------SECCIÓN PRODUCTOS----------------------
// Variable carrito.
verCarrito.disabled= true;
let carrito = JSON.parse (localStorage.getItem("carrito")) || [];
if(carrito.length === 0){
    verCarrito.disabled= true;
} else{
    verCarrito.disabled=false;
    contador();
}

terrarios.forEach((terrario) => {
    const contenido = document.createElement("div");
    contenido.className = " card"
    contenido.innerHTML = `
    <img class="img-terrarios" src="${terrario.img}">
    <h3>${terrario.nombre}</h3>
    <span class="precio">Precio:$${terrario.precio} </span>
    `,
        shop.append(contenido);

    const comprar = document.createElement("button");
    comprar.innerHTML = `Comprar`;
    comprar.className = "comprar"
    contenido.append(comprar);


    comprar.addEventListener("click", () => {
        const repetido = carrito.some((elementoRepetido) => elementoRepetido.id === terrario.id);
        if (repetido) {
            carrito.map((elemento) => {
                if (elemento.id === terrario.id) {
                    elemento.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: terrario.id,
                img: terrario.img,
                nombre: terrario.nombre,
                precio: terrario.precio,
                cantidad: terrario.cantidad,
            });
        };
        console.log(carrito);
        contador();
        toastCompra();
        verCarrito.disabled= false;
        subirLocal();
    });
});


// ---------------------------------FUNCIÓN LS------------------------------------

const subirLocal= ()=> {
    localStorage.setItem ("carrito", JSON.stringify(carrito));
}

// ---------------------------------TOASTIFY--------------------------------------
function toastCompra() {

    Toastify({
        text: "Agregado al carrito",
        duration: 1500,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "rgb(2,0,36)",
            background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(39,163,20,1) 0%, rgba(2,15,2,1) 100%)",
        },
        onClick: function () { } 
    }).showToast();
}
