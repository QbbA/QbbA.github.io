let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1] += " active";
}





let btn1 = document.getElementById('MemeBtn1')
let Btn2 = document.getElementById('MemeBtn2')
let MemeFolder = document.getElementById('MFolder')



function close() {
  if(MemeFolder.style.display === "none"){
    MemeFolder.style.display = "block";
  }else {
    MemeFolder.style.display = 'none';
  }

}

function open() {
  if(MemeFolder.style.display === "none"){
    MemeFolder.style.display = "block";
  }else {
    MemeFolder.style.display = "block";
  }
}
btn1.addEventListener('click', open );
Btn2.addEventListener('click', close);

let Meme = document.getElementById('Meme');
let Meme1 = document.getElementById('Meme1');
let Meme2 = document.getElementById('Meme2');
let Meme3 = document.getElementById('Meme3');
let MemeBtn2 = document.getElementById('GBtn2');
let Image1 = document.getElementById('Gallery');

function OpenImage() {
  if(Image1.style.display === "none"){
      Image1.style.display = "block";
  }else {
      Image1.style.display = "block";
  }
}

function CloseImage() {
  if(Image1.style.display === "none"){
      Image1.style.display = "block";
  }else {
      Image1.style.display = 'none';
  }

}

Meme.addEventListener('click', OpenImage);
Meme1.addEventListener('click', OpenImage);
Meme2.addEventListener('click', OpenImage);
Meme3.addEventListener('click', OpenImage);
MemeBtn2.addEventListener('click', CloseImage);


