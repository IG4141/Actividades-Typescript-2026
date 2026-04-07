export {}; 

const inputNombre = document.getElementById("nombreInput") as HTMLInputElement;
const boton = document.getElementById("botonSaludar") as HTMLButtonElement;
const parrafo = document.getElementById("resultado") as HTMLParagraphElement;

boton.addEventListener("click", () => {
    parrafo.innerText = `Hola, ${inputNombre.value}`;
});