// parametros de função



function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))



// parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha  idade é ${idade}`;

}

console.log(nomeIdade('Ramon', 29))

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5)))