
function mostrarNombre(){
    let $title = document.querySelector(".title")
    if (!$title) return console.error("Error: No se encontro el elemento")
    $title.innerHTML = `Hola, soy hugo`
}

window.document.addEventListener("DOMContentLoaded", () => mostrarNombre())