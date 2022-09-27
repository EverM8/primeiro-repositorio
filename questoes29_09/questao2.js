let n=parseInt(prompt('Informe o numero que deseja o fatorial:'))
while(n<0 || isNaN(n)){
    alert('Informe apenas numeros inteiros');
    let n=parseInt(prompt('Informe o numero que deseja o fatorial:'))
}

let fatorial=1
for(i=n;i>0;i--){

    
        fatorial= fatorial*i
    
} alert(`O fatorial de ${n} é ${fatorial}`)
