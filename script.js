
function simularIA() {
    const resultados = [
        "Vitória do Time A",
        "Vitória do Time B",
        "Jogo com mais de 2.5 gols",
        "Menos de 3 escanteios no 1º tempo",
        "Ambos marcam: SIM"
    ];
    const aleatorio = resultados[Math.floor(Math.random() * resultados.length)];
    document.getElementById("resultado").innerText = "Previsão: " + aleatorio;
}
