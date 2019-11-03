function inicia() {
    let vCodigo = [] //vetor de codigo
    let vEstoque = [] //vetor de estoque
    let i;
    for (i = 0; i < 10; i++) {
        vCodigo.push(Number(prompt("Informe codigo")));
        vEstoque.push(Number(prompt("Informe o estoque")));
    }
    //realizar a compra
    let cliente, codigo, quantidade;
    cliente = Number(prompt("Codigo do cliente"));
    while (cliente != 0) {
        codigo = Number(prompt("Codigo do produto"));
        quantidade = Number(prompt("Quantidade do produto"));
        let posicao = vCodigo.indexOf(codigo);// ou if(vcodigo.indexOf(codigo) == -1) não existe 
        if (posicao != -1) { // produto não existe
            if (vEstoque[posicao] - quantidade >= 0) { //tem em estoque
                (vEstoque[posicao] = vEstoque[posicao] - quantidade);
                alert("Compra com sucesso");
            }
            else {
                alert("Não tem em estoque");
            }
        }
    }
        cliente = Number(prompt("informe um novo codigo do cliente." + "Digite 0 para encerrar"));
        //procura o codigo no vetor de codigo
    }

    alert("Estoque atualizado" + vEstoque);