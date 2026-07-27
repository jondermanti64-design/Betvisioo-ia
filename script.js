
function analizar(){

let local=document.getElementById("local").value;
let visitante=document.getElementById("visitante").value;

let cl=parseFloat(document.getElementById("cuotaLocal").value);
let ce=parseFloat(document.getElementById("cuotaEmpate").value);
let cv=parseFloat(document.getElementById("cuotaVisitante").value);

if(!cl || !ce || !cv){
document.getElementById("resultado").innerHTML="Ingrese todas las cuotas.";
return;
}

let recomendacion="";

if(cl<cv){
recomendacion="✅ El favorito es "+local+".";
}else{
recomendacion="✅ El favorito es "+visitante+".";
}

document.getElementById("resultado").innerHTML=
"<h2>Resultado</h2>"+
"<b>"+recomendacion+"</b><br><br>"+
"Este es el primer análisis. En las siguientes versiones agregaremos IA para recomendar goles, córners, tarjetas, remates, remates al arco y mercados de jugadores.";
}
