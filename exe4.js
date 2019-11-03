function exe3() {
    var soma = 0
    var media = 0
    var maior = 0
    var menor;
    var qtde = 0
    var vet = []
    for( var i=0;i<20;i++){
    var objeto = {};
        // coloca dados no objeto 
        objeto.idade = Number(prompt("Idade"))
        objeto.sexo = prompt("Sexo")
        objeto.rendafamiliar = Number(prompt("Renda Familiar"))
        objeto.filhos = prompt("Número de filhos")
        menor = vet[0]
        // coloca objeto no vetor
        vet.push(objeto)
    }
    for (var i=0;i<20;i++){
            soma = soma + vet[i].rendafamiliar;
        } 
        media = soma/vet.length;
    }
    for (var i=0;i<20;i++){
        if (vet[i].idade > maior){
            maior = vet[i].idade;
        }
    } 
    for (var i=0;i<20;i++){
        if (vet[i].idade < menor){
            menor = vet[i].idade;         
        } 
    for (var i=0;i<20;i++){
        if((vet[i].sexo == "F") && (vet[i].filhos > 2) && (vet[i].rendafamiliar < 600)){
            qtde = qtde++;
        } 
    }
    alert(media + maior + menor + qtde)
}


