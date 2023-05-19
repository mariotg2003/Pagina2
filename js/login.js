let nombre=document.getElementById("nombre")

function validar(){

    llave=true;

    if(nombre.value==""){
        llave=false;
        nombre.style.background="red"
    }

    if(llave){
        localStorage.setItem("nombre"+nombre.value,nombre.value)
    }

    return llave
}