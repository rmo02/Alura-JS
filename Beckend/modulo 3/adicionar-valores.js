const cliente = {
    nome: "Ramon",
    idade: 52,
    cpf: "5161616865",
    email:"ramon@email.com"
}

cliente.fone = "465464787"

console.log(cliente);

delete cliente.fone // ou delete cliente["fone"]
console.log(cliente) 