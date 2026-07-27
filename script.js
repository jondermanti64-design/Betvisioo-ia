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

let pLocal=(100/cl).toFixed(1);
let pEmpate=(100/ce).toFixed(1);
let pVisitante=(100/cv).toFixed(1);

let favorito = cl < cv ? local : visitante;
let confianza = "Media";

if(cl <= 1.50 || cv <= 1.50){
    confianza = "Muy alta";
}else if(cl <= 1.80 || cv <= 1.80){
    confianza = "Alta";
}

document.getElementById("resultado").innerHTML=`
<h2>BetVision AI</h2>

<b>Favorito:</b> ${favorito}<br>
<b>Confianza:</b> ${confianza}<br><br>

<b>Probabilidad Local:</b> ${pLocal}%<br>
<b>Probabilidad Empate:</b> ${pEmpate}%<br>
<b>Probabilidad Visitante:</b> ${pVisitante}%<br><br>

<h3>Mercados recomendados (Versión 1)</h3>

✅ Ganador del partido<br>
✅ Doble oportunidad<br>
✅ Hándicap asiático<br>

<hr>

<i>Próximamente BetVision AI analizará automáticamente goles, córners, tarjetas, remates, remates al arco y mercados de jugadores.</i>
`;
}
