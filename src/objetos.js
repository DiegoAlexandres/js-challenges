// =========================================================================
// MÓDULO: OBJETOS E AUTOMAÇÃO DE NEGÓCIOS (OPENBI)
// Execute com: node --watch src/pratica-objetos.js
// =========================================================================

// BASE DE DADOS PARA OS EXERCÍCIOS (Use este payload simulado quando necessário)
const payloadAPI = {
    empresa: "OpenBI Tecnologias",
    faturamento_bruto: 45000,
    "Razao Social": "OpenBI Inteligencia de Dados LTDA",
    config: {
        timeout: 5000,
        webhook: {
            url: "https://api.openbi.com.br/v1/webhook",
            ativo: true
        }
    },
    historico: [
        { id: 1, tipo: "receita", valor: 15000 },
        { id: 2, tipo: "despesa", valor: 3000 }
    ]
};

// =========================================================================
// BLOCO 1: CRIAÇÃO, ACESSO E ATUALIZAÇÃO BÁSICA
// =========================================================================

// ### 1. Cadastro de Novo Cliente
// Crie um objeto literal chamado 'novoCliente' com as propriedades: nome ("Cobmais Clone"), segmento ("Financeiro") e mensalidade (2500).
// Dê um console.log no objeto completo.


// ### 2. Leitura com Notação de Ponto
// Utilizando a notação de ponto, capture o 'faturamento_bruto' de dentro do objeto 'payloadAPI' e exiba no console.


// ### 3. O Terror dos Caracteres Especiais (Notação de Colchetes)
// Acesse a propriedade "Razao Social" do objeto 'payloadAPI' (repare que ela tem espaço e não pode usar ponto) e exiba no console.


// ### 4. Atualização de Status de Cobrança
// Crie um objeto 'fatura' com { id: 102, status: "pendente" }. Em seguida, mude o status para "pago" usando notação de ponto.


// ### 5. Injeção Dinâmica de Chaves de API
// Imagine que sua API autenticou um cliente. Adicione uma nova propriedade chamada 'token' com o valor "jwt_secret_999" no objeto 'novoCliente' criado no Exercício 1.


// ### 6. Acesso por Variável Dinâmica
// Crie uma constante chamada 'chaveDesejada' com a string "segmento". Use essa constante para acessar o segmento do 'novoCliente' usando colchetes.


// =========================================================================
// BLOCO 2: MANIPULAÇÃO E AUDITORIA DE ESTRUTURAS
// =========================================================================

// ### 7. Faxina de Tokens (Deleção)
// No objeto 'payloadAPI', delete a propriedade 'timeout' que está dentro do objeto interno 'config'.


// ### 8. Auditoria de Segurança (Operador 'in')
// Verifique se a propriedade "cnpj" existe dentro do objeto 'payloadAPI' usando o operador 'in'. Exiba o resultado (true/false).


// ### 9. Mapeamento de Colunas de Banco de Dados (Object.keys)
// Use o método Object.keys() para extrair todas as chaves do primeiro nível do objeto 'payloadAPI' e exiba o array gerado.


// ### 10. Consolidação de Valores (Object.values)
// Crie um objeto 'custosInfra' com { gcp: 600, aws: 400, vercel: 150 }. Use Object.values() combinando com um .reduce() simples para somar o custo total.


// ### 11. Array de Auditoria para Objeto (Object.fromEntries)
// Você recebeu uma matriz de auditoria: const dadosMatriz = [['id', 4], ['status', 'ativo']]. Transforme essa matriz de volta em um objeto literal.


// ### 12. Fusão de Configurações (Spread Operator)
// Crie um objeto 'configPadrao' com { porta: 3000, debug: false }. Crie outro 'configCliente' com { debug: true }. Mescle os dois em um novo objeto chamado 'configFinal'.


// =========================================================================
// BLOCO 3: PROTEÇÃO E TRATAMENTO DE ERROS DE API (COALESCÊNCIA E OPTIONAL CHAINING)
// =========================================================================

// ### 13. O Bug do Desconto Zero (Operador ??)
// Um cliente não teve desconto, então a API retornou o valor 0: const descontoRecebido = 0. Use o operador ?? para definir um desconto padrão de 10 apenas se o valor for null/undefined.


// ### 14. Diferença Prática (?? vs ||)
// Use o operador || na mesma variável 'descontoRecebido = 0' do exercício anterior para aplicar o padrão 10. Veja no console como o || destrói o valor 0 legítimo.


// ### 15. Evitando o Crash do Servidor (Optional Chaining)
// Tente acessar a propriedade 'telefone' dentro de 'payloadAPI.cliente' (que não existe). Use o operador ?. para retornar undefined em vez de estourar um erro na aplicação.


// ### 16. O Combo Perfeito do Desenvolvedor de APIs (?. com ??)
// Tente acessar 'payloadAPI.cliente.endereco.cidade'. Use o ?. para navegar com segurança e o ?? para retornar "Cidade não informada" caso o caminho falhe.


// ### 17. Tratamento de Strings Vazias na Integração
// O webhook enviou uma string vazia no campo observação: const obs = "". Use o operador ?? para garantir que a string vazia seja mantida, sem cair no fallback "Sem observações".


// ### 18. Execução de Métodos Opcionais
// Crie um objeto 'webhookCallbacks' que pode ou não ter um método 'onSuccess'. Use o encadeamento opcional para tentar executar o método 'onSuccess?.()' sem quebrar o código.


// =========================================================================
// BLOCO 4: COMPORTAMENTO E ESCOPO (MÉTODOS E O MISTÉRIO DO THIS)
// =========================================================================

// ### 19. Calculadora Financeira Interna (Função Tradicional)
// Crie um objeto 'faturamentoBPO' com as propriedades bruto (10000) e um método líquido (função tradicional) que retorna o bruto multiplicado por 0.95 (desconto de 5% de imposto). Use o 'this'.


// ### 20. O Curto-Circuito do This na Arrow Function
// Refaça o objeto anterior, mas transforme o método líquido em uma Arrow Function. Execute o método e observe o 'undefined' ou 'NaN' acontecer no console.


// ### 21. Mutação Interna de Estado via Método
// Crie um objeto 'caixaEmpresa' com { saldo: 5000 }. Crie um método tradicional chamado 'sacar' que recebe um valor e subtrai do 'this.saldo'. Execute o saque de 1500.


// ### 22. Métodos Encadeados de Configuração
// Crie um objeto 'logger' com { nivel: "info" }. Crie um método 'mudarNivel' que altera o nível e, no final, retorna o próprio 'this'. Isso permitirá fazer logger.mudarNivel("error").mudarNivel("debug").


// ### 23. Closures e Herança de Escopo do This
// Crie um objeto 'relatorio' com { titulo: "Vendas", gerar: function() { const print = () => `Relatório de ${this.titulo}`; return print(); } }. Explique no código por que a arrow function funcionou aqui.


// ### 24. Proteção de Regras de Negócio (Object.freeze)
// Use o Object.freeze() no objeto 'configPadrao' do Exercício 12. Tente mudar a porta para 8080 e veja se o Node permitiu a alteração.


// =========================================================================
// BLOCO 5: MOLDES CORPORATIVOS (FUNÇÕES CONSTRUTORAS)
// =========================================================================

// ### 25. O Molde do Cliente da OpenBI
// Crie uma Função Construtora chamada 'Client' (com C maiúsculo) que recebe 'id', 'nome' e 'mensalidade'. Use o 'this' para acoplar os parâmetros no objeto.


// ### 26. Instanciação em Massa com Operador 'new'
// Use a Função Construtora 'Client' para instanciar dois objetos reais usando a palavra-chave 'new': clienteA ("Empresa Alfa", 3000) e clienteB ("Cobmais", 1200).


// ### 27. O Erro Fatal do Esquecimento do 'New'
// Tente criar um 'clienteC' chamando a função 'Client' mas esquecendo de digitar a palavra 'new'. Dê um console.log na variável e veja o resultado.


// ### 28. Métodos Compartilhados no Molde
// Adicione um método tradicional chamado 'gerarContrato' dentro da Função Construtora 'Client' que retorne a string: "Contrato firmado para o cliente [nome] no valor de R$ [mensalidade]". Execute-o a partir do clienteA.


// ### 29. Parâmetros Inteligentes com Destructuring no Construtor
// Modifique o padrão: crie uma função construtora 'TransactionBuilder' que receba um único OBJETO como parâmetro em vez de variáveis soltas, facilitando integrações de APIs de larga escala.


// ### 30. O Grande Desafio: Ingestão de Logística de Próteses
// Pegue o array 'payloadAPI.historico'. Use o que aprendeu: faça um .map() que transforme cada item do histórico em uma nova instância da função construtora 'Transaction' (crie o construtor antes), adicionando a propriedade calculada 'imposto: valor * 0.05'.