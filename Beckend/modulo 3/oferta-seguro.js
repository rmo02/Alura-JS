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

//const propsClientes =Object.keys(cliente);
//console.log(propsClientes)

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)