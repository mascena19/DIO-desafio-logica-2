const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Pergunta ao usuário vitorias do Heroi
rl.question('Digite a quantidade de vitórias do herói: ', (vitoriasDoHeroi) => {
          
  // Pergunta ao usuário a quantidade de derrotas do herói
  rl.question('Digite a quantidade de derrotas do herói: ', (derrotasDoHeroi) => {
    // Convertendo a entrada para número
             vitoriasDoHeroi = parseInt(vitoriasDoHeroi);
             derrotasDoHeroi = parseInt(derrotasDoHeroi);

    // Estrutura de decisão para determinar o nível do herói com base na XP
    let totalVitorias = vitoriasDoHeroi - derrotasDoHeroi;
    let nivelDoHeroi;

    if (totalVitorias <= 10) {
        nivelDoHeroi = "Ferro";
    } else if (totalVitorias >= 11 && totalVitorias <= 20) {
        nivelDoHeroi = "Bronze";
    } else if (totalVitorias >= 21 && totalVitorias <= 50) {
        nivelDoHeroi = "Prata";
    } else if (totalVitorias >= 51 && totalVitorias <= 80) {
        nivelDoHeroi = "Ouro";
    } else if (totalVitorias >= 81 && totalVitorias <= 90) {
        nivelDoHeroi = "Diamante";
    } else if (totalVitorias >= 91 && totalVitorias <= 100) {
        nivelDoHeroi = "Ascendente";
    } else {
        nivelDoHeroi = "Radiante";
    }

    // Exibindo a mensagem final
    console.log(`O Herói tem saldo de ** ${totalVitorias} **, está no nível de ${nivelDoHeroi}`);

    // Fecha a interface de leitura
    rl.close();
  });
});
