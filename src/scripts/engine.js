const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keyCheck = document.querySelector(".keys-check input");
const musicDiv = document.querySelectorAll(".music");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};
pianoKeys.forEach((key) => {
    key.addEventListener("click",()=> playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key);
});

//captura de tecla 
document.addEventListener("keydown", 
    (e) =>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});


const handleVolume = (e) =>{
    audio.volume = e.target.value;  
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}
volumeSlider.addEventListener("input", handleVolume);

keyCheck.addEventListener("click", showHideKeys);


//VARIAVES DE PLAYBACK
let playM1 = new Audio("src/playbacks/piseiro.m4a");
let playM2 = new Audio("src/playbacks/arrocha.m4a");
let playM3 = new Audio("src/playbacks/seresta.m4a");
let playM4 = new Audio("src/playbacks/forro.m4a");

playM1.volume = 0.4;
playM2.volume = 0.4;
playM3.volume = 0.3;
playM4.volume = 0.3;

let audios = [playM1, playM2, playM3, playM4];

//Função que pausa um dos audios assim que outro for selecionado
function pauseAllAudios(){
    audios.forEach(audio => audio.pause());
    musicDiv.forEach(item => item.classList.remove("paused"));
}

//PISEIRO
function PlaymusicPiseiro(){
    if(playM1.paused){
        pauseAllAudios();
        playM1.play();
        musicDiv[0].classList.add("paused");    
    }else{
        playM1.pause();
        musicDiv[0].classList.remove("paused"); 
       }
}

//ARROCHA
function PlaymusicArrocha(){
    if(playM2.paused){
        pauseAllAudios();
        playM2.play();
        musicDiv[1].classList.add("paused");    
    }else{
        playM2.pause();
        musicDiv[1].classList.remove("paused"); 
    }
}

//SERESTA
function PlaymusicSeresta() {
    if (playM3.paused) {
        pauseAllAudios();
        playM3.play();
        musicDiv[2].classList.add("paused");
    } else {
        playM3.pause();
        musicDiv[2].classList.remove("paused");
    }
}

//FORRÓ
function PlaymusicForro(){
    if(playM4.paused){
        pauseAllAudios();
        playM4.play();
        musicDiv[3].classList.add("paused"); 
    }else{
        playM4.pause();
        musicDiv[3].classList.remove("paused"); 
    }
}