const cliente = {
    nome: "Ramon",
    idade: 52,
    cpf: "5161616865",
    email:"ramon@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info=>console.log(cliente[info]))