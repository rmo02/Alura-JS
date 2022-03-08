const clientes = [
    {
        nome: "Ramon",
        cpf: "729156924756",
        dependentes:[{
            nome: "Sara",
            parentesco: "filha",
            dataNasc: "25/04/2000"
        },
        {
            nome:"Samia",
            parentesco: "filha",
            dataNasc: "02/05/2001"
        }],
    },
    {
        nome: "Juliana",
        cpf:"5132165168",
        dependentes:[{
            nome:"Sophia",
            parentesco: "filha",
            dataNasc: "30/02/2001"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes);