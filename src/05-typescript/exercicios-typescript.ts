const _user = "Alexandre"; // Por ser uma const o TS tipa com o proprio valor da variavel pq esse valor nunca muda - Tipagem Literal / Literal Types.
const _usersName = "João"; // Por ser um let o TS tipa de forma mais ampla como STRING, pq o valor da variavel pode ser outra string como "Maria" - Tipagem Ampla / Type Widening.
const _ageUsers: number = 19;
const _isActive: boolean = true;
const _age = 18;

// console.log([usersName, user, ageUsers, isActive])

// Arrays
const _valores = [8, 9, 10, 12.5, "Diego"]; // Aqui o TS inferiu dois tipos. O array notas pode receber valores do tipo NUMBER E STRING (number | string).
const _notas: number[] = [8, 9, 10, 12.5];

// Objects (Types and Interfaces)

// O type é excelente para criar os Union Types (string | number)
type User = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  address?: {
    street: string; // Definindo os tipos de adress inline
    number: number;
    city: string;
  };
};

// Tipando objetos aninhados - Definindo os tipos de adress em outro type.
type Address = {
  street: string;
  number: number;
  city: string;
  zipCode?: string;
};

type _UserExemple = {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  address?: Address; // adress é do tipo Address
};

// Objeto - Não importa a ordem dentro do objeto, e sim que use a estrutura definida no type Users.
const _users: User = {
  isActive: false,
  name: "Silva",
  email: "diego@exemple.com",
  age: 21,
};

// Array de objetos
const _usersList: User[] = [
  { name: "Maria", age: 22, email: "maria@email.com", isActive: true },
  { name: "José", age: 34, email: "jose@email.com", isActive: false },
];

// Array
type Types = number | string | boolean;
const _list: Types[] = ["Maria", 22, "maria@email.com", true];

// Tipagem de funções
function _sum(a: number, b: number): number {
  return a + b;
}

// Funções Assíncronas (Promises): Tipar o retorno de algo que demora
async function _buscarDados(): Promise<string> {
  return "Dados carregados";
}

// Criamos o molde do que vai vir no JSON
type UsuarioDaApi = {
  id: string;
  nome: string;
  email: string;
};

// Avisamos que a Promise vai entregar esse molde quando terminar
async function _buscarUsuarioNoBanco(): Promise<UsuarioDaApi> {
  return {
    id: "123",
    nome: "Diego",
    email: "diego@email.com",
  };
}

// Literal Types: Restringir a valores exatos - Esse status so podem ser do tipo pendente, pago ou cancelado.
type OpcoesDeStatus = "pendente" | "pago" | "cancelado";

const _statusPedido: OpcoesDeStatus = "pago";

// interface foi feita especificamente para desenhar a estrutura de objetos e classes.
interface ProductTest {
  id: string;
  name: string;
  price: number;
}

const _myProduct: ProductTest = {
  id: "P-001",
  name: "Teclado Mecanico",
  price: 450.0,
};

// Criando interface com herença
interface VeiculoTeste {
  wheels: number;
  color: string;
}

interface Carro extends VeiculoTeste {
  mark: string;
  hasAirConditioning: boolean;
}

const _myCar: Carro = {
  wheels: 4,
  color: "Branco",
  mark: "BMW",
  hasAirConditioning: true,
};

// Use interface quando estiver definindo o formato de objetos puros, contratos de classes ou coisas que vão usar muita herança (o extends).
// Use type quando você precisar de coisas mais flexíveis, como combinar tipos (string | number), usar tipos literais ou trabalhar com tipagens utilitárias mais complexas (como o Omit ou Pick que o TypeScript oferece).

// Utility Types
type Usuario = {
  id: string;
  nome: string;
  email: string;
  senhaHash: string;
  isAtivo: boolean;
};

// Omit - "TS, pegue o Usuario, mas remova a propriedade 'senhaHash'"
type _UsuarioSeguro = Omit<Usuario, "senhaHash">;

// Por baixo dos panos, o TypeScript acabou de criar isso pra você automaticamente:
// { id: string; nome: string; email: string; isAtivo: boolean; }

// Pick - "TS, pegue o Usuario, mas eu quero APENAS o 'nome' e o 'email'"
type _EditarPerfil = Pick<Usuario, "nome" | "email">;

// Por baixo dos panos, o TypeScript criou isso:
// { nome: string; email: string; }

// Tipando TUPLAS no TS.
// Isso é uma Tupla! Note que os tipos estão DENTRO dos colchetes.
type UsuarioFixos = [string, number, string, boolean];

// Certo
const _listaCerta: UsuarioFixos = ["Maria", 22, "maria@email.com", true];

// // ERRO! (O TS avisa: O primeiro item tem que ser string, não boolean)
// const listaErrada: UsuarioTupla = [true, "Maria", 22, "maria@email.com"];

// // ERRO! (O TS avisa: Faltou o quarto item, que é o boolean)
// const listaIncompleta: UsuarioTupla = ["Maria", 22, "maria@email.com"];

type UsuarioArray = number | string | boolean;
const _listaCertaArray: UsuarioArray[] = ["Maria", 22, "maria@email.com", true];

type UsuarioTupla = [string, number, string, boolean];
const _listaCertaTupla: UsuarioTupla = ["Maria", 22, "maria@email.com", true];

// ================================================
// EXERCÍCIO 1: O Carrinho de Compras do E-commerce
// ================================================
/*
O Problema de Negócio:
Você precisa modelar a estrutura de dados para o carrinho de compras de uma loja virtual. O sistema precisa saber exatamente o que tem dentro do carrinho para calcular o frete e o total.

Requisitos da modelagem:
- Crie um molde para representar um Produto (deve ter um código único, nome, preço e categoria).
- Crie um molde para representar um Item do Carrinho (que é basicamente um Produto atrelado a uma quantidade).
- Crie o molde principal do Carrinho, que deve conter o ID do cliente, uma lista de Itens do Carrinho e o status atual do pedido (que só pode ser: "aberto", "fechado" ou "abandonado").
*/

type Status = "open" | "closed" | "abandoned";

interface Product {
  productId: number;
  name: string;
  price: number;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface _Cart {
  customerId: number;
  cartItems: CartItem[];
  status: Status;
}

// ==============================================
// EXERCÍCIO 2: O Portal de Recursos Humanos (RH)
// ==============================================
/*
O Problema de Negócio:
A equipe de RH usa um sistema para gerenciar funcionários. Eles precisam de diferentes "visões" dos dados do funcionário dependendo da tela do sistema, para não vazar dados sensíveis como salário.

Requisitos da modelagem:
- Crie um molde base e completo do Funcionário (ID, nome, cargo, salário, data de contratação e se é gerente ou não).
- A tela de "Perfil Público" precisa de um molde que tenha APENAS o nome e o cargo do funcionário. (Dica: use Utility Types para reaproveitar o molde base).
- A tela de "Cadastro de Novo Funcionário" precisa de um molde que tenha todas as informações do funcionário, EXCETO o ID e a data de contratação (pois o sistema vai gerar isso automaticamente depois). (Dica: use Utility Types para reaproveitar o molde base).
*/

interface Funcionario {
  funcionarioId: number;
  nome: string;
  cargo: string;
  salario: number;
  dataContratacao: Date;
  eGerente: boolean;
}

type _PerfilPublico = Pick<Funcionario, "nome" | "cargo">;

type _CadastroNovoFuncionario = Omit<
  Funcionario,
  "funcionarioId" | "dataContratacao"
>;

// ==========================================
// EXERCÍCIO 3: O Gateway de Pagamentos
// ==========================================
/*
O Problema de Negócio:
Você está construindo o módulo que recebe os pagamentos dos clientes. O cliente pode escolher pagar de três formas diferentes, e o sistema precisa garantir que os dados corretos sejam exigidos para cada forma.

Requisitos da modelagem:
- Crie moldes separados para três métodos de pagamento: Cartão de Crédito (precisa do número, validade e CVV), Pix (precisa apenas da chave Pix) e Boleto (precisa apenas da data de vencimento).
- Crie um tipo chamado Transacao, que represente um pagamento. Essa transação deve conter o valor da compra, e o método de pagamento (que pode ser QUALQUER UM dos três criados acima - Union Type).
*/

interface CartaoCredito {
  numeroCartao: string;
  validade: string;
  cvv: string;
}

interface Pix {
  chavePix: string;
}

interface Boleto {
  dataVencimento: string;
}

type MetodoPagamento = CartaoCredito | Pix | Boleto;

interface _Transacao {
  valorCompra: number;
  metodoPagamento: MetodoPagamento;
}

// ==========================================
// EXERCÍCIO 4: Frota de Logística
// ==========================================
/*
O Problema de Negócio:
Uma transportadora precisa cadastrar os veículos da sua frota no sistema. Todos os veículos têm dados em comum, mas caminhões e motos têm regras específicas.

Requisitos da modelagem:
- Crie um contrato (interface) base para Veiculo com placa, ano de fabricação e cor.
- Crie um contrato específico para Caminhao que herde (extends) os dados do Veiculo base, mas adicione a capacidade máxima de carga em toneladas e a quantidade de eixos.
- Crie um contrato específico para Moto que herde os dados do Veiculo base, mas adicione se ela tem baú para entregas ou não (booleano).
*/

interface Veiculo {
  placa: string;
  anoFabricacao: number;
  cor: string;
}

interface _Caminhao extends Veiculo {
  capacidadeMaxima: number;
  quantidadeEixos: number;
}

interface _Moto extends Veiculo {
  temBau: boolean;
}

// ==========================================
// EXERCÍCIO 5: O Padrão de Resposta da API
// ==========================================
/*
O Problema de Negócio:
O time de frontend reclamou que a sua API devolve os dados de forma bagunçada. Às vezes devolve só o dado, às vezes devolve uma mensagem de erro, e eles nunca sabem o que esperar. Você precisa padronizar como a API responde.

Requisitos da modelagem:
- Crie um molde de Resposta de Sucesso, que deve obrigatoriamente conter um código numérico de status (ex: 200) e uma propriedade de dados (pode ser uma string ou um array de qualquer coisa).
- Crie um molde de Resposta de Erro, que deve conter o código numérico de status e uma Tupla contendo o código do erro interno (texto) e a mensagem para o usuário final (texto).
- Simule a assinatura de uma função assíncrona chamada buscarCliente que promete devolver uma resposta da API. O retorno deve forçar o uso desse seu novo padrão (ou seja, retornar OU a resposta de sucesso OU a resposta de erro).
*/

interface RespostaSucesso {
  status: number;
  dados: string | unknown[];
}

type CodigoErro = [string, string];

interface RespostaErro {
  status: number;
  erro: CodigoErro;
}

type RespostaApi = RespostaSucesso | RespostaErro;

async function _buscarCliente(): Promise<RespostaApi> {
  return {
    status: 200,
    dados: ["Cliente João", "Cliente Maria"],
  };
}
