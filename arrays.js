/**
 * Arrays ou Vetores é um tipo especial que te permite armazenar 
 * diversos valores em apenas um loca
 */

// Criando um Array(new Array ou [])
/*let arr = new Array()
let arr3 = [] //mais usada
let arr2 = new Array(5)
Dentro de um Array eu posso ter vários tipos  de dados*/
/**      0  1  2     3                                      4         5    6    7 */
/*let arr=[10,15,9.8,'Eu sou um texto dentro de um array','Olá mundo',true,false,true]
console.log(arr[6])
arr[6]='outro texto'
console.log(arr[6])
arr[8]='Agora a posição 8 existe dentro do arr'
console.log(arr)*/

const lista=['João', 'Maria', 'Paulo', 'Pedro', 'Vitória', 'Augusto', 'Fábio', 'Larissa']
console.log(lista)
lista.push('Roberta')//adiocina um valor no final do array
console.log(lista)
lista.unshift('Gustavo') //adiciona um valor no início do array
console.log(lista)
lista.pop()// remove o ultimo valor do array
console.log(lista)
lista.shift()// remove o primeiro valor de um array
console.log(lista)
console.log(lista.concat('Julia'))// cria um novo arry adiciona o valor informado no final
console.log(lista)
console.log(lista.join('->'))//João ->Maria->