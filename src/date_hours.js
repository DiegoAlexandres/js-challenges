/*

Date and hours with .toLocaleString()
Date and hours with .
Function construtura de datas com Date()

*/

let date = new Date("2016-01-18T10:15:00")

// console.log(date.toLocaleString("pt-BR"))

// Como extrair o dia, mês e ano de uma data
let day = date.getDate()
console.log(day)

let month = date.getMonth() + 1
console.log(month)

let year = date.getFullYear()
console.log(year)


console.log(`${day}/${month}/${year}`)

// Utilizando o .toLocaleString e seu objetivo
let dayLocal = date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
})

console.log(dayLocal)

// Modificated the date 
let dateYear = date.setFullYear(2030)
let dateMonth = date.setMonth(2)
let dateDay = date.setDate(10) // Modifica o dia (pq não setDay?)
let hours = date.setHours(1)
let minutos = date.setMinutes(50)

console.log(date)


// Convertendo moedas
let amount = 12.5
console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",

}))

// Intl é a API de Internacionalização do ECMAScript
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

// Exibe no formato de acordo com a localidade
console.log(new Intl.DateTimeFormat("pt-BR").format(new Date()))
console.log(new Intl.DateTimeFormat("en-US").format(new Date()))

// Obtem a diferença em minutos do timezone
console.log(date.getTimezoneOffset())
console.log(date.getTimezoneOffset() / 60)


// =========================================================================
// DESAFIOS: DATA, HORA E INTERNACIONALIZAÇÃO EM JAVASCRIPT
// Execute com: node --watch src/pratica-datas.js
// =========================================================================

// ### 1. Instanciação e Extração Manual
// Crie um objeto de data apontando para a data de fundação da Keno: 15 de Abril de 2020 às 09:30:00.
// Use os métodos de extração do JavaScript para obter e exibir no console:
// O dia do mês, o mês correspondente (lembre-se do ajuste de índice) e o ano.


// ### 2. Formatação Customizada Manual
// Com a data criada no Exercício 1, exiba no console uma string formatada exatamente assim:
// "Fundação: DD/MM/AAAA - HH:MM" (utilizando concatenação ou Template Strings).


// ### 3. Internacionalização Nativa (toLocaleString)
// Formate a data do Exercício 1 usando o método '.toLocaleString()'.
// Configure o método para retornar apenas o Dia (com 2 dígitos), o Mês (com 2 dígitos), o Ano (com 4 dígitos), a Hora e os Minutos.
// Exiba o resultado formatado no padrão "pt-BR".


// ### 4. Formatação de Moedas
// O faturamento de um cliente veio da API como o número '8500.75'.
// Use o método '.toLocaleString()' para formatar esse número como moeda brasileira (R$) e exiba no console.


// ### 5. API Intl - Padronização Americana
// Crie uma nova instância com a data e hora atuais ('new Date()').
// Use a classe 'Intl.DateTimeFormat' para formatar essa data no padrão dos Estados Unidos ("en-US").
// Exiba o resultado.


// ### 6. Mutação Controlada de Datas
// Pegue a data atual ('new Date()').
// Usando os métodos modificadores (os 'setters'), altere o ano dela para 2030 e o dia do mês para 25.
// Exiba a data modificada no console.


// ### 7. Cálculo de Fuso Horário (Timezone Offset)
// Descubra a diferença de fuso horário do seu computador em relação ao fuso UTC.
// Exiba essa diferença convertida em HORAS inteiras no console.


// ### 8. Comparação de Datas (Vencimento de Contrato)
const today = new Date();
const contractDueDate = new Date("2026-07-10T23:59:59");
// Escreva um 'if' que compare as duas datas acima.
// Se a data atual for maior que a data de vencimento do contrato, exiba "Alerta: Contrato expirado!".
// Caso contrário, exiba "Contrato regular".


// ### 9. Somando Dias em Uma Data
// Um cliente acabou de abrir um ticket na OpenBI e o SLA de resposta é de exatamente 3 dias.
// Pegue a data atual ('new Date()') e adicione 3 dias a ela de forma dinâmica (usando setDate + getDate).
// Exiba a data limite para resposta no console.


// ### 10. Formatação de Data por Extenso com Intl
// Use a API 'Intl.DateTimeFormat' com a data de hoje.
// Configure as opções para exibir o dia por extenso, o mês por extenso e o ano.
// Exemplo esperado: "segunda-feira, 13 de julho de 2026" (ou a data que você estiver rodando o script).