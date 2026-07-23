import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 letras!"),
  age: z.number().min(18, "Menor de idade não entra!"),
  email: z.email("Formato de e-mail inválido!"),
  isAdmin: z.boolean().default(false),
});

type User = z.infer<typeof userSchema>;

// Usuario do sistema
const systemUser: User = {
  name: "Diego",
  age: 18,
  email: "user.example@email.com",
  isAdmin: true,
};

const systemUserResult = userSchema.safeParse(systemUser);

console.log(systemUserResult);

// Usuario padrão - Utilizando condicoes
const standardUser: User = {
  name: "Die",
  age: 18,
  email: "user.example@email.com",
  isAdmin: false,
};

const standardUserResult = userSchema.safeParse(standardUser);

if (standardUserResult.success) {
  console.log("Pode entrar", standardUserResult.data);
} else {
  console.log("Barrado", standardUserResult.error);
}
