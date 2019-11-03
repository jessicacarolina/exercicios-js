function exmod2(){
    var horas = Number(prompt('informe as horas'));
    var minutos = Number(prompt('informe os minutos'));
    var segundos = Number(prompt('informe os segundos'));
    var resultado = exe2_2(horas, minutos, segundos);
    alert(resultado)
}
function exe2_2(horas, minutos, segundos){
    return horas*3600 + minutos*60 + segundos
}