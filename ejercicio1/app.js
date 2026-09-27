let jugador = prompt("ingrese el nombre del jugador");

let experiencia = 0;
let misionesCompletadas = 0;
let continuar = "s";

do{
    let puntosMision = Number(prompt("puntos de experiencia obtenidos en este nivel"));
    experiencia += puntosMision;
    misionesCompletadas++;
    continuar=prompt("desea continuar con otra mision, (s/n)");
} while (continuar === "s");

let nivel = "";
if (experiencia < 500) {
    nivel = "novato";    
}else if(experiencia < 1000){
    nivel="avanzado";
}else if(experiencia < 2000){
    nivel="experto";
}else {
    nivel="leyenda";
}

document.write("<h3> resumen de la partida</h3>");
document.write("nombre del jugador:" + jugador + "<br>");
document.write("cantidad de misiones completadas:" + misionesCompletadas + "<br>");
document.write("la experiencia total acumulada:" + experiencia + "<br>")
document.write("nivel obtenido:" + nivel + "<br>")