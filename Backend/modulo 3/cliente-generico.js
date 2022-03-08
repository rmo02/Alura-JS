function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = this.email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const ramon = new Cliente("Ramon", "6315646541", "ramon@email.com", 100)
console.log(ramon)