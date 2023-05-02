const times = ["São Paulo", "Corinthians", "Santos", "Palmeiras", "Flamengo", "Botafogo", "Bahia", "Sport", "Internacional", "Grêmio", "Fortaleza", "Fluminense", "Cruzeiro", "Atlético MG", "Athletico Paranaense", "América MG"];

console.log("Sorteio das oitavas de final da Copa do Brasil:");

//Embaralha os times aleatóriamente.
function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const timesEmbaralhados = shuffle(times);

//Forma os confrontos.
for(let i= 0; i < timesEmbaralhados.length; i += 2) {

    const time1 = timesEmbaralhados[i];
    const time2 = timesEmbaralhados[i + 1];

    console.log("confronto: " + time1 + " x " + time2);
}

