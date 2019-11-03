function principal(){
    var vet = []
    leitura(vet)
    mediaSalarial(vet)
    mediaFihos(vet)
    maiorSalario(vet)
    percentual(vet)
}
function leitura(vet){
    do {
        var objeto
        objeto.salario = Number(prompt('Qual seu salário: '))
        objeto.filhos = Number(prompt('Quantos filhos você tem: '))
        vet.push(objeto)
        var opcao = prompt('Quer continuar S/N');
    }
    while(opcao != 'N');
}
function mediaSalarial(vet){
    soma = 0
    for(i=0; i<vet.length; i++){
        soma = soma + vet[i].salario
    }
    alert(`A média é ${soma/vet.length}`)
}
function mediaFihos(vet){
    somaF = 0
    for(i=0; i<vet.length; i++){
        somaF = somaF + vet[i].filhos
    }
    alert(`À média é ${somaF/vet.length}`)
}
function maiorSalario(vet){
    maiorSal = 0
    for(i=0; i<vet.length; i++){
        if(vet[i].salario > salario){
            maiorSal = vet[i].salarios
        }   
    }
    alert(`O maior salário é ${maiorSal}`) 
}
function percentual(vet){
    var qtde = 0
    for(i=0; i < vet.length; i++){
        if(vet[i].salario < 350){
            qtde++
        }
    }
    alert(`Percentual ${qtde/vet.length*100}`)
}