/** 
 * Operadores lógicos
 */

/// Operador E (&&)

//V-> VERDADEIRO
//F-> FALSO

/**
 * V V-> V
 * F V-> F
 * V F-> F
 * F F-> F
 */

// média precisa ser >= 7 E preciso ter, no mìnimo, 80% de presença
const media=(10+6+10)/3
const presenca=0.7

console.log(media >=7&&presenca>=0.8)

// Operador OU (||)

/**
 * V V-> V
 * F V-> V
 * V F-> V
 * F F-> F
 */
 console.log(4>7 || 3<2)
 console.log(4>2 || 2<12) 

 const idade=30

 console.log(idade>=16 || idade<60)

 // Operador NOT

 /**
  * NOT V->F
  * NOT F->V
  */
const resultado = 5<3
 console.log(!resultado)

 const logado=false
 if(!logado){
    console.log('Acesso negado!')
 }