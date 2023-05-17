var Humano = window.webkitSpeechRecognition;
var KIWI=new Humano();
function start(){
    document.getElementById("textbox").innerHTML = "";
    KIWI.start();
} 
KIWI.onresult = function(info) {
   console.log(info);
   var mensaje = info.results[0][0].transcript;
   document.getElementById("textbox").innerHTML=mensaje;
}