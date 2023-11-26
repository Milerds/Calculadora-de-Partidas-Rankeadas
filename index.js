///Aqui declaramos as variaveis e vinculamos a elas as funções que criamos
let saldoVitorias = calcularSaldo(11, 5)
let nivelHeroi = descobrirNivel(saldoVitorias)

///Essa é a função para calcular o saldo de vitórias do nosso herói
function calcularSaldo(numVitoria = 0, numDerrota = 0) {
    let saldo = numVitoria - numDerrota
    return saldo
}
///Essa é a função para descobrir o nível do nosso herói
function descobrirNivel(saldoVitorias) {
    let nivel = ['Ferro', 'Bronze', 'prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
    if (saldoVitorias <= 10) {
        return nivel[0]
    } else if (saldoVitorias <= 20) {
        return nivel[1]
    } else if (saldoVitorias <= 50) {
        return nivel[2]
    } else if (saldoVitorias <= 80) {
        return nivel[3]
    } else if (saldoVitorias <= 90) {
        return nivel[4]
    } else if (saldoVitorias <= 100) {
        return nivel[5]
    } else {
        return nivel[6]
    }
}

///Esse é o comando para exibir a mensagem no console
console.log(`o herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivelHeroi}`)