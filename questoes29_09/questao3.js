ano=parseInt(prompt("Informe o ano que deseja:"))
if(ano%400==0 && ano%4==0){
    alert("Ano bissexto")
}else{
    alert("Este ano não é bissexto")
}