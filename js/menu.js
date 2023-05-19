let botonFacil=document.getElementById("boton1")
let botonMedio=document.getElementById("boton2")
let botonDificil=document.getElementById("boton3")
let nombreJugador=document.getElementById("nombreJugador")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const parametroValor = urlParams.get('nombre');
console.log(parametroValor)

let nombre=localStorage.getItem("nombre"+parametroValor)
nombreJugador.innerHTML=nombre


botonDificil.addEventListener("click",function(){
    window.location.replace("https://mariotg2003.github.io/Pagina2/JuegoDificil.html?nombre=Mario");
})

botonMedio.addEventListener("click",function(){
    window.location.replace("https://mariotg2003.github.io/Pagina2/JuegoMedio.html");
})

botonFacil.addEventListener("click",function(){
    window.location.replace("https://mariotg2003.github.io/Pagina2/JuegoFacil.html");
})