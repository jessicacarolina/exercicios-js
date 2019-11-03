function exe3() {
    var soma = 0
    var media = 0
    var maior = 0
    var qtde = 0
    var perc = 0
    var qtdeH = 0
    var vet = []
    for( var i=0;i<2;i++){
    var objeto = {};
        // coloca dados no objeto 
        objeto.altura = Number(prompt("Altura"))
        objeto.sexo = prompt("Sexo")
        objeto.idade = Number(prompt("Idade"))
        objeto.olhos = prompt("Cor dos olhos A-Azuis V-Verde C-Castanhos")
        // coloca objeto no vetor
        vet.push(objeto)
    }
    for (var i=0;i<2;i++){
        if((vet[i].olhos == "C") && (vet[i].altura > 1.60)){
            soma = soma + vet[i].idade;
        } 
        media = soma/vet.length;
    }
    for (var i=0;i<2;i++){
        if (vet[i].idade > maior){
            maior = vet[i].idade;
        }
    } 
    for (var i=0;i<2;i++){
        if(((vet[i].sexo == "F") && (vet[i].idade > 20 && vet[i].idade <= 45)) || ((vet[i].olhos == "V") && (vet[i].altura < 1.70))){
        qtde = qtde++;            
        } 
    for (var i=0;i<2;i++){
        if(vet[i].sexo == "M"){
            qtdeH = qtdeH++;
        } 
    perc = qtdeH/100*vet.length
    }
    alert(media + qtde + qtdeH + perc)
    }
}

