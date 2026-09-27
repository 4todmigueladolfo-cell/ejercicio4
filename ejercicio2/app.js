let equipo1= prompt("nombre del equipo 1");
let equipo2= prompt("nombre del equipo 2");
let golesEquipo1= prompt("ingrese los goles obtenidos del equipo 1:");
let golesEquipo2= prompt("ingrese los goles obtenidos del equipo 2:");

let goles = 0;
let goles1 = 0;
let resultado = "";

if(golesEquipo1 === golesEquipo2){
    resultado = "empate";
    goles=0;
    goles=1;
}else if(golesEquipo1 > golesEquipo2 ) {
    let diferencia= golesEquipo1 - golesEquipo2;
    resultado = equipo1 + "gano por:" + diferencia +"gole de diferencia";
    goles=3;
    goles1=0;
}else{
    let diferencia= golesEquipo2 - golesEquipo1;
    resultado = equipo2 + "gano por:" + diferencia + "goles de diferencia";
    goles = 0;
    goles1 = 3;
}

document.write("<h3>Resultado del partido</h3>");
document.write(equipo1 + ":" + golesEquipo1 + "goles (" + goles +"puntos)<br>");
document.write(equipo2 + ":" + golesEquipo2 + "goles (" + goles1 + "puntos) <br>");
document.write(" resultado" + resultado + "<br>")



