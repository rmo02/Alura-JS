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
    },
    {
    nome: "mae mae",
    parentesco: "mae",
    dataNasc: "02/02/1900" }
],
saldo:100,
depositar: function(valor) {
    this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)