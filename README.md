# DIO | Descobrindo o ranking do herói

## DESAFIO JavaScript 🤓

Em um dado jogo online, precisamos subir a nossa colocação no placar (Rank). Para isso, temos que jogar partidas rankeadas e acumular o saldo de vitórias necessários para cada nível.

O saldo de vitórias do nosso jogo é dado pela **diferença** entre o **número de vitórias** e o **número de derrotas**:

| Saldo de vitórias = Número de vitórias - Número de derrotas|
|------------------------------------------------------------|


Vamos utilizar como base a tabela abaixo:

|Saldo de vitórias|Nivel|
|----------------| -----|
|Se saldo menor ou igual a 10 | Ferro |
|Se saldo entre 11 e 20 | Bronze |
|Se saldo entre 21 e 50 | Prata |
|Se saldo entre 51 e 80 | Ouro |
|Se saldo entre 81 e 90 | Diamante |
|Se saldo entre 91 e 100 | Lendário |
|Se saldo maior ou igual a 101 | Imortal |


O desafio, portanto, é descobrir a colocação do herói com base em seu saldo de vitórias, para que possamos exibir uma mensagem como esta:

|O herói tem saldo de 11 vitórias e está no nível Bronze|
|-------------------------------------------------|

## SOLUCIONANDO O DESAFIO 💡

Vamos entender o processo:
|Etapa|Processo|
|-----|---|
|1 | Declarar as váriaveis necessárias|
|2 | Criar uma função para descobrir o saldo de vitórias do herói|
|2.2 | Vincular a função à variável|
|3 | Criar uma função para descobrir o nível do herói|
|3.2 | Vincular a função à variavel|
|4 | Exibir mensagem|

1) Para começarmos a resolver nosso problema, precisamos primeiro saber as variáveis que iremos utililizar.

Nesse caso, teremos uma variável para o **saldo de vitórias** e também para o **nível do herói**, veja:

```
let saldoVitorias

let nivelHeroi
```

2) Agora, iremos criar uma função para calcular o saldo de vitórias. Nomearemos como calcularSaldo e passaremos como parâmetros o número de vitórias e o númetro de derrotas:
```
function calcularSaldo(numVitoria, numDerrota = 0) {
}
```
Dentro da função, colocaremos uma variável para armazenar a diferença entre as vitórias e derrotas, chamaremos de saldo:
```
function calcularSaldo(numVitoria, numDerrota = 0) {

    let saldo = numVitoria - numDerrota
}
```
Para concluir, declaramos o **return**, o qual armazenará os valores que serão retornados quando a função for chamada, nesse caso será o valor da diferença:
```
function calcularSaldo(numVitoria, numDerrota = 0) {
 
    let saldo = numVitoria - numDerrota
 
    return saldo
}
```
A função para verificar o saldo de vitórias do nosso herói já está pronta! 
 
2.2 Vamos guardar a função na variável saldoVitorias, criada no inicio do desafio, e alterar os valores de vitoria e derrota:
```
let saldoVitorias = calcularSaldo(11, 5) 

///Altere os valores entre parenteses
```
Até aqui o código deve estar assim:
```
let saldoVitorias = calcularSaldo(11, 5)
let nivelHeroi 

function calcularSaldo(numVitoria, numDerrota = 0) {
    let saldo = numVitoria - numDerrota
    return saldo
}
```
3) Criaremos, então, a função descobrirNivel. Ela verificará a qual nível corresponde o saldo de vitórias do seu herói, além disso,
passaremos como parâmetro da função a váriavel SaldoVitorias, já que é nela que está o valor a ser analisado. Veja:

```
function descobrirNivel(saldoVitorias) {
}
```
Dentro da função descobrirNivel, inseriremos um vetor para armazenar os niveis que o jogo possui:
```
function descobrirNivel(saldoVitorias) {

    let nivel = ['Ferro', 'Bronze', 'prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
}
```

Colocaremos a estrutura condicional **if** e os auxiliares **else if** e **else**. Essa estrutura é o que de fato analisará se o valor do parâmetro está de acordo com determinado nível. Veja:
```
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
```
Perceba que dentro de cada bloco da estrutura condicional tem a declaração **return** seguida de **nivel [Num]**:
```
return nivel[0]
```
O número entre colchetes **[ ]** representa a posição do nível do herói no vetor. No exemplo abaixo, o valor retornado seria "Ouro"
```
 else if (saldoVitorias <= 80) {

        return nivel[3]
    }
```

Isso fará com que, quando a função encontrar uma faixa correspondente ao saldo de vitórias, seja identificado qual é o valor contido no vetor e, por fim, o nivel do herói seja retornado quando a função for executada.

3.2 Agora vincularemos a **função descobrirNivel** à outra variável criada no início do desafio:
```
let nivelHeroi = descobrirNivel(saldoVitorias)
```
O código completo deve estar assim:
```
let saldoVitorias = calcularSaldo(11, 5)
let nivelHeroi = descobrirNivel(saldoVitorias)


function calcularSaldo(numVitoria, numDerrota = 0) {
    let saldo = numVitoria - numDerrota
    return saldo
}

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
```
4 Para finalizar o desafio proposto, iremos colocar o seguinte comando:
```
console.log(`o herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivelHeroi}`)
```
Isso executará as funçôes e exibira a mensagem no console:
```
o herói tem saldo de 6 vitórias e está no nível Ferro
```
concluimos a nossa tarefa! Veja o código completo no nosso [**Arquivo JS**](index.js)

## Considerações finais

É importante frisar que o resultado poderia ser alcançado de distintas formas.

Ainda não domino completamente as linguagens, portanto não conheço outras maneiras, mas se você conseguiu de modos diferentes, por favor, compartilhe, feedback somado a conhecimento é sempre bem vindo! 😁

## Links para ajudar no desafio

[Como utilizar o if](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else)

[Como utilizar funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)



