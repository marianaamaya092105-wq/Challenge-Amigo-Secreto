// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Arreglo para almacenar los amigos

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value; // Capturar el valor del campo de entrada

    if (nombre === "") { // Validar que no esté vacío
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) { // Validar que no se repita
        alert("Nombre no válido: ya existe.");
        return;
    }

    amigos.push(nombre); // Agregar al arreglo
    document.getElementById("amigo").value = ""; // Limpiar el campo de entrada

    actualizarLista(); // Actualizar la lista en pantalla
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista
    lista.innerHTML = ""; // Limpiar la lista existente

    for (let i = 0; i < amigos.length; i++) { // Recorrer el arreglo
        lista.innerHTML += "<li>" + amigos[i] + "</li>"; // Agregar cada nombre como <li>
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya amigos disponibles
        alert("No hay amigos para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length); // Índice aleatorio
    let amigoSorteado = amigos[indice]; // Nombre sorteado

    document.getElementById("resultado").innerHTML = "Amigo secreto: " + amigoSorteado; // Mostrar el resultado
}
