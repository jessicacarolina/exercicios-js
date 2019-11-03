function funcNota(hSec,mSec){
    var h,m,s;
    h = Number(prompt("Digite as horas : "));
    horas(h);
    m = Number(prompt("Digite os minutos : "));
    minutos(m);
    s = Number(prompt("Digite os segundos : "));
    somar(hSec,mSec,s);
}
function horas(h){
   var hSec = h*3600;
   alert(hSec);
}
function minutos(m){
    var mSec = m*60;
    alert(mSec);
}
function somar(hSec,mSec,s){
    var soma = hSec+mSec+s;
    alert(mSec)
    alert(`Conversão: ${soma} segundos`);
}