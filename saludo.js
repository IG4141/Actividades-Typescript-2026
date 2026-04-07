const inputNombre = document.getElementById("nombreInput");
const boton = document.getElementById("botonSaludar");
const parrafo = document.getElementById("resultado");
boton.addEventListener("click", () => {
    parrafo.innerText = `Hola, ${inputNombre.value}`;
});
export {};
