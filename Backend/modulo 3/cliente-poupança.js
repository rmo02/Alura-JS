function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = this.email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ramon = new ClientePoupanca("ramon", "1651635165", "ramon@email.com", 100,200)

console.log(ramon)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ramon.depositarPoup(50)

console.log(ramon.saldoPoup)