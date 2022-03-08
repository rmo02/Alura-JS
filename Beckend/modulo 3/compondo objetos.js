const cliente = {
    nome: "Ramon",
    idade: 52,
    cpf: "5161616865",
    email:"ramon@email.com",
    fones:["6546546584", "3543654356"]
}

cliente.dependentes = {
    nome: "Pai",
    parentesco: "pai",
    dataNasc: "10/01/1900"
}

console.log(cliente)

cliente.dependentes.nome = "Pai pai"

console.log(cliente)