// funcion que me aplica el estil a la opcion seleccionada en el menu y quita la previemente seleccionado
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
}

// hacemos desaparecer el menu una vez que se haya seleccionado una opcion del responsive
var x = document.getElementById("nav");
x.className = "";

// funcion que muestra el menu responsive
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className=== ""){
        x.className = "responsive";
    } else{
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades()
}; 

// funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1")
        document.getElementById("js").classList.add("barra-progreso2")
        document.getElementById("bd").classList.add("barra-progreso3")
        document.getElementById("ps").classList.add("barra-progreso4")
    }
}

// Aqui agregaré el enlace de mi numero de celular

// ...

// Aquí envuelvo el código en una función llamada agregarEnlaceTelefono
function agregarEnlaceTelefono() {
    var numeroTelefono = "3216592043";
    var enlace = document.createElement("a");
    enlace.href = "tel:" + numeroTelefono;
    enlace.text = "Llamar";
    document.body.appendChild(enlace);
}

// Esto asegura que la función se ejecute después de que la página haya cargado
document.addEventListener("DOMContentLoaded", agregarEnlaceTelefono);

