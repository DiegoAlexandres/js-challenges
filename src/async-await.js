async function pegarNome() {
    return "Diego";
}

const resultado = pegarNome();
// console.log(resultado);

async function principal(){
    const resultado = await pegarNome();
    console.log(resultado);
}

// principal()

// =========================================================================
// DESAFIO DE NEGÓCIOS: CONSUMO DA API PTAX COM ASYNC/AWAIT
// Execute com: node --watch desafio-ptax.js
// =========================================================================

const firstDate = "01-01-2020";

const today = new Date();

const mm = String(today.getMonth() +1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const yyyy = today.getFullYear();

const lastDate = `${mm}-${dd}-${yyyy}`;

const API_URL = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='${firstDate}'&@dataFinalCotacao='${lastDate}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`

// ### 1. Conexão Resiliente (Fetch com Try/Catch)
// Crie uma função assíncrona chamada 'obterDadosCambio'.
// Ela deve fazer o fetch na 'API_URL' usando await, extrair o JSON e retornar APENAS o array que está dentro da propriedade 'value'.
// Trate possíveis erros com um bloco try/catch, exibindo uma mensagem personalizada caso a requisição falhe.


async function obterDadosCambio(){
    try {
        const response = await fetch(API_URL);
        const dados = await response.json();
        return dados.value;

    } catch (error){
        console.error("Erro ao buscar dados da API:", error)
    }
}
// obterDadosCambio()

// ### 2. Relatório de Spread Comercial (Mapeamento de Dados)
// Crie uma função assíncrona que chame a função do Exercício 1.
// Com o array de dados na mão, use um método de iteração (como .map ou .forEach) para calcular o spread de cada dia (cotacaoVenda - cotacaoCompra).
// Exiba no console uma lista formatada contendo a data (apenas os primeiros 10 caracteres) e o spread formatado com 4 casas decimais.

async function getCommercialSpread () {
    const currencies = await obterDadosCambio();

    currencies.forEach((item) => {
        const date = item.dataHoraCotacao.slice(0, 10);
        const spread = item.cotacaoVenda - item.cotacaoCompra;

        console.log(`Date: ${date} | Spread: ${spread.toFixed(4)}`)
    })
}

getCommercialSpread()

// ### 3. Auditoria Cambial (Busca de Registro Específico)
// Crie uma função assíncrona chamada 'auditarData(dataAlvo)'.
// Ela deve buscar os dados da API e procurar se existe algum registro onde a 'dataHoraCotacao' comece com a data passada no parâmetro (ex: "2020-01-03").
// Se encontrar, exiba os valores de compra e venda. Se não encontrar (como em um final de semana), exiba: "Sem pregão oficial nesta data."


// ### 4. Alerta de Volatilidade (Filtro de Risco)
// A mesa de operações da Fintech precisa monitorar dias de alta variação.
// Crie uma função assíncrona que analise o array da API e filtre apenas os dias em que a diferença entre a venda e a compra foi MAIOR que R$ 0,02.
// Exiba a quantidade de dias que atingiram esse critério e quais foram as datas.


// ### 5. Conversão Internacional e Formatação de Moeda
// Imagine que sua empresa recebeu um lote de 3 invoices internacionais nos valores de: [1500.00, 4230.50, 800.00] em dólares.
// Crie uma função assíncrona que pegue a cotação de VENDA do PRIMEIRO registro retornado pela API.
// Converta cada uma das 3 invoices para Real (BRL) utilizando essa taxa e exiba o resultado na tela formatado como moeda brasileira (R$) usando o '.toLocaleString()'.


// =========================================================================
// DESAFIO DE NEGÓCIO: MAPEAMENTO DE VOLATILIDADE (FINTECH CÂMBIOSAFE)
// Execute com: node --watch analise-volatilidade.js
// =========================================================================

// const API_URL = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial='01-01-2020'&@dataFinalCotacao='07-19-2026'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao";

/**
 * Contexto: Você é a pessoa desenvolvedora responsável pelo módulo de análise de risco de uma Fintech. 
 * O diretor financeiro (CFO) precisa identificar o dia de maior instabilidade do mercado dentro do lote de 
 * dados retornado pela API do Banco Central para calibrar os algoritmos de segurança de compra de moeda.
 * * O Problema: Escreva a função assíncrona 'analisarMaiorInstabilidade' abaixo. Ela deve consumir a URL fornecida 
 * e identificar qual foi o registro exato (o dia) em que o mercado operou com o maior spread.
 * * Requisitos Técnicos:
 * 1. Use obrigatoriamente a sintaxe async/await junto com o fetch nativo para buscar os dados.
 * 2. Implemente um bloco try/catch para capturar e exibir erros caso a requisição falhe.
 * 3. A função deve isolar o array correto dentro do JSON retornado (a chave 'value').
 * 4. O cálculo do spread de cada dia deve ser feito por: cotacaoVenda - cotacaoCompra.
 * * Formato do Retorno/Log Esperado:
 * {
 * dataHora: "2020-03-12 13:10:44.221",
 * maiorSpreadEncontrado: 0.0452,
 * compra: 4.7512,
 * venda: 4.7964
 * }
 */

// async function analisarMaiorInstabilidade() {
//     // Escreva seu código aqui
    
// }

// // Execução da função para testes
// analisarMaiorInstabilidade();