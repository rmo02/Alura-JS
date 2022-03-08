const cliente = {
    nome: "Ramon",
    idade: 52,
    cpf: "5161616865",
    email:"ramon@email.com",
    fones:["6546546584", "3543654356"],
    dependentes:  [{
        nome: "Pai",
        parentesco: "pai",
        dataNasc: "10/01/1900"
    }]
}

cliente.dependentes.push({
    nome: "mae mae",
    parentesco: "mae",
    dataNasc: "02/02/1900"
})

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="02/02/1900")
console.log(filhaMaisNova[0].nome)