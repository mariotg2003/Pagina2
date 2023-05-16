let cuerpo=document.getElementById("cuerpo")
let empezar=document.getElementById("empezar")
let contador=0
let puntuacion=document.getElementById("puntuacion")
let numeros=0

function comprobar(){
    if(contador==0){
    empezar.hidden=false
    puntuacion.hidden=true
    numeros=0
    puntuacion.innerHTML=""
    }  
}

function generar(){
    puntuacion.hidden=false
    empezar.hidden=true
    let numeroBotones=Math.random()*10
    for(let i=0;i<numeroBotones;i++){
        contador++
        let boton=document.createElement("div")
        boton.classList="boton"
        boton.style.position="absolute"
        boton.style.left=(Math.random()*(window.innerWidth - 100))+"px"
        boton.style.top=(Math.random()*(window.innerHeight - 100))+"px"
        cuerpo.appendChild(boton)
        boton.addEventListener("click",function(){
            numeros++
            puntuacion.innerHTML=numeros
            boton.remove()
            contador--
            comprobar()
        })      
        
    }
    
}

empezar.addEventListener("click",generar)

