/**
 * Objeto é uma estrutura que permite organizar dados na forma de chave-valor
 */

let end={
        rua:'Rua Principal',
        numero:456,
        estado:"DF",
        complemento: 'Sem complemento',
        cep:'123000-000'
}

let pessoa= {
    nome:'Shisho',
    idade: 60,
    cpf:"123.123.123-12",
    altura:156,
    //destructuring
    endereco: {...end},/* ...=operador que desestrutura um objeto em um array */
    solteiro: true,
    habilidade:['React','Java','JavaScript','Golang','Rust'],
    cumprimentar(){
        /**
         * Quando desejo referenciar o mesmo objeto dentro de si mesmo, eu utilizo a palavra chave this
         */
        console.log(`Hi, my name is ${this.nome}`)
    }
}

/*console.log(end)
console.log(pessoa.endereco.estado)*/
/*pessoa.cumprimentar()

pessoa.nome='Pablo Escobar'
pessoa.cumprimentar()
pessoa.habilidade.push('Angular')
console.log(pessoa.habilidade)
console.log(pessoa['cpf'])*/
console.log(end.rua)
console.log(pessoa.endereco.rua)

pessoa.endereco.rua='Rua Secundária'

console.log(pessoa.endereco.rua)
console.log(end.rua)
