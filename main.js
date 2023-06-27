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
   if(mensaje =="toma mi selfie"|mensaje =="Toma mi selfie"){
    speak();
   }
}
function speak(){
    var azul = window.speechSynthesis;
    mensaje = "Tomando tu Selfie en 5 segundos" ;
    var mensajevoz = new SpeechSynthesisUtterance(mensaje);
    azul.speak(mensajevoz);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camara");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("resultado").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
};
