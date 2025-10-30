import { Header } from "../component/header.js";
import { Footer } from "../component/footer.js";
import { Whats } from "../component/whats.js";


async function getdata() {

    try {
        let container = document.querySelector('.product-content .container');
        let grid = document.createElement('div');
        grid.classList.add('grid-product' , 'grid-search');

        let data = await fetch('/js/data/db.json');
        if (data.status !== 200) {
            console.log("The Data Error 404");
        } else {
            let result = await data.json();

            result.products.forEach(cards => {
                let res = Object.values(cards);
                res.forEach(arrays => {
                    arrays.forEach((array) => {
                        grid.innerHTML += `
                                <div class="col">
                                    <img src=${array.image} alt="product-img">
                                    <h3>${array.title}</h3>
                                    <p>${array.desc}</p>
                                    <a href="">${array.link} ></a>
                                </div>
                          `
                    })
                })
            });

            container.appendChild(grid)
        }
    }
    catch (err) {
        console.error(err);
    }

}

getdata();


function search_bar() {
    let search_value = document.querySelector('#search').value.toUpperCase();
    let product_name = document.querySelectorAll('.product-content  h3');
    let col = document.querySelectorAll(".product-content .container .col");

    for (let i = 0; i < product_name.length; i++) {
        if (product_name[i].innerHTML.toUpperCase().indexOf(search_value) >= 0) {
                    col[i].style.display="";
        }else{
            col[i].style.display="none";
        }
    }

}


window.onload=()=>{
  document.querySelector('#search').addEventListener('keyup',()=>{
    search_bar();
  })
}