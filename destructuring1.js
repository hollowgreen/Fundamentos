// novo recusro do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000,
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, BemHumorado = true} = pessoa
console.log(sobrenome, BemHumorado)

const { endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num}} = pessoa
console.log(ag, num)
