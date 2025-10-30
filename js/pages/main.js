import { Header } from "../component/header.js";
import { Footer } from "../component/footer.js";
import { Whats } from "../component/whats.js";

// Img Slider

let images = ['../images/slider-1.webp', '../images/slider-2.webp', '../images/slider-3.webp'];
let img = document.querySelector('.slider .slider-img img');
let slider= document.querySelector('.slider');
let indicators = document.querySelectorAll('.slider .indicators li');
let i = 0;

function slide(value) {
        indicators.forEach(e => {
                e.classList.remove('active');
        });

        i += value;
        if (i === images.length) {
                i = 0;
        }

        if (i === -1) {
                i = 2;
        }
        img.src = `${images[i]}`;
        indicators[i].classList.add('active');
}

indicators.forEach((e,indx)=>{
        e.addEventListener('click',(e)=>{
                indicators.forEach(e=>e.classList.remove('active'));
                e.target.classList.add('active');
                i=indx;
                img.src = `${images[i]}`;
        });
});

setInterval(()=> slide(1) , 5000)
document.getElementById("next-slide").addEventListener("click", () => slide(1));
document.getElementById("prev-slide").addEventListener("click", () => slide(-1));


document.addEventListener('keydown',function(e){
        if (e.key === "ArrowRight") {
                slide(1);
                
        }else if(e.key === "ArrowLeft"){
                slide(-1);
        }
})
