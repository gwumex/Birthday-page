let music = ['./music/1.mp3', './music/2.mp3', './music/3.mp3', './music/4.mp3', './music/5.mp3','./music/6.mp3', './music/7.mp3', './music/8.mp3']
let imagess = [
      {
          id: 1,
          images: "./images/1.jpg",
          quote: "lerom ipson hello"
      },
      {
          id: 2,
          images: "./images/2.jpg",
          quote: "lerom ipson hello"
      },
      {
          id: 3,
          images: "./images/3.jpg",
          quote: "lerom ipson hello"
      }
  ]

let imagescontainer = document.querySelector('.images-container');
let homebtn = document.querySelector('.btn-home');
let imageBtn;


// fetch('http://localhost:3000/img')
//   .then(response => response.json())
//   .then(data => gallery(data))

// function gallery(x) {
//   x.map(e => {
//     const { images, quote } = e;
//     let size = ["small", "large", "xlarge", "xxlarge"];
//     let random = Math.trunc(Math.random() * size.length);
//     imagescontainer.innerHTML +=
//       `<div class="image-box">
//     <a class="btn play-music-btn image-btn" id="playbtn">Play Songs</a>
//             <div class="img ${size[random]}">
//                 <img src="${images}" alt="">
//             </div>
//             <h3 class= "image-text">${quote}</h3>
//       </div>`
//   })
// }

function gallery() {
  imagess.map(e => {
    const { images, quote } = e;
    let size = ["small", "large", "xlarge", "xxlarge"];
    let random = Math.trunc(Math.random() * size.length);
    imagescontainer.innerHTML +=
      `<div class="image-box">
    <a class="btn play-music-btn image-btn" id="playbtn">Play Songs</a>
            <div class="img ${size[random]}">
                <img src="${images}" alt="">
            </div>
            <h3 class= "image-text">${quote}</h3>
      </div>`
  })
}
gallery();

imageBtn = document.querySelectorAll('#playbtn');

let aud;
let isplaying = 0;
let checkrandom = 0;
function playmusic(){
    let random;
     if(isplaying === 1){
        aud.pause();
  imageBtn.textContent = "Play Songs";
        isplaying = 0; 
    } else if( isplaying == 0){
        random = Math.trunc(Math.random() * music.length);
        dontrepeat(random);
    }
}

function dontrepeat(random){
  if(random != checkrandom){
    isplaying = 1;
    checkrandom = random;
    aud = new Audio(music[random]);
    aud.play();
    imageBtn.textContent = "Playing";
  } else{
    playmusic();
  }
}
let btns;
imageBtn.forEach(btn => {

  btn.addEventListener('click', playmusic);
  console.log(btn);
})

// for (let i = 0; i < imageBtn.length; i++) {
//   addToCarts[i].addEventListener('click', () => {
//       addCartNumber(products[i]);
//       totalCost(products[i]);
//   })
// }