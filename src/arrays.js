/*
    Navegação de indice de um array, assim como Python o indice começa pelo zero
    e navegamos com os [] .array[0]

    Array nada mas é do que uma lista em python
    Objeto nada mas é do que um dicionario em python
*/

// Criando um array com construtor

const newArray = new Array()

// Verifica o tamanho do array
// console.log(newArray.length)

// Cria o array com 10 posições vazias
const available = new Array(10)
// console.log(available.length)

// Criando e acessando um array
let fruits = ["Apple", "Banana", "Orange"]

// Retornando o ultima elemento do array, diferente do pyhton em js precisa passar
// o length -1
// console.log(fruits[fruits.length -1])

// Esses conceitos de acesso/navegação de listas/array eu já dominio em python e aqui em js é a mesma coisa.

// Convertendo uma string para array
let fullName = "Diego Alexandre da Silva"
// console.log(typeof(fullName))

// console.log(fullName.split(" "))

// Cria um Array com as letras.
// console.log(Array.from(fullName))

// Adicionando e removendo um item no array
let users = []

// Metodo push adiciona um item no array no final do array
users.push("Diego", "Alexandre", "Silva")

// Metodo unshift adiciona um item no array no inicio do array
users.unshift("Alexandre")

// Remove o item do inicio do array - Não recebe nenhum parametro apenas remove a primeira posição
users.shift()

// Remove o item do final do array - Não recebe nenhum parametro apenas remove a ultima posição
users.pop()

// console.log(users)

// Usando o índice
let fruitsList = ["Apple", "Watermelon", "Lemon", "Strawberry"]

let position = fruitsList.indexOf("Lemon")

// console.log(position)


// Deletando um item do array
// fruitsList.splice(1, 1)
// console.log(fruitsList)

// Como funciona de fato o splice
// array.splice(índice_de_início, quantos_elementos_deletar, itens_para_adicionar...)

const array = [1, 2, 3, 4, 5];
array.splice(2, 1, 'x', 'y', 'z');

// Sua resposta
// [1, 2, “x”, “y”, “z”, 4, 5]

// Explicação
// Parabéns! Você acertou. O método splice() altera o conteúdo de um array removendo
// elementos existentes e/ou adicionando novos elementos.
// Os parâmetros são: o índice de início (2, que é o número 3 no array),
// o número de elementos a serem removidos (1, que remove o 3) e os elementos
// a serem adicionados a partir do índice de início ('x', 'y', 'z').
// Assim, o array inicial [1, 2, 3, 4, 5] se torna [1, 2, 'x', 'y', 'z', 4, 5].

// Remove um item pela posição do indice
fruitsList.splice(position, 1)
// console.log(fruitsList)


// Array pode ser de qualquer tipo de dados
let myArray = [
    "Um texto",
    10,
    true,
    function() {
        console.log("Função dentro do Array")
    },
    {
        name: "Diego",
        email: "diego.exemple@gmail.com"
    }
]

// Executando uma função que esta dentro do array
// myArray[3]()

// Acessando um objeto dentro do array
// console.log(myArray[4].name)


// Verifica se um item existe no array
let fruitsListArray = ["Apple", "Orange", "Banana", "Strawberry"]

// console.log(fruitsListArray.includes("Apple"))
// console.log(fruitsListArray.includes("Strawberry"))



// =========================================================================
// MÓDULO: MANIPULAÇÃO DE ARRAYS E FLUXOS DE ARMAZENAMENTO (ATUALIZADO)
// Execute com: node --watch src/pratica-arrays.js
// =========================================================================

// BASE DE DADOS PARA OS EXERCÍCIOS
const filaAtendimento = ["Cliente Alfa", "Cliente Beta", "Cliente Gama"];
const estoqueSKUs = ["MESA-01", "CADEIRA-02", "SOFA-03", "ARM_COZ-04"];
const logsGCP = ["erro_auth", "erro_db_timeout", "erro_webhook_404"];

const painelControle = [
    "Modo Produção",
    1024,
    true,
    function() {
        return "Disparando Alerta: Sistema de mensageria reiniciado!";
    }
];

// =========================================================================
// EXERCÍCIOS PRÁTICOS
// =========================================================================

// ### 1. Ingestão de Novo Contrato (push)
// Dois novos clientes fecharam com a OpenBI ao mesmo tempo.
// Adicione as strings "Cliente Delta" e "Cliente Épsilon" ao FINAL do array 'filaAtendimento' em uma única linha.
// Exiba o array atualizado no console.

// const newContract = filaAtendimento.push("Cliente Delta", "Cliente Épsilon") // Poderia fazer assim ou de forma direta

filaAtendimento.push("Cliente Delta", "Cliente Épsilon")

// console.log(filaAtendimento)

// ### 2. Atendimento de Emergência no Topo (unshift)
// O "Cliente VIP" entrou no suporte com um problema crítico. 
// Adicione ele no INÍCIO (índice 0) do array 'filaAtendimento'.
// Exiba o array no console.

filaAtendimento.unshift("Cliente VIP")

console.log(filaAtendimento)

// ### 3. O Próximo da Fila Sem Erros (shift)
// O analista terminou o atendimento do primeiro cliente da fila.
// Remova o PRIMEIRO elemento do array 'filaAtendimento'. 
// Lembre-se da correção: o método não precisa e não aceita o nome do cliente como argumento. Guarde o removido em uma constante e exiba-o.

const issueResolved = filaAtendimento.shift()

console.log(issueResolved) // atendimento resolvido 
console.log(filaAtendimento) // lista de clientes na fila de atendimento

// ### 4. Descarte de Log Cego (pop)
// Você precisa limpar o log mais recente do array 'logsGCP' para abrir espaço no buffer.
// Remova o ÚLTIMO elemento de 'logsGCP' aplicando o método correto de forma cega (sem passar argumentos).
// Exiba o array resultante.

// Pensando como engenheiro de software, primeiro eu estou verificando emu array atual, removendo o ultimo com pop e exibindo o array atualizado. 

console.log(logsGCP)
logsGCP.pop()
console.log(logsGCP)

// ### 5. Captura Dinâmica do Último SKU (length - 1)
// O estoquista da Keno quer saber qual é o último produto cadastrado no array 'estoqueSKUs'.
// Utilizando a sintaxe correta do JavaScript (com colchetes e length - 1), capture o último elemento de forma dinâmica e exiba no console.

console.log(estoqueSKUs)
const lastElement = estoqueSKUs[estoqueSKUs.length -1]
console.log(lastElement)


// ### 6. Execução de Rotina Interna (Função em Array)
// No array 'painelControle', o índice 3 armazena uma função de recuperação do sistema.
// Acesse essa função pelo índice correto e execute-a, envolvendo-a em um console.log() para ver o retorno dela na tela.

console.log(painelControle[3]())


// ### 7. Quebra de String para Matriz de Caracteres (Array.from)
// O cliente preencheu um código de cupom: const cupom = "OPENBI100".
// Transforme essa string em um array onde cada letra isolada seja um elemento, usando o método 'Array.from'.
// Exiba o resultado.

const cupom = "OPENBI100"

console.log(Array.from(cupom))

// ### 8. Remoção Cirúrgica por Valor (indexOf + splice)
// Você recebeu a ordem de remover o produto "SOFA-03" do array 'estoqueSKUs', mas você não sabe o índice dele de cabeça.
// 1. Use o .indexOf() para descobrir a posição exata do "SOFA-03".
// 2. Use o .splice() passando essa posição encontrada para remover apenas esse 1 elemento.
// Exiba o estoque atualizado.

const productIndex = estoqueSKUs.indexOf("SOFA-03")
console.log(productIndex)

console.log(estoqueSKUs)

estoqueSKUs.splice(productIndex, 1)

console.log(estoqueSKUs)

// ### 9. O Canivete Suíço Completo: Substituição de SKU (splice)
// O produto no índice 1 do seu 'estoqueSKUs' ("CADEIRA-02") mudou de fornecedor.
// Use o método .splice() para ir até o índice 1, deletar esse elemento e, na mesma vaga, adicionar dois novos produtos: "CADEIRA-PRO" e "PUFE-RELAX".
// Exiba o 'estoqueSKUs' final.

console.log(estoqueSKUs)
const updateProduct = estoqueSKUs.splice(1, 1, "CADEIRA-PRO", "PUFE-RELAX")
console.log(estoqueSKUs)

// ### 10. Pente Fino de Segurança (includes)
// Antes de rodar uma automação, verifique se o log "erro_db_timeout" ainda está presente dentro do array 'logsGCP'.
// Use o método .includes() e exiba o resultado (true/false) no console.

// const verificationOfError = logsGCP.includes("erro_db_timeout")
// console.log(verificationOfError)

// const verificationOfError = logsGCP.some(log => log.toLowerCase() === "erro_db_timeout")
// console.log(verificationOfError)

const verificationOfError = logsGCP
    .map(log => log.toLowerCase())
    .includes("erro_db_timeout");

console.log(verificationOfError);

// =========================================================================
// MÓDULO: MANIPULAÇÃO DE ARRAYS E FLUXOS DE ARMAZENAMENTO
// Execute com: node --watch src/pratica-arrays.js
// =========================================================================

// MOCK DE DADOS PARA OS EXERCÍCIOS
// const filaAtendimento = ["Cliente Alfa", "Cliente Beta", "Cliente Gama"];
// const estoqueSKUs = ["MESA-01", "CADEIRA-02", "SOFA-03", "ARM_COZ-04"];
// const baseKeno = ["Empresa X", "Empresa Y"];
// const baseOpenBI = ["Empresa Z", "Empresa W"];

// =========================================================================
// EXERCÍCIOS PRÁTICOS
// =========================================================================

// ### 1. Ingestão de Novo Contrato (push)
// Um novo cliente fechou contrato com a OpenBI.
// Adicione a string "Cliente Delta" ao FINAL do array 'filaAtendimento' utilizando o método correto.
// Exiba o array atualizado no console.


// ### 2. Atendimento de Emergência no Topo (unshift)
// O "Cliente VIP" entrou no suporte com um problema crítico. 
// Adicione ele no INÍCIO (índice 0) do array 'filaAtendimento' para que ele seja o primeiro a ser tratado.
// Exiba o array no console.


// ### 3. Próximo da Fila (shift)
// O analista de suporte terminou de atender o primeiro cliente da lista.
// Remova o PRIMEIRO elemento do array 'filaAtendimento' e guarde-o numa constante chamada 'clienteAtendido'.
// Exiba quem foi atendido e como ficou a fila atual no console.


// ### 4. Descarte de Logs Antigos (pop)
// Você tem uma lista de logs de erros: const logs = ["erro1", "erro2", "erro3"].
// Remova o ÚLTIMO elemento dessa lista (o mais recente/antigo dependendo da pilha).
// Exiba a lista resultante.


// ### 5. Verificação de Disponibilidade de Produto (includes)
// Um cliente da Keno quer saber se o móvel "SOFA-03" está na lista de produtos disponíveis.
// Use o método .includes() para verificar se o SKU existe no array 'estoqueSKUs'.
// Exiba true ou false no console.


// ### 6. Localizador de Posição para Auditoria (indexOf)
// Você precisa saber exatamente em qual posição do índice está o produto "ARM_COZ-04" dentro do 'estoqueSKUs'.
// Use o .indexOf() para encontrar o número do índice e exiba-o no console.


// ### 7. Extração de Amostra para Relatório Parcial (slice)
// O diretor da Keno pediu uma lista contendo apenas os 2 primeiros produtos do seu 'estoqueSKUs' para um relatório rápido.
// Use o método .slice() para extrair esses dois elementos sem modificar o estoque original.
// Exiba o relatório parcial no console.


// ### 8. Fusão de Bancos de Dados de Clientes (concat)
// Você precisa gerar um relatório unificado de faturamento.
// Junte o array 'baseKeno' com o array 'baseOpenBI' em um único array chamado 'carteiraTotal'.
// Exiba o resultado.


// ### 9. Gerador de Cláusula SQL 'IN' (join)
// Para fazer uma consulta no banco de dados, você precisa transformar o array const codigos = [10, 20, 30, 40] em uma string separada por vírgulas (ex: "10,20,30,40").
// Use o .join() para realizar essa formatação e exiba a string no console.


// ### 10. O Superpoder do Dia: Substituição de Fornecedor (splice)
// Lembra do aprendizado de hoje? O produto no índice 1 do seu 'estoqueSKUs' ("CADEIRA-02") foi descontinuado.
// Use o método .splice() para ir até o índice 1, deletar esse 1 elemento e, na mesma vaga, adicionar dois novos produtos: "CADEIRA-LUXO" e "PODE-PUFE".
// Exiba o 'estoqueSKUs' final modificado no console.


// =========================================================================
// MÓDULO: MARATONA DOS 50 EXERCÍCIOS DE ARRAYS (DADOS & NEGÓCIOS)
// Execute com: node --watch src/maratona-arrays.js
// =========================================================================

// // BASE DE DADOS INTEGRADA PARA TODOS OS EXERCÍCIOS
// const filaAtendimento = ["Cliente Alfa", "Cliente Beta", "Cliente Gama"];
// const estoqueSKUs = ["MESA-01", "CADEIRA-02", "SOFA-03", "ARM_COZ-04", "CADEIRA-02"];
// const faturamentoMensal = [12000, 8500, 45000, 3200, 9800];
// const logsServidor = ["auth_success", "db_timeout", "api_error_404", "webhook_disparado"];

// const carteiraClientes = [
//     { id: 101, nome: "Tech Solutions", receita: 5000, ativo: true, tags: ["ti", "premium"] },
//     { id: 102, nome: "Cobmais Clone", receita: 2500, ativo: false, tags: ["financeiro"] },
//     { id: 103, nome: "BPO Express", receita: 15000, ativo: true, tags: ["bpo", "premium"] },
//     { id: 104, nome: "Keno Moveis", receita: 8000, ativo: true, tags: ["moveis"] }
// ];

// =========================================================================
// BLOCO 1: OPERAÇÕES DE ENTRADA, SAÍDA E FILAS (1 ATÉ 10)
// =========================================================================

// 1. push: Adicione a string "Cliente Delta" no final da 'filaAtendimento'.

// 2. push múltiplo: Adicione "SKU-99" e "SKU-100" ao mesmo tempo no final de 'estoqueSKUs'.

// 3. unshift: Insira "Cliente VIP" no início da 'filaAtendimento'.

// 4. unshift múltiplo: Insira os números 50000 e 60000 no início do array 'faturamentoMensal'.

// 5. shift cego: Remova o primeiro elemento da 'filaAtendimento' e guarde na constante 'atendido'.

// 6. pop cego: Remova o último elemento do array 'logsServidor' e exiba a lista resultante.

// 7. pop em cascata: Remova os dois últimos elementos do array 'faturamentoMensal' fazendo dois pops seguidos.

// 8. length dinâmico: Acesse o tamanho atual do array 'carteiraClientes' e exiba uma mensagem: "Total de clientes: X".

// 9. Reset de fila: Use a propriedade length para zerar um array temporário: let temp = [1,2,3]; Faça ele virar [].

// 10. Limpeza total de Logs: Remova o primeiro log de 'logsServidor' usando shift e exiba o log capturado.


// =========================================================================
// BLOCO 2: LOCALIZAÇÃO, VERIFICAÇÃO E AUDITORIA (11 ATÉ 20)
// =========================================================================

// 11. indexOf básico: Descubra em qual posição do índice está o faturamento 45000 no array 'faturamentoMensal'.

// 12. lastIndexOf: O SKU "CADEIRA-02" aparece duplicado no estoque. Ache a última posição onde ele aparece.

// 13. includes de segurança: Verifique se o log "db_timeout" está contido no array 'logsServidor'.

// 14. includes condicional: Cheque se o SKU "SOFA-99" existe no estoque. Se não existir, exiba "Alerta: SKU Faltante".

// 15. find de objeto: Encontre o objeto do cliente que tem o nome exatamente igual a "Cobmais Clone" dentro de 'carteiraClientes'.

// 16. find ativo: Encontre o primeiro cliente da lista 'carteiraClientes' que possui a propriedade 'ativo: true'.

// 17. findIndex corporativo: Descubra a posição do índice do objeto cliente que tem o id igual a 103.

// 18. findIndex inexistente: Tente achar o índice de um cliente com id 999. Veja o número retornado no console.

// 19. some inadimplência: Use o método .some() para checar se existe pelo menos um cliente INATIVO ('ativo: false') na carteira.

// 20. every conformidade: Use o .every() para checar se todos os clientes da carteira possuem faturamento (receita) acima de 1000.


// =========================================================================
// BLOCO 3: SECCIONAMENTO, FUSÃO E FORMATAÇÃO (21 ATÉ 30)
// =========================================================================

// 21. slice amostragem: Extraia os 3 primeiros faturamentos do array 'faturamentoMensal' sem alterar o original.

// 22. slice negativo: Capture os últimos 2 elementos do array 'logsServidor' usando índices negativos.

// 23. concat integrações: Crie um array 'baseCompleta' juntando o array 'filaAtendimento' com o 'estoqueSKUs'.

// 24. join delimitador: Transforme o array 'logsServidor' em uma única string separada por " || ".

// 25. join para SQL: Transforme o array 'estoqueSKUs' em uma string no formato pronto para cláusula SQL: 'MESA-01','CADEIRA-02'...

// 26. splice extração: Vá até o índice 1 do array 'filaAtendimento', delete 1 elemento e exiba a fila modificada.

// 27. splice injeção: No array 'estoqueSKUs', vá até o índice 2, não delete ninguém, mas injete o SKU "RACK-05".

// 28. Array.from strings: Transforme a string "OPENBI" em um array contendo suas letras isoladas.

// 29. Array.from estrutura: Crie um array de 5 posições contendo o número 0 em todas elas usando Array.from({length: 5}, () => 0).

// 30. Cópia por Spread: Crie uma cópia idêntica do array 'logsServidor' em uma nova constante 'copiaLogs' usando o operador [...array].


// =========================================================================
// BLOCO 4: TRANSFORMAÇÃO E FILTRAGEM DE DADOS (31 ATÉ 40)
// =========================================================================

// 31. map multiplicador: Aplique um .map() no array 'faturamentoMensal' para gerar um novo array com os valores corrigidos em 10% (valor * 1.10).

// 32. map strings: Use .map() para transformar a lista 'filaAtendimento' em elementos HTML salvos como strings: "<li>Cliente X</li>".

// 33. map extração de chaves: A partir de 'carteiraClientes', use .map() para extrair apenas os nomes dos clientes em um array de strings.

// 34. filter corte de receita: Filtre o array 'faturamentoMensal' para manter apenas faturamentos que sejam estritamente maiores que 9000.

// 35. filter busca de nicho: Filtre a lista 'carteiraClientes' mantendo apenas os clientes que estão com o status 'ativo: true'.

// 36. filter por tags: Filtre a 'carteiraClientes' para trazer apenas quem tem a tag "premium" (Dica: use .includes dentro do filter).

// 37. sort numérico crescente: Ordene o array 'faturamentoMensal' do menor valor para o maior valor.

// 38. sort numérico decrescente: Ordene o array 'faturamentoMensal' do maior valor para o menor valor.

// 39. sort alfabético de objetos: Ordene a lista 'carteiraClientes' em ordem alfabética com base na propriedade '.nome'.

// 40. reverse invertido: Inverta completamente a ordem dos elementos dentro do array 'logsServidor'.


// =========================================================================
// BLOCO 5: PIPELINES, CONSOLIDAÇÃO E COMBINAÇÕES (41 ATÉ 50)
// =========================================================================

// 41. reduce soma: Use o .reduce() no array 'faturamentoMensal' para somar o faturamento total da empresa.

// 42. reduce média: Use o .reduce() para calcular a média de faturamento mensal com base no array 'faturamentoMensal'.

// 43. Pipeline Filter + Map: Filtre os clientes ativos de 'carteiraClientes' e, em seguida, aplique um map para retornar apenas as receitas deles.

// 44. Pipeline Filter + Reduce: Filtre os clientes que possuem a tag "premium" e use o reduce para somar a receita total apenas deles.

// 45. Validação com Find + Includes: Use o .find() para buscar o cliente com id 101 e verifique se nas suas tags está contido o termo "ti".

// 46. Busca e Remoção Automática: Ache o índice do SKU "SOFA-03" com findIndex e, se ele existir, use o splice para removê-lo do estoque.

// 47. Auditoria com Every e Map: Extraia todas as receitas dos clientes com .map() e depois valide com .every() se todas são maiores que 0.

// 48. Formatação de Moeda em Massa: Mapeie o array 'faturamentoMensal' transformando cada número em uma string formatada como "R$ X,00".

// 49. Destructuring em Loop for...of: Use o loop for...of para percorrer 'carteiraClientes' extraindo direto no laço const { nome, receita } de cada um.

// 50. O Desafio do Fechamento do Mês: Pegue a 'carteiraClientes', filtre apenas os ativos, dobre a receita de cada um (simulando meta batida) e some o total final com reduce.