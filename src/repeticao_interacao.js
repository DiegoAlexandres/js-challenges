/*

for padrão
for of
for in

Incluir nos exercicios Switch Case e While

*/

// for (let item =1; item < 10; item++){
//     console.log(item)
// }


// let numbers = [1, 2, 3, 4, 5]

// for (number of numbers) {
//     console.log(`Exibindo os número: ${number * 2}`)
// }



// let amount = 10

// switch (true) {
//     case amount < 10:
//         console.log("Item 1")
// }


// =========================================================================
// DESAFIOS: LOOPS E ITERAÇÕES EM JAVASCRIPT
// Execute com: node --watch src/pratica-loops.js
// =========================================================================

// BASE DE DADOS PARA OS EXERCÍCIOS
const contracts = [
    { id: 1, client: "Keno Móveis", active: true, value: 5000 },
    { id: 2, client: "OpenBI Log", active: false, value: 1200 },
    { id: 3, client: "Móveis Alfa", active: true, value: 3500 },
    { id: 4, client: "Beta Corp", active: true, value: 8000 }
];

const logsGCP = ["erro_auth", "erro_db_timeout", "erro_webhook_404"];


// ### 1. For Padrão - Varredura de Segurança
// Utilizando o 'for' padrão (com index, condição de parada e incremento),
// passe por cada item do array 'logsGCP' e exiba no console a mensagem:
// "Analisando log na posição X: [NOME_DO_LOG]" (onde X é o índice atual).
for (let index = 0; index < logsGCP.length; index++ ) {
    const currentLogs = logsGCP[index]
    console.log(`Analisando log na posição ${index}: ${currentLogs}`)
}

// Utilizando o for no JS sempre sera retornado uma sequência númerica de index, e nao o valor de fato

for (let item = 0; item < logsGCP.length; item++){
    console.log(item)
    console.log(logsGCP[item])
}

// ### 2. For...of - Somador de Faturamento
// Use o laço 'for...of' para passar por todos os objetos do array 'contracts'.
// Crie uma variável acumuladora 'totalAmount' fora do loop e, a cada passagem, 
// some o valor do contrato nela. Exiba o total final no console.

let totalAmount = 0

for (let item of contracts) {
    totalAmount += item.value
}

console.log(totalAmount)

// ### 3. For...in - Scanner de Propriedades
// Dado o objeto abaixo:
const serverConfig = { host: "10.0.0.1", port: 8080, protocol: "https" };
// Use o laço 'for...in' para passar pelas chaves deste objeto e exibir:
// "Chave: [NOME_DA_CHAVE] | Valor: [VALOR_DA_CHAVE]".



// ### 4. While - Esvaziando o Buffer
// Imagine que você precisa processar o array 'logsGCP' de trás para frente até ele ficar vazio.
// Crie um loop 'while' que roda enquanto o tamanho de 'logsGCP' for maior que zero.
// A cada repetição, remova o último elemento usando o método correto e exiba: "Log processado: [NOME_DO_LOG]".


// ### 5. Switch Case - Roteamento de Erros
// Crie uma função chamada 'handleError' que recebe uma string 'errorType'.
// Dentro dela, use um 'switch case' para testar os casos:
// - Se for "erro_auth": exiba "Bloquear IP por segurança".
// - Se for "erro_db_timeout": exiba "Disparar e-mail para o DBA".
// - Qualquer outro erro (default): exiba "Registrar no log genérico".
// Teste a função passando o erro "erro_db_timeout".


// ### 6. For...of com IF - Filtro de Contratos Ativos
// Use o loop 'for...of' para iterar sobre o array 'contracts'.
// Dentro do loop, use um 'if' para verificar se o contrato está ativo ('active === true').
// Se estiver, exiba o nome do cliente no console.


// ### 7. For Padrão Modificado - Pulando Registros
// Crie um loop 'for' padrão que conte de 0 a 10.
// Porém, o incremento não deve ser de 1 em 1, mas sim de 2 em 2 (pulando os ímpares).
// Exiba os números resultantes no console.


// ### 8. Switch True - Classificação Financeira de Contratos
// Use o 'for...of' para iterar sobre 'contracts'.
// Dentro dele, use a estrutura 'switch(true)' para classificar cada contrato baseado no seu 'value':
// - Se 'value' for maior ou igual a 5000: exiba "[Cliente] é um contrato VIP".
// - Se for menor que 5000: exiba "[Cliente] é um contrato Padrão".


// ### 9. For...of com Break - Busca Rápida de Segurança
// Você precisa achar o primeiro contrato que não está ativo (active: false).
// Varra o array 'contracts' com um 'for...of'.
// No momento em que encontrar o contrato inativo, exiba o nome dele e use a palavra-chave 'break' para interromper o loop imediatamente (evitando processamento desnecessário).


// ### 10. For com Desestruturação - Relatório Limpo
// Use o loop 'for...of' para passar por 'contracts'.
// Na própria linha da declaração do loop, use a desestruturação de objetos para capturar apenas as propriedades 'client' e 'value' de cada contrato.
// Exiba no console: "O cliente [client] paga R$ [value]".