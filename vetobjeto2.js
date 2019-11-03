function vetobjeto2() {
    var vet = []
    for( var i=0;i<3;i++){
    var objeto = {}
        // coloca dados no objeto 
        objeto.salario = Number(prompt("Salario"))
        objeto.sexo = prompt("Sexo")
        objeto.idade = Number(prompt("Idade"))
        objeto.filhos = Number(prompt("Filhos"))
        // coloca objeto no vetor
        vet.push(objeto)
    }
    var soma = 0
    var sFilhos = 0
    for (var i=0;i<3;i++){
        soma = soma + (vet[i].salario)
        sFilhos = sFilhos + (vet[i].filhos) 
    }
    alert (soma/3)
    alert (sFilhos/3)
}
    