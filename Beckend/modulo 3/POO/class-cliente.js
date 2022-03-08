class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const ramon =  new Cliente("Ramon", "ramon@email.com", "543543543", 150)

AnalyserNode.exibirSaldo()
console.log(ramon)