/**
  Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
Código Condição de pagamento

1 À vista em dinheiro ou cheque, recebe 10% de desconto
2 À vista no cartão de crédito, recebe 15% de desconto
3 Em duas vezes, preço normal de etiqueta sem juros
4 Em três vezes, preço normal de etiqueta mais juros de 10%
 */

/**
 *  ->Métodos de pagamento
 *  Em dinheiro
 *  Em Cheque
 *  No Cartão
 */

//recebendo precoProduto e transformando o valor para decimal
const precoProduto=parseFloat(prompt('Qual o preço do produto'))
const mensagem=`
Informe o método de pagamento:
1)Dinheiro
2)Cheque
3)Cartão
`
const metodoDePagamento=prompt(mensagem)
console.log(precoProduto)
console.log(metodoDePagamento)

if(metodoDePagamento==1 || metodoDePagamento==2 ){
   const desconto=precoProduto*0.9
   console.log(desconto)
   alert(`O preco final do pagamento é ${desconto} reais.`)
}else if(metodoDePagamento==3){
   /**
    * 1 parcela=15% desconto
    * 2 parcelas=preço do produto
    * 3 ou mais parcelas=acréscimo de 10%
    */
   
   
    const parcelas=parseInt(prompt('Parcele em até 12 vezes:'))
    
    if(parcelas==1){
        const desconto=precoProduto*0.85
        alert(`O preço final do pagamento é ${desconto} reais.`)

    }else if(parcelas==2){
        alert(`O preço final do pagamento é ${precoProduto} reais.`)
    }else if(parcelas>=3 && parcelas<=12){
        const desconto=precoProduto+(precoProduto*0.10)
        alert(`O preço final do pagamento é ${desconto} reais.`)
}else{
    alert('O número de parcelas é inválido!')
}
}
