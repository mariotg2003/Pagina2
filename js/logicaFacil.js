let cuerpo=document.getElementById("cuerpo")
let empezar=document.getElementById("empezar")
let contador=0
let puntuacion=document.getElementById("puntuacion")
puntuacion.innerHTML=7
let numeros=0
let areaJuego=document.getElementById("areaJuego")


function comprobar(){
    if(contador==0){
    puntuacion.hidden=true
    numeros=0
    puntuacion.innerHTML=""
    location.replace("https://mariotg2003.github.io/Pagina2/menu.html") 
    }  
}

function generar() {
  countdown(6);
  puntuacion.hidden = false;
  empezar.hidden = true;
  let numeroBotones = 10;
  
  let limite = document.getElementById("areaJuego"); // Elemento límite
  
  for (let i = 0; i < numeroBotones; i++) {
    contador++;
    let boton = document.createElement("div");
    boton.classList = "boton";
    boton.style.position = "absolute";
    
    // Obtener dimensiones del elemento límite
    let limiteRect = limite.getBoundingClientRect();
    
    // Calcular posiciones aleatorias dentro del elemento límite
    let x = Math.random() * (limiteRect.width - 50);
    let y = Math.random() * (limiteRect.height - 50);
    
    boton.style.left = limiteRect.left + x + "px";
    boton.style.top = limiteRect.top + y + "px";
    cuerpo.appendChild(boton);
    
    boton.addEventListener("click", function() {
      numeros++;
      boton.remove();
      contador--;
      comprobar();
    });
  }
}


function countdown(number) {  
    var countdownInterval = setInterval(function() { 
      puntuacion.innerHTML=number
      number--; 
  
      if (number < 0 && numeros!=10) {
        clearInterval(countdownInterval);
        while (cuerpo.lastChild.id!="empezar") {
            cuerpo.removeChild(cuerpo.lastChild);
          }
        puntuacion.hidden=true
        numeros=0
        empezar.hidden=false
      }
    }, 1000);
  }
  
  
  
  

empezar.addEventListener("click",generar)

