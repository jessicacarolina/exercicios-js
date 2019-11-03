function exe5() {
    var vet = []
    for( var i=0;i<5;i++){
    var objeto = {}
        // coloca dados no objeto 
        objeto.codigo = Number(prompt("Codigo"))
        objeto.descricao = prompt("Descrição")
        objeto.qtde = Number(prompt("Qtde"))
        objeto.preco = Number(prompt("Preço"))
        // coloca objeto no vetor
        // o j percorre o vetor
        vet.push(objeto)
        for(var j=0; j<vet.length; j++){
            if (objeto.codigo < vet[i].codigo){
                vet.splice(j, 0, objeto);
                alert("Adicionado com sucesso")
                break; 
            }
        }
        if (j == vet.length){   
            vet.push(objeto);
            alert("Adicionado com sucesso")
        }
    }
    // permite o usuario alterar os valores
    var cod = Number(prompt("Informe codigo novo"))
    for(var i=0; i<5; i++){
        if (cod == vet[i].codigo){
            vet[i].descricao = prompt("Descrição")
            vet[i].qtde = Number(prompt("Qtde"))
            vet[i].preco = Number(prompt("Preço"))
            break;
        }
    }
    if(i == 5){
        alert("Produto não existe")
    }
    for(var i=0; i<vet.length; i++){ // mostrar o vetor
        alert(vet[i].codigo + " " + vet[i].descricao + " " + vet[i].preco + " " + vet[i].qtde)
    }
} 