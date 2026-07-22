const user = "Alexandre"; // Por ser uma const o TS tipa com o proprio valor da variavel pq esse valor nunca muda - Tipagem Literal / Literal Types.
let usersName = "João"; // Por ser um let o TS tipa de forma mais ampla como STRING, pq o valor da variavel pode ser outra string como "Maria" - Tipagem Ampla / Type Widening.
let ageUsers: number = 19;
let isActive: boolean = true;
const age = 18;

// console.log([usersName, user, ageUsers, isActive])

// Arrays
let valores = [8, 9, 10, 12.5, "Diego"]; // Aqui o TS inferiu dois tipos. O array notas pode receber valores do tipo NUMBER E STRING (number | string).
let notas: number[] = [8, 9, 10, 12.5]


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
}

// Tipando objetos aninhados - Definindo os tipos de adress em outro type.
type Address = {
    street: string;
    number: number;
    city: string;
    zipCode?: string;
}

type UserExemple = {
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    address?: Address; // adress é do tipo Address
}

// Objeto - Não importa a ordem dentro do objeto, e sim que use a estrutura definida no type Users.
let users: User = {
    isActive: false,
    name: "Silva",
    email: "diego@exemple.com",
    age: 21,
};

// Array de objetos
const usersList: User[] = [
    {name: "Maria", age: 22, email: "maria@email.com", isActive: true},
    {name: "José", age: 34, email: "jose@email.com", isActive: false}
];

// Array
type Types = number | string | boolean;
const list: Types[] = ["Maria", 22, "maria@email.com", true];

// Tipagem de funções
function sum(a: number, b: number): number {
  return a + b;
}

// Funções Assíncronas (Promises): Tipar o retorno de algo que demora
async function buscarDados(): Promise<string> {
  return "Dados carregados";
}

// Criamos o molde do que vai vir no JSON
type UsuarioDaApi = {
  id: string;
  nome: string;
  email: string;
};

// Avisamos que a Promise vai entregar esse molde quando terminar
async function buscarUsuarioNoBanco(): Promise<UsuarioDaApi> {
  return {
    id: "123",
    nome: "Diego",
    email: "diego@email.com"
  };
}

// Literal Types: Restringir a valores exatos - Esse status so podem ser do tipo pendente, pago ou cancelado.
type OpcoesDeStatus = "pendente" | "pago" | "cancelado";

let statusPedido: OpcoesDeStatus = "pago";


// interface foi feita especificamente para desenhar a estrutura de objetos e classes.
interface Product {
    id: string;
    name: string;
    price: number;
}

const myProduct: Product = {
    id: "P-001",
    name: "Teclado Mecanico",
    price: 450.00
}

// Criando interface com herença
interface Veiculo {
  wheels: number;
  color: string;
}

interface Carro extends Veiculo {
    mark: string;
    hasAirConditioning: boolean;
}

const myCar: Carro = {
    wheels: 4,
    color: "Branco",
    mark: "BMW",
    hasAirConditioning: true,
}

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
type UsuarioSeguro = Omit<Usuario, "senhaHash">;

// Por baixo dos panos, o TypeScript acabou de criar isso pra você automaticamente:
// { id: string; nome: string; email: string; isAtivo: boolean; }


// Pick - "TS, pegue o Usuario, mas eu quero APENAS o 'nome' e o 'email'"
type EditarPerfil = Pick<Usuario, "nome" | "email">;

// Por baixo dos panos, o TypeScript criou isso:
// { nome: string; email: string; }


// Tipando TUPLAS no TS.
// Isso é uma Tupla! Note que os tipos estão DENTRO dos colchetes.
type UsuarioFixos = [string, number, string, boolean];

// Certo 
const listaCerta: UsuarioFixos = ["Maria", 22, "maria@email.com", true];

// // ERRO! (O TS avisa: O primeiro item tem que ser string, não boolean)
// const listaErrada: UsuarioTupla = [true, "Maria", 22, "maria@email.com"];

// // ERRO! (O TS avisa: Faltou o quarto item, que é o boolean)
// const listaIncompleta: UsuarioTupla = ["Maria", 22, "maria@email.com"];


type UsuarioArray = number | string | boolean;
const listaCertaArray: UsuarioArray[] = ["Maria", 22, "maria@email.com", true];

type UsuarioTupla = [string, number, string, boolean];
const listaCertaTupla: UsuarioTupla = ["Maria", 22, "maria@email.com", true];