const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splash.classList.add('display-none');
    }, 2000);
})


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const anchor = document.querySelector(".nav-links");
const link = document.querySelector(".nav-links");


hamburger.addEventListener("click", () => {
navLinks.classList.toggle("open");
links.forEach(link => {
  link.classList.toggle("fade");
});
});
 
anchor.addEventListener("click", () => {

  link.classList.remove("open");

  links.forEach((link) => {

    link.classList.remove("fade");

  });

});

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const selectedIndex = null;

imageIndexes.forEach((i) => {
  const image = document.createElement('img');
  image.src = `/images/gallery_image-${i}.jpg`;
  image.alt = `Sample photograph number ${i} of portfolio`;
  image.classList.add('galleryImg');

  image.addEventListener('click', () => {
    popup.style.transform = `translateY(0)`;
    selectedImage.src = `/images/gallery_image-${i}.jpg`;
    selectedImage.alt = `Sample photograph number ${i} of portfolio`;
  });

  gallery.appendChild(image);
});

popup.addEventListener('click', () => {
  popup.style.transform = `translateY(-100%)`;
  popup.src = '';
  popup.alt = '';
});