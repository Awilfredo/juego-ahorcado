/*
window.onload= function(){
    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button";
    window.onhashchange= function(){
        window.location.hash = "no-back-button";
    }
}
 */
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML", "CSS", "JUEGO", "GALLETAS"];
let palabra="";
let lienzo = document.getElementById("lienzo");
let tablero = lienzo.getContext("2d");
let anchura;
let palabras_usadas="";
let intentos=0;
let gano= false;
let perdio=false;
let letras_usadas="";
console.log(window.screen.width);



document.getElementById("boton_iniciar_juego").addEventListener("click", iniciarJuego);
document.getElementById("boton_guardar").addEventListener("click", guardar);
document.getElementById("boton_agregar_palabra").addEventListener("click", agregarPalabra);
document.getElementById("juegoNuevo").addEventListener("click", iniciarJuego);




function iniciarJuego(){

    gano=false;
    perdio==false;
    intentos=0;
    palabras_usadas="";
    letras_usadas="";

    document.querySelector("#inicio").className="d-none";
    //hace visible canvas
    document.querySelector("#lienzo_paint").className="";

    palabra = palabras[Math.floor(Math.random() * palabras.length)].toLowerCase();
    document.getElementById("letras").innerHTML="";
    console.log(palabra);
    dibujarCanvas();
    dibujarLinea();
}

function guardar(){
    palabraIngresada=document.querySelector("#txt_palabra").value;
    console.log(palabraIngresada);

    if(palabraIngresada.length<8){

        document.querySelector("#texto").className="d-none";
        //hace visible canvas
        document.querySelector("#lienzo_paint").className="";

        palabra=palabraIngresada;
        console.log(palabra);
        dibujarCanvas();
        dibujarLinea();
    }
}

function agregarPalabra(){
    document.querySelector("#inicio").className="d-none";
    document.getElementById("texto").className="";
}