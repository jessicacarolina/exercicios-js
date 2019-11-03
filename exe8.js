function exe8() {
    let estados = []
    cadastroEstados(estados)
    calculaIndices(estados)
    calculaPercentual(estados)
    calculaMedia(estados)
    let veiculos = []
    let acidentes = []
    
    function cadastroEstados(estados){
        for (i=0; i<15; i++){
            var objeto = {}
            objeto.nome = prompt('Qual o nome do estado? ')
            objeto.veiculos = Number(prompt('Total de veículos circulando no estado: '))
            objeto.acidentes = Number(prompt('Total de acidentes no estado: '))
            objeto.indice = (objeto.acidentes/objeto.veiculos)*100
            estados.push(objeto)
        }
    }
    function calculaIndices(estados){
        var maiorIndice = 0
        var maiorEstado = ""
        var menorIndice = 0
        var menorEstado = ""    
        for(i=0; i<15; i++){
            if(estados[i].indice > maiorIndice){
                maiorIndice = estados[i].indice
                maiorEstado = estados[i].nome
            }
            if(estados[i].indice < menorIndice){
                menorIndice = estados[i].indice
                menorIndice = estados[i].nome
            }
        }
        alert(`Maior índice ${maiorIndice} com nome ${maiorEstado}`)
        alert(`Menor índice ${menorIndice} com nome ${menorEstado}`)
    }
    function calculaPercentual(estados){
        var total = 0
        for(i=0; i<15; i++){
            total = total + estados[i].veiculos
        }
        for(i=0; i<15; i++){
            alert((estados[i].veiculos/total)*100)
        }
    }
    function calculaMedia(estados){
        var total = 0
        for(i=0; i<15; i++){
            total = total + estados[i].acidentes
        }
        alert(`Média de acidentes ${total/15}`)
    }            
}      