var vendas = [], comissoes = [], nomes = [], valores = [];
function cadastra(){
    vendas.push(document.getElementById("venda").value);
    comissoes.push(document.getElementById("comissao").value);
    nomes.push(document.getElementById("nome").value);
    document.getElementById("saida").innerHTML = "Inserido com sucesso"
}
function relatorio(){
    var i = 0;
    for( i = 0; i <vendas.length; i++){
        valores.push(vendas[i] * comissoes [i] /100);
    }
    var aux = " "
    for(i = 0; i< vendas.length; i++){
        aux = aux + "<br/>" + nomes[i] + "receberá" + valores[i];
    }
    document.getElementById("saida").innerHTML = aux;
}
function totalVendas(){
    var total = 0;
    var i;
    for(i = 0; i< vendas.length; i++){
        total = total + vendas[i];
    }
    document.getElementById("saida").innerHTML = "Total" + total
}
function maiorVenda(){
    var maior = valores[0];
    var posicao = 0;
    var i;
    for(i = 1; i< vendas.length; i++){
        if(valores[i] > maior){
            maior = valores [i];
            posicao = i
        }
    }
    document.getElementById("saida").innerHTML = nomes[posicao];
}
function menorVenda(){
    var menor = valores[0];
    var posicao = 0;
    var i;
    for(i = 1; i< vendas.length; i++){
        if(valores[i] < menor){
            menor = valores [i];
            posicao = i
        }
    }
    document.getElementById("saida").innerHTML = nomes[posicao];
}