// Delimitaçôes de Strings

const aspasSimples='Olá mundo'
console.log(aspasSimples)

// caracteres de escapa

const aspasDuplas="Olá eu sou o \nJavaScript. Eu sou melhor que o Python"
console.log(aspasDuplas)

const textoComCrase=`Olá eu sou o Java Script. Eu sou melhor que o Python`
console.log(textoComCrase)

// métodos das strings

const texto='O JavaScript foi criado alguns anos após o Python. No entanto, o JavaScript é melhor'
          //'012345.... contagem dos caracteres inicia do 0
console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens. '))
//console.log(texto[2], texto[17])
console.log(texto.substring(2,12))//substring=inicia o texto a partir do número do caracter indicado, recortando o texto
console.log(texto.replace('JavaScript','C++')) //replace=substitui a primeira ocorrência da pesquisa
console.log(texto.replaceAll('JavaScript','Kotlin'))
console.log(texto.replace(/JavaScript/g,'php'))
console.log(texto.replace(/JavaScript/gi,'php'))

const html='<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))//startsWith=testa se a tag iniciou com a variavel indicada

console.log(html.endsWith('</body>'))//endsWith=testa se a tag terminou com a variavel indicada

const mensagem= "                                Olá, Mundo  "
console.log(mensagem.trim())//trim=limpa o texto, retirando os espaços em branco

let senha="sonic"

console.log(senha.length)
console.log(senha.length>=8)