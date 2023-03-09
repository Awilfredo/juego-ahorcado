
let x= (window.screen.width) ;
let y= (window.screen.height)*0.6;
lienzo.width=x;
lienzo.height=y;
const re = new RegExp(/[a-zA-ZÑñ]/);




function dibujarCanvas() {
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0, 0, x, y);
    tablero.beginPath();
    tablero.moveTo((x*0.2), (y*0.75));
    tablero.lineTo((x*0.7), (y*0.75));
    tablero.stroke();
    tablero.closePath();

    

    document.addEventListener("keyup", (event)=>{
        const keyName= event.key;
        console.log("se ha tecleado " + keyName);

        if(intentos<=5){

            if(!gano){
                
                console.log("aun no has ganado");
            

            if(keyName.length==1){
                if(re.test(keyName)){
                    
                    
                    
                    const reg= new RegExp("^["+ letras_usadas+"]$");
                    if(!reg.test(keyName.toLowerCase())){
                        letras_usadas+=keyName.toLowerCase();
                        document.getElementById("letras").innerHTML=letras_usadas.toUpperCase();
                        compararLetra(keyName.toLowerCase());
                    }
                }
            }
           
        }
    }
    

    if(gano){
        document.getElementById("letras").innerHTML="FELICIDADES GANASTE!";
    }
    })
}


function dibujarLinea() {
    tablero.lineWidth = 4;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    anchura = (x*0.5) / palabra.length;
    for (let i = 0; i < palabra.length; i++) {

        tablero.moveTo((x*0.25) + (anchura * i), (y*0.9));
        tablero.lineTo((x*0.28) + (anchura * i), (y*0.9));
    }

    tablero.stroke();
    tablero.closePath();
}


function dibujarLetra(i, letra){
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.font= "20px arial";
    tablero.strokeText(letra, (x*0.26) + (anchura*i), (y*0.85));
    tablero.closePath();

}



function compararLetra(letra){

    let acierto= false;

            
            for(let i=0; i<palabra.length; i++){
                console.log("for");
                if(palabra[i]==letra[0]){      
                    palabras_usadas+=letra;
                    dibujarLetra(i, letra.toUpperCase());
                    acierto=true;
                    
                }
            }

            console.log(palabras_usadas.length);


            if(palabras_usadas.length==palabra.length){
                gano= true;
                
            }

        if(!acierto){
            intentos++;

            dibujarError(intentos);
            if(intentos==6){
                perdio==true;
                document.getElementById("letras").innerHTML="PERDISTE!";
            }
        }
        
}



function dibujarError(i){
    tablero.lineWidth = 5;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    switch(i){
        case 1:
            pintar(0.3, 0.3, 0.75, 0.1);
            pintar(0.3, 0.5, 0.1, 0.1);


            break;
        
        case 2:
            pintar(0.5, 0.5, 0.1, 0.2);
            break;    

        case 3:
            pintarCirculo(0.5,0.2, y*0.05);
            break;
        case 4:

            pintar(0.5,0.5, 0.3, 0.5);
            break;

        case 5:
            pintar(0.5,0.45, 0.3, 0.4);   
            pintar(0.5,0.55, 0.3, 0.4); 
            break;
         
        case 6:
            pintar(0.5,0.45, 0.5, 0.6);   
            pintar(0.5,0.55, 0.5, 0.6); 

    }

    tablero.stroke();
    tablero.closePath();
}

function pintar(x1, x2, y1, y2){
    tablero.moveTo((x*x1), (y*y1));
    tablero.lineTo((x*x2), (y*y2));

    
}

function pintarCirculo(x1, y1, radio){
    tablero.moveTo((x*x1)+radio, (y*y1)+radio);
    tablero.arc((x*x1),(y*y1)+radio,radio, 0, 2*Math.PI);


}

