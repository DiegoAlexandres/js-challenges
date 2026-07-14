const transacoes = [
  { id: 1, cliente: "Empresa Alfa", valor: 5500, tipo: "receita", status: "pago" },
  { id: 2, cliente: "Cobmais Clone", valor: 900, tipo: "receita", status: "pendente" },
  { id: 3, cliente: "Infra Nuvem GCP", valor: 600, tipo: "despesa", status: "pago" },
  { id: 4, cliente: "BPO Premium", valor: 10500, tipo: "receita", status: "pago" },
  { id: 5, cliente: "Suporte Fim de Semana", valor: 350, tipo: "despesa", status: "pendente" }
];


// ## Os 3 Desafios de Arrancada
// Tente resolver usando a lógica de intenção direta (map, filter, reduce), sem criar estruturas antigas. É você contra o código:

// ### 1. O Filtro de Caixa (filter)
// Crie um novo array contendo apenas as transações do tipo "receita" que já foram pagas.
// Dica de engenheiro: Você vai precisar encadear duas condições dentro do retorno do filtro usando o operador &&.

const revenues = transacoes.filter((revenue)=> {
    return revenue.tipo === "receita" && revenue.status === "pago"
});


// ### 2. A Máscara de Relatório (map)
// Imagine que você precisa enviar esses dados para uma tabela limpa. Use o map para transformar o array original em um novo array contendo apenas
// strings formatadas exatamente assim: "Cliente: [NOME DO CLIENTE] | Valor: R$ [VALOR]"

const formatStrings = transacoes.map((itemString) =>{
    return `Cliente: ${itemString.cliente} | Valor: R$ ${itemString.valor}`
});


// ### 3. O Fechamento de DRE (reduce)
// Use o reduce para calcular o saldo final do caixa (Somar todas as receitas e subtrair todas as despesas).
// Dica de engenheiro: O acumulador do seu reduce começa em 0. A cada linha do loop, você checa se o tipo === "receita" para somar, ou despesa para subtrair.

const balance = transacoes.reduce((accumulator, item) => {
    if (item.tipo === "receita"){
        return accumulator + item.valor
    } else if (item.tipo === "despesa"){
        return accumulator - item.valor
    }

    return accumulator
}, 0);


// ### Versão Sênior (Usando o Operador Ternário)
// Depois que você rodar o código acima e ver que funcionou, dá uma olhada em como um desenvolvedor sênior escreveria essa mesma
// lógica em uma única linha usando o operador ternário (condição ? se_verdadeiro : se_falso):

const balanceSenior = transacoes.reduce((accumulator, item) => {
    return item.tipo === "receita" ? accumulator + item.valor : accumulator - item.valor
}, 0);


// ## Bloco 1: Aquecimento (Fácil)
// ### 1. Alerta de Inadimplência (filter)
// Crie um novo array que contenha apenas as transações que estão com o status === "pendente".
const badDebt = transacoes.filter(pending => pending.status === "pendente")

// ### 2. Auditoria de Nomes (map)
// Gere um novo array contendo apenas os nomes dos clientes, mas todos transformados em letras maiúsculas (Dica: use o método .toUpperCase() na string do nome).
const clienteNames = transacoes.map(name => name.cliente.toLocaleUpperCase())

// ### 3. Busca de Alvo Único (find)
// O método .find() funciona igual ao filter, mas em vez de retornar um array, ele retorna apenas o primeiro objeto que encontrar.
// Use o .find() para capturar o objeto completo do cliente "BPO Premium".
const getClient = transacoes.find(client => client.cliente === "BPO Premium")

// ## Bloco 2: Regras de Negócio (Médio)
// ### 4. Linha de Corte (filter)
// Crie um filtro para retornar apenas as transações (sejam receitas ou despesas) que tenham o valor maior ou igual a R$ 900.

const registers = transacoes.filter(register => register.valor >= 900)

// ### 5. Faturamento Bruto (reduce)
// Use o reduce para calcular a soma total apenas das receitas, ignorando completamente as despesas do caixa.
// (condição ? se_verdadeiro : se_falso)
const sumTotal = transacoes.reduce((accumulator, revenue) => {
    return  revenue.tipo === "receita" ? accumulator + revenue.valor : accumulator
}, 0);


// ### 6. O Pente Fino das Despesas (filter + map)
// Aqui você vai encadear dois métodos: use o .filter() para pegar apenas as transações do tipo "despesa" e, logo em seguida,
// use o .map() para retornar um array contendo apenas os números dos valores dessas despesas [600, 350].
const expenses = transacoes.filter(expense => expense.tipo === "despesa").map(expense => expense.valor)


// ## Bloco 3: Cenários Reais de BPO (Avançado)
// ### 7. Custos de Infraestrutura (reduce)
// Use o reduce para calcular o total gasto apenas com despesas que já foram pagas.
const paidExpenses = transacoes.reduce((accumulator, paidExpense) => {
    const isPaidExpenses = paidExpense.tipo === "despesa" && paidExpense.status === "pago"
    return isPaidExpenses ? accumulator + paidExpense.valor : accumulator
}, 0)

// ### 8. Aplicação de Multa Recorrente (map)
// Imagine que seu sistema precisa aplicar uma multa de 10% sobre o valor de transações atrasadas. Use o .map() para gerar um novo array de objetos.
// Se o status for "pendente", o objeto deve ganhar uma nova propriedade chamada multa: valor * 0.10. Se estiver pago, multa: 0.
const recurrents = transacoes.map((recurrent) => {
    return {
        ...recurrent,
        fine: recurrent.status === "pendente" ? recurrent.valor * 0.10 : 0
    }
});

// ### 9. Validação de Grandes Contratos (some)
// O método .some() checa se pelo menos um item do array passa em uma condição e retorna true ou false. Use o .some() para verificar se existe alguma
// transação no caixa com o valor maior do que R$ 10.000.
const hasBigContracts = transacoes.some(bigContract => bigContract.valor > 10000.00)


// ### 10. O "Imposto OpenBI" (O Desafio do Arquiteto)
// Faça um encadeamento completo:
// Filtre apenas as transações do tipo "receita".
// Use o map para aplicar um imposto fake, reduzindo 5% do valor de cada uma delas.
// Use o reduce para somar qual foi o faturamento líquido total após o imposto.
const liquidRevenus = transacoes
    .filter(liquidRevenu => liquidRevenu.tipo === "receita")
    .map((liquidRevenu) => {
        return {
            ...liquidRevenu,
            tax: liquidRevenu.valor * 0.05,
        }
    })
    .map((liquidRevenu) => {
        return {
            ...liquidRevenu,
            liquidRevenuTotal: liquidRevenu.valor - liquidRevenu.tax
        }
    })
    .reduce((accumulator, liquidRevenu) => {
        return liquidRevenu.liquidRevenuTotal + accumulator
    }, 0)


const liquidValues = transacoes
    .filter(liquidValue => liquidValue.tipo === "receita")
    .map(liquidValue => liquidValue.valor * 0.95)
    .reduce((accumulator, liquidValue) => accumulator + liquidValue, 0)



// Exercicios Case Real

const vendas = [
  { id: 1, produto: "Notebook", categoria: "Eletrônicos", preco: 3500, quantidade: 2, vendedor: "Ana", data: "2026-01-15" },
  { id: 2, produto: "Mouse", categoria: "Eletrônicos", preco: 80, quantidade: 5, vendedor: "Bruno", data: "2026-02-10" },
  { id: 3, produto: "Cadeira Gamer", categoria: "Móveis", preco: 1200, quantidade: 1, vendedor: "Ana", data: "2026-02-20" },
  { id: 4, produto: "Monitor", categoria: "Eletrônicos", preco: 900, quantidade: 3, vendedor: "Carla", data: "2026-03-05" },
  { id: 5, produto: "Mesa", categoria: "Móveis", preco: 700, quantidade: 2, vendedor: "Bruno", data: "2026-03-18" },
  { id: 6, produto: "Teclado", categoria: "Eletrônicos", preco: 150, quantidade: 4, vendedor: "Carla", data: "2026-04-02" },
  { id: 7, produto: "Estante", categoria: "Móveis", preco: 450, quantidade: 1, vendedor: "Ana", data: "2026-04-22" },
  { id: 8, produto: "Headset", categoria: "Eletrônicos", preco: 250, quantidade: 6, vendedor: "Bruno", data: "2026-05-11" },
  { id: 9, produto: "Sofá", categoria: "Móveis", preco: 2200, quantidade: 1, vendedor: "Carla", data: "2026-05-30" },
  { id: 10, produto: "Webcam", categoria: "Eletrônicos", preco: 200, quantidade: 3, vendedor: "Ana", data: "2026-06-14" }
];


// 1. map — Crie um novo array com o valor total de cada venda (preco * quantidade), retornando objetos { produto, total }.
const sales = vendas.map((sale) => {
    return {
        produto: sale.produto,
        total: sale.preco * sale.quantidade   
    }
})

// 2. filter — Filtre apenas as vendas da categoria "Eletrônicos" com valor total (preço × quantidade) maior que R$ 500.
const salesEletronic = vendas
    .map((sale) => {
        return {
            ...sale,
            valor_total: sale.preco * sale.quantidade
        }
    })
    .filter(sale => sale.categoria === "Eletrônicos" && sale.valor_total > 500)


// console.log(salesEletronic)

const salesEletronic2 = vendas.filter(sale => sale.categoria === "Eletrônicos" && sale.preco * sale.quantidade > 500)


// 3. reduce — Calcule o faturamento total de todas as vendas (soma de preco * quantidade de tudo).
const salesRevenues = vendas.reduce((accumulator, sale) => {
    const sales = sale.preco * sale.quantidade
    return sales + accumulator
}, 0)


// 4. reduce — Agrupe as vendas por vendedor, retornando um objeto onde cada chave é o nome do vendedor e o valor é a soma total vendida por ele.


// 5. map + filter + reduce combinados — Encontre o produto (não a venda) com maior faturamento total dentro da categoria "Móveis".
// Ou seja: filtre por categoria, calcule o total de cada um, e reduza para achar o maior.