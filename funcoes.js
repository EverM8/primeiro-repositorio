/**
 * Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento de JavaScript
 * um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve
 * difini-la em algum lugar no escopo do qual você quiser chamá-la
 */

/**
 * Parâmetro
 * 
 * São valores que passamos para as funções, para que elas utilizem esses valores dentro delas
 */

//passar um valor como parâmetro para mostra-lo dentro do alert
function cumprimentar(mensagem, repetir = 1){
    for(let i=1;i<=repetir;i++){
        alert(mensagem)
    }
    
    //document.write(`<p>${mensagem}</p>`)
}

function soma(num,num2){
    /**
     * O return serve para enviar o resultado da execução da função
     */
   return num+num2
}

function maiorvalor(a,b){
    if(a>b){
        return a
    }else{
        return b
    }
}


let resultado=soma(7,7.5)
console.log(resultado)
console.log(maiorvalor(5,10))

const num1=parseInt(prompt(`Informe o primeiro numero`))
const num2=parseInt(prompt(`Informe o segundo numero`))

alert(`O maior número entre os informados é ${maiorvalor(num1,num2)}`)

//cumprimentar('Hello World!', 3)
/*cumprimentar('I like JavaScript')
cumprimentar('JavaScript > C++')*/


/**
 * Criem uma função que gera p resultado de uma equação do segundo grau
 * ax²+bx+c=0
 * delta=b²-4ac
 * baskara=(-b+-raiz de delta)/2a
 */

function funcao(a,b,c){
    const delta=b**2-4*a*c
    const baskara=(-b+Math.sqrt(delta))/(2*a)
    const baskara2=(-b-Math.sqrt(delta))/(2*a)
    return [baskara, baskara2]
}

alert(`Baskara ${funcao(1,-1,-12)}`)
