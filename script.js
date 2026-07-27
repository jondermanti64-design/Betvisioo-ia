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

let mercados = [];

function agregarMercado(nombre, cuota){
    if(!isNaN(cuota) && cuota > 1){
        mercados.push({
            nombre: nombre,
            cuota: cuota
        });
    }
}

agregarMercado("Más de 2.5 goles", parseFloat(document.getElementById("over25").value));
agregarMercado("Menos de 2.5 goles", parseFloat(document.getElementById("under25").value));
agregarMercado("Ambos anotan: Sí", parseFloat(document.getElementById("btsi").value));
agregarMercado("Ambos anotan: No", parseFloat(document.getElementById("btno").value));
agregarMercado("Más de 9.5 córners", parseFloat(document.getElementById("cornerOver95").value));
agregarMercado("Menos de 9.5 córners", parseFloat(document.getElementById("cornerUnder95").value));
agregarMercado("Más de 4.5 tarjetas", parseFloat(document.getElementById("cardsOver45").value));
agregarMercado("Menos de 4.5 tarjetas", parseFloat(document.getElementById("cardsUnder45").value));

mercados.sort((a,b)=>a.cuota-b.cuota);

let ranking = "<h3>Ranking de mercados</h3>";

mercados.forEach((m,i)=>{
    ranking += `${i+1}. ${m.nombre} (Cuota ${m.cuota})<br>`;
});

✅ Ganador del partido<br>
✅ Doble oportunidad<br>
✅ Hándicap asiático<br>

<hr>

<i>Próximamente BetVision AI analizará automáticamente goles, córners, tarjetas, remates, remates al arco y mercados de jugadores.</i>
`;
}
function calcularConfianza(cuota){
    if(cuota <= 1.30) return 95;
    if(cuota <= 1.50) return 90;
    if(cuota <= 1.70) return 85;
    if(cuota <= 2.00) return 75;
    if(cuota <= 2.50) return 65;
    return 50;
}

function calcularRiesgo(confianza){
    if(confianza >= 90) return "🟢 Bajo";
    if(confianza >= 75) return "🟡 Medio";
    return "🔴 Alto";
}
