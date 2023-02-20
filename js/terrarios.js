// Acá se encuentra la clase constructora y el array de productos disponibles.
class ClaseTerrarios {
    constructor(id, nombre, precio, cantidad, img) {
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad= cantidad,
        this.img= img;
    }
    sumaIva() {
        return this.precio = this.precio * 1.21;
    };
};

const terrarios= [
    new ClaseTerrarios(1, "Berlín",3000, 1, "https://micromundofede22.github.io/PF-Folmer/imagenes/terrarios/berlin.jpg"),
    new ClaseTerrarios(2, "Ámsterdam",5600, 1,"https://micromundofede22.github.io/PF-Folmer/imagenes/terrarios/amsterdam.jpg"),
    new ClaseTerrarios(3, "Londres",6000, 1,"https://micromundofede22.github.io/PF-Folmer/imagenes/terrarios/londres.jpg"),
    new ClaseTerrarios(4, "Beijing",9000, 1,"https://micromundofede22.github.io/PF-Folmer/imagenes/terrarios/cerrado.jpg"),
];