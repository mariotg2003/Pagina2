let cuerpo=document.getElementById("cuerpo")
let empezar=document.getElementById("empezar")
let contador=0
let puntuacion=document.getElementById("puntuacion")
puntuacion.innerHTML=5
let numeros=0

function comprobar(){
    if(contador==0){
    puntuacion.hidden=true
    numeros=0
    puntuacion.innerHTML=""
    location.replace("https://mariotg2003.github.io/Pagina2/menu.html")
    }  
}

function generar(){
    countdown(4)
    puntuacion.hidden=false
    empezar.hidden=true
    let numeroBotones=12
    for(let i=0;i<numeroBotones;i++){
        contador++
        let boton=document.createElement("div")
        boton.classList="boton"
        boton.style.position="absolute"
        boton.style.height="50px"
        boton.style.width="50px"
        boton.style.left=(Math.random()*(window.innerWidth - 100))+"px"
        boton.style.top=(Math.random()*(window.innerHeight - 100))+"px"
        cuerpo.appendChild(boton)
        boton.addEventListener("click",function(){
            numeros++
            boton.remove()
            contador--
            comprobar()
        })      
        
    }
    
}

function countdown(number) {  
    var countdownInterval = setInterval(function() { 
      puntuacion.innerHTML=number
      number--; 
  
      if (number < 0 && numeros!=13) {
        clearInterval(countdownInterval);
        while (cuerpo.lastChild.id!="empezar") {
            cuerpo.removeChild(cuerpo.lastChild);
          }
        contador=0
        puntuacion.hidden=true
        numeros=0
        empezar.hidden=false
      }
    }, 1000);
  }
  
  
  
  

empezar.addEventListener("click",generar)

