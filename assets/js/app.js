let sound = document.querySelector('.sound-bg')


const audio = document.createElement('audio');

document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAudio();
});
function mostrarAudio(){

    audio.preload = "auto";
    audio.src = "./assets/css/images/Dreamstate-Logic-cute.mp3";
    audio.autoplay;
    audio.loop;
    audio.volume = 0.8;
    document.body.appendChild(audio);


    console.log(audio)
}

