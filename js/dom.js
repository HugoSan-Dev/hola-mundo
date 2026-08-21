
function mostrarNombre(){
    let $title = document.querySelector(".title")
    $title.innerHTML = `Hola, soy hugo`
}

window.document.addEventListener("DOMContentLoaded", () => mostrarNombre())