// Todo el carrito se encuentra englobado dentro de una función general

const funcioncarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-titulo">Carrito de compras</h1>
    `
    modalContainer.append(modalHeader);
    // modal header- button
    const modalButton = document.createElement("h1");
    modalButton.innerHTML = `❌`;
    modalButton.className = "modal-header-button";
    modalHeader.append(modalButton);
    // button- cerrar
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    // modal-content
    carrito.forEach((terrario) => {
        const modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        modalContent.innerHTML = `
    <img src="${terrario.img}">
    <h3>${terrario.nombre}</h3>
    <span>Precio: $ ${terrario.precio}</span>
    <span class="restar">-</span>
    <p>Cantidad: ${terrario.cantidad}</p>
    <span class="sumar">+</span>
    <p>Total:$ ${terrario.cantidad * terrario.precio} </p>
    <span class="eliminar-producto">❌</span>
    `;
        modalContainer.append(modalContent);

        // Botones restar y sumar 
        const restar = modalContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            terrario.cantidad !== 1 && terrario.cantidad--
            subirLocal();
            contador();
            toastEliminar()
            funcioncarrito();
        });

        const sumar = modalContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            terrario.cantidad++
            subirLocal();
            contador();
            funcioncarrito();
        });

        // modal-content eliminar producto

        const eliminar = modalContent.querySelector(".eliminar-producto");
        eliminar.addEventListener("click", () => {
            eliminarProducto(terrario.id);
            toastEliminar()
        });
    });

    // modal footer

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const footerTotal = document.createElement("div");
    footerTotal.className = "total-content";
    footerTotal.innerHTML = `Total: $ ${total}`;
    modalContainer.append(footerTotal)

    const botonPagar = document.createElement("button");
    botonPagar.className = "btn-pagar";
    botonPagar.innerHTML = `
    <span><strong>Pagar</strong></span>
    `
    modalContainer.append(botonPagar)
    botonPagar.addEventListener("click", () => window.location = "pago.html")
};

// invoco la función del carrito al hacerle click (Evento)
verCarrito.addEventListener("click", funcioncarrito)

// Función elimina producto

const eliminarProducto = (id) => {
    const eliminarId = carrito.find((el) => el.id === id);
    carrito = carrito.filter((el) => {
        return el !== eliminarId;
    });
    // funcion del contador, así vuelve a leer el length y actualiza el numero al eliminar
    contador();
    // Subo a LS lo que se elimina en el carrito 
    subirLocal();
    // vuelvo a llamar a la funcion del carrito para que me muestre nuevamente actualizado 
    funcioncarrito();
}

// Función contador en carrito
// La llamo en el boton compra, cuando se pushea el terrario al carrito
const contador = () => {
    let carritoLength= carrito.reduce((acc,el)=>acc + el.cantidad, 0);
    if (carritoLength === 0) {
        verCarrito.disabled = true;
    }
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
    contadorCarrito.innerHTML = JSON.parse(localStorage.getItem("carritoLength"));
    contadorCarrito.style.display = "block";
}
// ------------------------------------TOASTIFY-----------------------------------------
function toastEliminar() {

    Toastify({
        text: "Producto eliminado del carrito",
        duration: 1500,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "rgb(0,0,0)",
            background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(179,0,0,1) 0%, rgba(96,5,5,1) 99%)",
        },
        onClick: function () { }
    }).showToast();
}