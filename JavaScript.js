var rotationAngle = 0; // Ângulo inicial de rotação
var rotationInterval; // Intervalo para controlar a rotação contínua
var rotationMax = 25;
var checkboxValue = false; // Valor inicial do checkbox
var alternate = true;

const tocarSom = () => {
  // const audio = new Audio("./sounds/snare.wav");
  // audio.play();
  var audio = new Audio();
  var audioUrl = "https://lopesgeovane.github.io/Projeto_Drum_wifi/sounds/snare.wav";

  audio.src = audioUrl;
  audio.play();
}

// Função para girar a imagem em um ângulo específico
function rotateImage1() {
  var image = document.getElementById("drumstick01");
  rotationAngle += 1;
  image.style.transform = 'rotate(' + rotationAngle + 'deg)';

  if (rotationAngle < rotationMax && checkboxValue === true) {
    setTimeout(rotateImage1, 10);
  } else {
    // Aguarde 1 segundo antes de voltar à posição inicial
    setTimeout(function() {
      rotationAngle = 0; // Reinicia o ângulo de rotação para 0
      image.style.transform = 'rotate(' + rotationAngle + 'deg)';
    }, 10);
  }
}

// Função para girar a imagem em um ângulo específico
function rotateImage2() {
  var image = document.getElementById("drumstick02");
  rotationAngle += 1;
  image.style.transform = 'rotate(' + (-rotationAngle) + 'deg)';

  if (rotationAngle < rotationMax && checkboxValue === true) {
    setTimeout(rotateImage2, 10);
  } else {
    // Aguarde 1 segundo antes de voltar à posição inicial
    setTimeout(function() {
      rotationAngle = 0; // Reinicia o ângulo de rotação para 0
      image.style.transform = 'rotate(' + rotationAngle + 'deg)';
    }, 10);
  }
}

// Event listener para iniciar a rotação quando o mouse é pressionado
//var image = document.getElementById('myRectangle');
//image.addEventListener('mousedown', rotateImage);

// Função para verificar o valor recebido do ESP32 e chamar rotateImage() se for true
// Função para atualizar o valor do checkbox e chamar rotateImage() se for true
function updateCheckboxValue() {
  checkboxValue = document.getElementById('esp32Value').checked;

  if (checkboxValue === true) {
    alternate ? rotateImage1() : rotateImage2();
    alternate = !alternate;    
    tocarSom();
  } else {
    // Cancela o intervalo de rotação contínua, se aplicável
    clearTimeout(rotationInterval);
  }
}

// Event listener para verificar o valor do ESP32 quando houver uma alteração
var esp32InputElement = document.getElementById('esp32Value');
esp32InputElement.addEventListener('change', updateCheckboxValue);

document.addEventListener("DOMContentLoaded", function() {
  var checkbox = document.getElementById("esp32Value");

  document.addEventListener("click", function(event) {
    if (event.target !== checkbox && !checkbox.contains(event.target)) {
      checkbox.checked = !checkbox.checked;
    }
    updateCheckboxValue()
    alternate = !alternate;
  });

});
