/**
 * operadores de comparação
 */

// verdadeiro(true) falso(false) ==
const msg='eu sou uma mensagem'
const msg2='eu sou outra mensagem'

console.log(msg==msg2) // false

let a=75
let b='75'

console.log(a==b) //true

// idênticos(===) se o conteúdo e o tipo são iguais
console.log(a===b) //false

let c=5 //number
c='Olá mundo' // Alterou para string

// diferença
console.log(msg!=msg2)//true
console.log(a!=b) //false
console.log(a !== b) // true /diferente e também compara o conteúdo da variavel

a=56
b-30
let d =500
let e=500

console.log(a>b)//true
console.log(d>=e) //true

console.log(3< 7.5)//true
console.log(7.5 <7.5)//false
console.log(8<=8)//true