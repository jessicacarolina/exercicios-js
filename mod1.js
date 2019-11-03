function exmod1(){
    var n = Number(prompt('Informe um numero'));
    var resultado = exe1_1(n);
    alert(resultado)
}
function exe1_1(n){
    var soma = 0
    for(var i=1; i<=n; i++){
        soma = soma + 1
    }
    return soma
}