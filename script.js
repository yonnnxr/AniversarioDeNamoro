const dataInicioNamoro = new Date("2024-03-01"); // Substitua pela data correta
const tempoCalculadoElemento = document.getElementById("tempo-calculado");

function calcularTempoJuntos() {
    const agora = new Date();
    const diferencaTempo = agora - dataInicioNamoro;

    const milissegundos = diferencaTempo;
    const segundos = Math.floor(diferencaTempo / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    tempoCalculadoElemento.textContent = `${dias} dias, ${horas % 24} horas, ${minutos % 60} minutos e ${segundos % 60} segundos`;
}

calcularTempoJuntos();
setInterval(calcularTempoJuntos, 1000); // Atualiza a cada segundo