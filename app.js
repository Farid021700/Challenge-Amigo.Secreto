// Lista de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigos() {
    const input = document.getElementById("amigo");
    const nombreAmigoSecreto = input.value.trim();

    if (nombreAmigoSecreto === "") {
        alert("Por favor, ingresa un nombre válido.");
        input.value = "";
        return;
    }

    // Validar si el nombre ya está en la lista (sin importar mayúsculas/minúsculas)
    if (amigos.some(amigo => amigo.toLowerCase() === nombreAmigoSecreto.toLowerCase())) {
        alert("Ese nombre ya fue agregado.");
        input.value = "";
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigoSecreto);

    // Mostrarlo en la lista directamente
    const lista = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombreAmigoSecreto;
    lista.appendChild(li);

    // Vaciar y enfocar el input para escribir otro
    input.value = "";
    input.focus();
}

// Función para sortear un amigo
function sortearAmigos() {
    if (amigos.length === 0) {
        alert("No ningun amigo en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
