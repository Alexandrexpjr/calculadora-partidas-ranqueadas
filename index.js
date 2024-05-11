function calculaSaldoDeVitorias(resultados) {
    let saldoDeVitorias = 0
    // Vou consider V como vitória, D como derrota e qualquer outra coisa como inválida
    for (const resultado of resultados) {
        if (!['V', 'D'].includes(resultado)) {
            
            continue
        }
        switch (resultado) {
            case 'V':
                saldoDeVitorias += 1
                break
            case 'D':
                saldoDeVitorias -= 1
                break
            default:
                console.log("Partida inválida! Os valores devem ser V para vitória ou D para derrota.")
                console.log("Valor incorreto: " + resultado)
        }

    }

    return saldoDeVitorias
}


function gerarResultadoDaPartidaDoHeroi(taxaDeVitorias) {
    const randomNumber = Math.random() * 100
    if (randomNumber < taxaDeVitorias) {
        return 'V'
    }
    return 'D'

}

function gerarPartidasParaHeroi(numeroDePartidas, taxaDeVitorias) {
    let heroi = []
    let contador = 0
    while (contador < numeroDePartidas) {
        const resultado = gerarResultadoDaPartidaDoHeroi(taxaDeVitorias)
        heroi.push(resultado)
        contador += 1
    }
    return heroi
}

function avaliaHeroi(saldoDeVitorias) {
    let nivel

    if (saldoDeVitorias < 10) nivel = "Ferro"
    else if (saldoDeVitorias < 20) nivel = "Bronze"
    else if (saldoDeVitorias < 50) nivel = "Prata"
    else if (saldoDeVitorias < 80) nivel = "Ouro"
    else if (saldoDeVitorias < 90) nivel = "Diamante"
    else if (saldoDeVitorias < 100) nivel = "Lendário"
    else nivel = "Imortal"

    console.log(`O Herói tem de saldo de ${saldoDeVitorias} e está no nível de ${nivel}."`)
}

function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a
}

// Apenas para testar com vários casos de forma dinâmica, gerando jogadores com diferentes porcentagens de vitória, em 150 partidas.
function main(numeroDeJogadores) {
    for (let i = 0; i < numeroDeJogadores; i += 1) {
        const porcentagemDeVitorias = randomNumberInterval(50, 95)
        let jogador = gerarPartidasParaHeroi(150, porcentagemDeVitorias)
        let saldoVitorias = calculaSaldoDeVitorias(jogador)
        avaliaHeroi(saldoVitorias)
    }
}
let numeroDeJogadores = 0 // Altere aqui para simular vários jogadores de forma aleatória
main(numeroDeJogadores)

// Versão simplificada

let vitorias = 100
let derrotas = 20

let saldo = vitorias - derrotas

avaliaHeroi(saldo)