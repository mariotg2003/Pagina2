let botonFacil=document.getElementById("boton1")
let botonMedio=document.getElementById("boton2")
let botonDificil=document.getElementById("boton3")


botonFacil.addEventListener("click",function(){
    window.location.assign("JuegoFacil.html")
})

botonMedio.addEventListener("click",function(){
    window.location.assign("JuegoMedio.html")
})

botonDificil.addEventListener("click",function(){
    window.location.assign("JuegoDificil.html")
})