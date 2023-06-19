var aux = new Boolean(true);

const tocarSom = () => {
    // const audio = new Audio("./sounds/snare.wav");
    // audio.play();
    var audio = new Audio();
    var audioUrl = "https://lopesgeovane.github.io/Projeto_Drum_wifi/sounds/snare.wav";

    audio.src = audioUrl;
    audio.play();
}

const drumPad = document.getElementById('botao');
drumPad.addEventListener('click', function() {
    startAnimation();
});

function startAnimation() {

    var stickNumber = "";

    if(aux){
        stickNumber = "1";
        aux = !aux;
    }else{
        stickNumber = "2";
        aux = !aux;
    }
    
    var imagem = document.getElementById("drumstick0" + stickNumber);
  
    imagem.classList.add("animate" + stickNumber);
  
    setTimeout(function() {
      imagem.classList.remove("animate" + stickNumber);
    }, 2000);

    tocarSom();
  }
  
