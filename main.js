'use strict'
let music = ['./music/1.mp3', './music/2.mp3', './music/3.mp3', './music/4.mp3', './music/5.mp3','./music/6.mp3', './music/7.mp3', './music/8.mp3']
let countDownDate = new Date("Oct 17, 2022 00:00:00").getTime();
let pdays = document.querySelector('#days');
let phours = document.querySelector('#hours');
let pmins = document.querySelector('#mins');
let pseconds = document.querySelector('#secs');
let play = document.getElementById('playbtn');
let isplaying = 0;



var x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = parseInt(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    pdays.textContent = days;
    phours.textContent = hours;
    pmins.textContent = minutes;
    pseconds.textContent = seconds;
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


let aud;
  play.addEventListener('click', () => {
     if(isplaying === 1){
        aud.pause();
        play.textContent = "Play Songs";
        isplaying = 0; 
    } else if( isplaying == 0){
        isplaying = 1;
        let random = Math.trunc(Math.random() * music.length);
        aud = new Audio(music[random]);
        aud.play();
        play.textContent = "Playing";
    }
  })


  fetch('http://localhost:8000/img')
  .then(response => response.json())
  .then(data => gallery(data))

function gallery(img){
  // console.log(img[1]);
  img.map(e =>{
  const{images, quote} = e;
    `
    
    `
  })
} 

gallery();