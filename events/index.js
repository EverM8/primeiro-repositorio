/**
 * Criar uma função responsavel por mostrar o alerta na tela
 */
function mostrarAlerta(){
    /**
     * O objeto document é objeto que faz uma representação HTML do seu site dentro do JavaScript
     */
    /**
     * A propiedade classList retorna um array com todas as classes CSS que um elemento possui
     */
    /**
     * classList.add serve para adicionar novas classes dinamicamente dentro de um elemento HTML 
     */
    const divAlerta= document.getElementById("alerta")
    divAlerta.classList.add('mostrar')

}

function fecharAlerta(){
    /**
     * classList.remove() remove  um classe dinamicamente dentro de um elemento HTML
     */
    const divAlerta=document.getElementById('alerta')
    divAlerta.classList.remove('mostrar')
}

const btnMostrar=document.getElementById('mostrar')
const btnFechar=document.getElementById('fechar')
/**
 * addEventListener é um método que permite ouvir o evento do HTML pelo JavaScript
 */
/**
 * Se eu precisar passar uma função como parâmetro para outra eu passo a referência dela, ou seja, a função sem o parênteses na frente
 */
btnMostrar.addEventListener('click', mostrarAlerta)
btnFechar.addEventListener('click', fecharAlerta)