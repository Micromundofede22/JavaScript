// ----------------------------------DOM-------------------------------------
const selectCuotas = document.getElementById("selectCuotas");
const selectEnvios = document.getElementById("selectEnvios");
const btnCalcularTotal = document.getElementById("calcularTotal");
const btnVolver = document.getElementById("volver");
const btnConfirma = document.getElementById("confirma");
const btnApi=document.getElementById("api");
const contenedorCarrito = document.getElementById("section");
const direccionEnvio = document.getElementById("direccion").value;

// ----------------------------LOCAL STORAGE-------------------------------------

let carritoLocal = JSON.parse(localStorage.getItem("carrito"));

// ---------------------------------FORMAS DE PAGO-------------------------

btnCalcularTotal.addEventListener("click", () => {
    let sumatotal = 0;
    for (const carro of carritoLocal) {
        sumatotal = sumatotal + carro.precio * carro.cantidad
    }

    const cuotas = selectCuotas.value;
    const envios = selectEnvios.value;
    let descuento1cuota = 0

    if ((cuotas === "1") && (envios === "si")) {
        descuento1cuota = sumatotal - 500
        unaCuotaEnvio = descuento1cuota + 500
        document.getElementById("total").value = ("$" + unaCuotaEnvio)

    } else if ((cuotas === "1") && (envios === "no")) {
        descuento1cuota = sumatotal - 500
        document.getElementById("total").value = ("$" + descuento1cuota)
    } else if ((cuotas === "3") && (envios === "si")) {
        incremento3cuotas = sumatotal * 1.20
        tresCuotasEnvio = incremento3cuotas + 500
        document.getElementById("total").value = ("$" + tresCuotasEnvio)
    } else {
        incremento3cuotas = sumatotal * 1.20
        document.getElementById("total").value = ("$" + incremento3cuotas)
    }
});

// -----------------------------VOLVER A PRODUCTOS-------------------------
btnVolver.addEventListener("click", () => window.location = "index.html");

// -------------------------Confirmación--------------------------------

btnConfirma.addEventListener("click", () => swal(`¡Compra confirmada!`, `Lo que des, que te vuelva multiplicado`, `success`))


// ---------------------------BOTÓN API-------------------------------------------
btnApi.addEventListener("click", ()=> window.location="apiSimpsons.html")


// -------------------------------LOCAL STORAGE---------------------------------
const subirLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carritoLocal))
}

// --------------------------TOASTIFY-----------------------------------
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