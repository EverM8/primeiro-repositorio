const altura=[]
for(i=0;i<15;i++){
    let naltura=parseFloat(prompt(`Informe a altura da ${i+1}ª pessoa`))
    altura.push(naltura)
}

let maiorAltura=0, menorAltura=Infinity

for(let n of altura){
    if(n>maiorAltura){
        maiorAltura=n

    }else{
        menorAltura=n
    }
}
alert(`a menor altura é ${menorAltura} e a maior altura é ${maiorAltura}`)
