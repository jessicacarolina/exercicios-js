function somaN(){
    var N = Number(prompt("Digite um numero : "));
    somar(N);
    alert
}
function somar(N){
    var soma=0;
    for(i=0;i<=N;i++){
        soma = soma + i;
    }
    alert(`Resultado : ${soma}`)
}