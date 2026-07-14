
/*
Aula: Completando uma string
Na aula mostra como podemos usar mascaras e substiuitr partes de uma string.
O exemplo que foi dado executa uma mascara em um cartao de credito, deixando visuvel
apenas os ultimos 4 caracteres.
*/

const creditCard = "1234567812344928"

const lastDigits = creditCard.slice(-4)

const maskedNumber = lastDigits.padStart(
    creditCard.length, "X"
)

/*
Aula: Separando e unindo strings

Separando a string com o metodo split
Juntar string com join


*/

// Split
let text = "Estudar, Aprender, Praticar"

let separate = text.split(",")

// console.log(separate)

let message = "Estou aprendendo Javascript"

// console.log(message.split("en"))

// Join
let joined = separate.join(" # ")


/*
Aula: Encontrando um conteúdo no texto
*/

// Como obter a posição da palavra
let messages = "Estou estudando os fundamentos de Javascript"

// console.log(messages.indexOf("Javascript"))

// console.log(messages.includes("javascript"))

// console.log(messages.toLowerCase().includes("javascript"))


// =========================================================================
// MÓDULO: MÉTODOS DE TEXTO E HIGIENIZAÇÃO DE DADOS
// Execute com: node --watch src/pratica-textos.js
// =========================================================================

// MOCK DE DADOS PARA SUPORTE (Use se necessário)
const leadSujeira = "  diretoria@EMPRESAALFA.com.br   ";
const webhookMensagem = "Olá, preciso cancelar o meu plano urgente. Protocolo #19203";
const telefoneBruto = "11988887777";
const tagsCRM = "ouro,bpo,prioridade,openbi";

// =========================================================================
// EXERCÍCIOS PRÁTICOS
// =========================================================================

// ### 1. Padronização de Login/E-mail (trim e toLowerCase)
// O lead digitou o e-mail no formulário com espaços extras e letras maiúsculas (use a variável 'leadSujeira').
// Trate essa string para que ela fique totalmente em letras minúsculas e sem nenhum espaço em branco no início ou no fim.
// Armazene em 'emailLimpo' e exiba no console.

const emailLimpo = leadSujeira.trim().toLowerCase()
console.log(emailLimpo)

// Auditando a removação dos caracteres em branco
console.log(leadSujeira.length)
console.log(emailLimpo.length)

// ### 2. Alerta de Churn no Suporte (toLowerCase e includes)
// Analise a string 'webhookMensagem'. Você precisa criar um sistema de gatilho automático.
// Verifique se o cliente usou a palavra "cancelar" na mensagem. A checagem deve ser INSENSÍVEL a maiúsculas/minúsculas.
// Exiba true se ele quiser cancelar ou false se não.

const isCancelated = webhookMensagem.toLowerCase().includes("cancelar")
console.log(isCancelated)

// Usei o isCancelated para deixar semantico o nome da variaveis, antes tinha usado churnAnalysis

// ### 3. Validação de Tamanho de Campo (length)
// No BPO da Cobmais, um número de telefone com DDD precisa ter exatamente 11 caracteres numéricos.
// Verifique o comprimento da string 'telefoneBruto' usando .length.
// Se tiver exatamente 11, exiba "Telefone Válido", caso contrário, "Erro: Telefone Inválido".

const validation = telefoneBruto.length
if (validation === 11){
    console.log("Telefone Válido")
} else {
    console.log("Erro: Telegone Inválido.")
}

// ### 4. Higienização de Moeda para o Banco de Dados (replace)
// Uma API de faturamento retornou o valor como string: const valorBruto = "R$ 1550,00".
// Use o método .replace() para remover o "R$ " e transformar a string em "1550,00".

const valorBruto = "R$ 1550,00"

const currency = valorBruto.replace("R$ ", "")
console.log(currency)

// Uma boa observação, notei que ao usar o replace com R$ o resultado ficou com um espaço no inico do valor
// precisei usar o R$ , com espaço para remover de fato esses três caracteres iniciais.

// ### 5. Extração de Código de Área / DDD (slice)
// A partir da string 'telefoneBruto' ("11988887777"), use o método .slice() para extrair apenas os 2 primeiros
// dígitos, que representam o DDD.
// Armazene na constante 'ddd' e exiba no console.

const ddd = telefoneBruto.slice(0, 2)
console.log(ddd)

// Metodo slice igual o que temos no pandas como o iloc no sentido de buscar inicio e fim,
// ou no python com o slicing com inicio incluso, e fim excluso.

// ### 6. Máscara de Segurança para LGPD (slice e padStart)
// Você precisa exibir o número do telefone do cliente em um painel administrativo, mas omitindo os primeiros
// dígitos por segurança.
// Pegue os últimos 4 dígitos de 'telefoneBruto' e use o .padStart() para preencher o restante do tamanho da
// string original com asteriscos ("*").
// O resultado deve ficar parecendo com: *******7777

const lastFourNumber = telefoneBruto.slice(-4)
const maskedTelefone = lastFourNumber.padStart(
    telefoneBruto.length, "*"
)

console.log(maskedTelefone)

// Ainda não ficou 100% entendido a logica desse exercicio

// ### 7. Quebrando Linhas de Relatório (split)
// O CRM exportou as tags de um cliente em uma única linha separada por vírgulas (use a variável 'tagsCRM').
// Transforme essa string em um Array real do JavaScript, onde cada tag vira um elemento isolado.
// Exiba o array gerado no console.

const tags = tagsCRM. split(",")
console.log(tags)


// ### 8. Formatador de Link de Campanhas (join)
// Você tem um array de parâmetros para uma URL: const termosBusca = ["modulo", "javascript", "openbi"].
// Junte esses termos em uma única string, mas separados por um hífen ("-") para criar uma slug limpa.
// O resultado deve ser: "modulo-javascript-openbi"

const termosBusca = ["modulo", "javascript", "openbi"]
const slugURL = termosBusca.join("-")

console.log(slugURL)


// ### 9. Localizador de Índices de Erros (indexOf)
// Uma string de log do servidor do GCP retornou: const logGCP = "STATUS:500;ERROR:TIMEOUT_DB;ID:882".
// Use o .indexOf() para descobrir em qual posição da string começa a palavra "ERROR".
// Exiba o índice numérico no console.

const logGCP = "STATUS:500;ERROR:TIMEOUT_DB;ID:882"

const errorLog = logGCP.toUpperCase().indexOf("ERROR")

console.log(errorLog)

// Para garantir que estamos buscando o valor independente de como o erro vem, converti para toUperCase assim
// Pegamos a posição do erro indepentende do formato do texto logado pelo GCP.



// ### 10. O Super Higienizador de Cadastros (Combo de Métodos)
// Um cliente preencheu o nome completo no sistema de prótese de forma totalmente bagunçada: const nomeSujo = "   dIEgO fErReIrA sIlVa   ";
// Você precisa:
// 1. Remover os espaços das pontas.
// 2. Colocar tudo em letras maiúsculas.
// 3. Substituir todos os espaços do meio por sublinhados ("_") para gerar um nome de arquivo de backup padrão.
// Exiba o resultado final no console.

const nomeSujo = "   dIEgO fErReIrA sIlVa   "

const nomeLimpo = nomeSujo.trim().toUpperCase().replaceAll(" ", "_",)

console.log(nomeLimpo)

// Lembrando que o replace tem uma terceiro parametro para setar a quantidade de aparições.
// Mas acredito que isso é só no python no sentido de .replace(" ", "_". 2) ou seja as primeiras duas aparições
// JS não encontrei essa forma, apenas o .replaceAll que pesquisei na documentação MDN