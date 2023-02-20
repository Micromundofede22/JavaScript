const listaChuk = document.getElementById("listaChuk")
fetch("https://api.sampleapis.com/simpsons/episodes")
    .then((response) => response.json())
    .then((data) => {
        let arrayVacio = []
        arrayVacio = data
        arrayVacio.forEach(element => {
            const li = document.createElement("div")
            li.className = "col-3 align-items-center"
            li.innerHTML = `
            <div class="h-100">
            <div class="card m-2 text-bg-warning ">
            <div class="card-body ">
        <span class="fw-bold">Temporada:${element.season}</span><br>
        <span><strong>Episodio:</strong>${element.episode}</span><br>
        <span><strong>Nombre cap:</strong>${element.name}</span>
        <span><strong>Descripción:</strong>${element.description}</span><br>
        <span><strong>Rating:</strong>${element.rating}</span><br>
        <span><strong>Fecha de transmición:</strong> ${element.airDate}</span> <br>
        <img src="${element.thumbnailUrl}">
        </div>
        </div>
    </div>
    `
            listaChuk.append(li)
        });
    })