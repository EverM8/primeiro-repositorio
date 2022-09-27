let AB=prompt("Informe o lado AB do triangulo:")
let AC=prompt("Informe o lado AC do triangulo:")
let BC=prompt("Informe o lado BC do triangulo:")

if(AB==AC==BC){
    alert("Este triângulo é equilátero")
}if(AB==AC || AB==BC || BC==AC){
    alert("Este triângulo é isóceles ")
}

else{
    alert("Este triângulo é escaleno")
}
