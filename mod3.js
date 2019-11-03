function exmod3(){
    var nome1 = prompt('Informe um nome');
    var nome2 = prompt('Informe outro nome');
    var resultado = exe3_3(nome1, nome2);
    alert(resultado)
}
function exe3_3(nome1, nome2){
    if (nome1 == nome2){
        return 0;
    }
    else{
        for(var i=0; i<=nome1.length; i++){
            if(nome[i] != nome2[i]){
                return i+1;
            }
        }       
    }   
}