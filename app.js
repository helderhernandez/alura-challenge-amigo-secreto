let amigos = [];

function agregarAmigo(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo ===""){
        alert ("Ingrese el nombre del amigo");
        return;
    }

    amigos.push(nombreAmigo);
    actualizarLista();
    
    inputAmigo.value = ""; // limpiando input
    inputAmigo.focus(); // poniendo el cursor en el input
}

function actualizarLista(){
    const ulListaAmigos = document.getElementById("listaAmigos")
    ulListaAmigos.innerHTML ="";

    amigos.forEach(amigo => {
        const li =document.createElement("li");
        li.textContent= amigo;
        ulListaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay ningun amigo para sortear, agrega un nombre");
        return
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultadoUL = document.getElementById("resultado");
    resultadoUL.innerHTML = `<li>${amigoSorteado}</li>`;
}