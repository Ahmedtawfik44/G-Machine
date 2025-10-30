import { Header } from "../component/header.js";
import { Footer } from "../component/footer.js";
import { Whats } from "../component/whats.js";


let tabs = document.querySelectorAll('.tabs li');

tabs.forEach(function (tab, i) {

    tab.addEventListener('click', (e) => {
        getdata(e.currentTarget.dataset.name, i)
        tabs.forEach(r => r.classList.remove('active-product'));
        e.currentTarget.classList.add('active-product');
    })

});

async function getdata(tab, id) {
    let container = document.querySelector('.product-content .container');
    container.innerHTML = "";
    try {
        let data = await fetch('../data/db.json');

        if (data.status !== 200) {
            console.log("The Data Error 404");
        } else {
            let result = await data.json();
            if (tab === "All") {
                let all_div = document.createElement('div');
                result.products.forEach(cards => {
                    let res = Object.values(cards);
                    res.forEach(arrays => {
                        let grid = document.createElement('div');
                        grid.classList.add('grid-product');
                        arrays.forEach((array, i) => {
                            if (i === 0) {
                                grid.innerHTML = `<img class="section-img" src=${array.imgheader} alt="section-img">`
                            }
                            grid.innerHTML += `
                                <div class="col">
                                    <img src=${array.image} alt="product-img">
                                    <h3>${array.title}</h3>
                                    <p>${array.desc}</p>
                                    <a href="">${array.link} ></a>
                                </div>
                          `
                        })
                        all_div.appendChild(grid);
                        container.appendChild(all_div)
                    })
                });
            }
            else {
                let other_div = document.createElement('div');
                other_div.classList.add('other');

                result.tables.forEach((tables, i) => {
                    let table = Object.keys(tables)[0];
                    if (tab.toLowerCase() === table.toLowerCase()) {
                        let contents = tables[table];
                        let table_div = document.createElement('div');
                        table_div.classList.add('table');
                        contents.forEach(content => {
                            let table_div = document.createElement('div');
                            table_div.classList.add('table');
                            table_div.innerHTML += `
                                    <h3>${content.header}</h3>
                                    <span>${content.title1 || ""}</span>
                                    <span>${content.title2 || ""}</span>
                                    <span>${content.title3 || ""}</span>
                                    <span>${content.title4 || ""}</span>
                                    <span>${content.title5 || ""}</span>
                                    <span>${content.title6 || ""}</span>
                                    <span>${content.title7 || ""}</span>
                                 `;
                            other_div.appendChild(table_div);
                            container.appendChild(other_div)
                        });

                    }
                })

                result.products.forEach((cards, i) => {
                    let card = Object.keys(cards)[0];
                    if (tab.toLowerCase() === card.toLowerCase()) {
                        let products = cards[card]
                        let grid = document.createElement('div');
                        grid.classList.add('grid-product');
                        products.forEach((product) => {
                            grid.innerHTML += `
                              <div class="col">
                                    <img src=${product.image} alt="product-img">
                                    <h3>${product.title}</h3>
                                    <p>${product.desc}</p>
                                    <a href="">${product.link} ></a>
                                </div>
                             `;
                        })
                        container.appendChild(grid)
                    }
                });
            }
        }
    }
    catch (err) {
        console.error(err);
    }

}

getdata('All');