const vogais=["A",'E','I','O','U','a',"e","i","o","u"]
let letra=prompt("Informe uma letra:")


if(letra==vogais.find(element=>element==letra)){
    alert(`A letra ${letra} é uma vogal`)
}else{
    alert(` ${letra} não é uma vogal`)
}
