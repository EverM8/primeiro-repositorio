///**Crie um algortimo que recebe informações de 15 produtos. Cada produto possui nome, marca, uma foto (link de uma imagem da internet), preço unitário e a quantidade de produtos em estoque. Ao receber essas informações dos produtos, imprima no HTML essas informações de cada produto e o produto entre o preço e a quantidade de produtos em estoque (preço total). */


let produto=[
{
    nome: '',
    marca:'',
    foto:'',
    preco: 0,
    estoque: 0
}
]

for(i=0;i<15;i++){
   produto.nome=prompt(`Informe o ${i+1}º produto:`)
    
    produto.marca=prompt(`Informe a marca do(a) ${produto.nome} :`)
     
    
     produto.foto=prompt(`Envia a foto do(a) ${produto.nome} :`)
        
       
        produto.preco=prompt(`Informe o preço do(a) ${produto.nome}:`)
        
        
        produto.quantidade=prompt(`Informe a quantidade de ${produto.nome} no estoque:`)
        
       
     
        document.write(`<hr><p>Produto: ${produto.nome} </p>`)

     document.write(`</p>Produto: ${produto.marca}</p>`)
        
     document.write(`<p>Foto: \n<img src="${produto.foto}" alt=""></p>`)

     document.write(`<p>Preço: ${produto.preco}R$</p>`)
     
     document.write(`<p>Quantidade no estoque: ${produto.quantidade}</p>`)
    }


