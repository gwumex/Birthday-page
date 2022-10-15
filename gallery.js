let imagescontainer = document.querySelector('.images-container');
let images = document.querySelector('.img');

fetch('http://localhost:8000/img')
  .then(response => response.json())
  .then(data => gallery(data))

function gallery(x){
    let template = "";
  x.map(e =>{
    const {images, quote} = e;
    let size = ["small", "large", "xlarge", "xxlarge" ];
    let random = Math.trunc(Math.random() * size.length);
    console.log(size[random]);
  template += 
    `<div class="image-box">
            <div class="img ${size[random]}">
                <img src="${images}" alt="">
            </div>
            <h3 class= "image-text">${quote}</h3>
      </div>`
  })
  imagescontainer.innerHTML = template;
} 