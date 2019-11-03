function valor(){
    var n = Number(prompt("Digite um numero : "))
    defina(n)
}
function defina(n){
    if(n < 0){
        alert("Numero Negativo");
    }
    else if(n > 0){
        alert("Numero Positivo");
    }
    else{
        alert("Você digitou 0")
    }
}