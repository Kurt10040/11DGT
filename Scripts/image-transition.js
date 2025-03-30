const images = [
    '../images/gameplay2.png',
    '../images/gameplay1.png',
    '../images/SDPC-1ststep.png',
    '../images/SDPC-2ndstep.png',
    '../images/stacking-bg.png',
    '../images/stacking-bg2.png',
    '../images/tetr-40lines-gameplay.png'
];

let currentIndex = 0; 
 
function changeImage() { 
    const slideshow = document.getElementById('image1'); 
    currentIndex = (currentIndex + 1) % images.length;
    let img = images[currentIndex];
    
//    setTimeout(() => { 
        slideshow.style.backgroundImage = "url(".concat(img,")");
//    }, 1000);
} 

setInterval(changeImage, 5000); // Change image every 5 seconds 