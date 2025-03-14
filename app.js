// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let inputAmigo = document.getElementById("amigo");

function agregarAmigo() {
    let amigo = inputAmigo.value;
    if (amigo === "") {
        alert("Por favor ingrese un amigo");
    } else {
        amigos.push(amigo);
        inputAmigo.value = "";
        recorrerArrayAmigo();

    }

}
function recorrerArrayAmigo() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        li.classList.add("estilo-amigo"); 

        listaAmigos.appendChild(li); 
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor ingrese al menos un amigo");
    } else {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li>${amigoSecreto}</li>`
    }

}
