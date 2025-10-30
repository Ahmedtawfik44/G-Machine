
export class Header extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
 <!-- start header  -->
  
 <header>
    <div class="container">
      <!-- start mobile menue  -->
      <div class="toogle">
        <i class="list fa-solid fa-list-ul"></i>
        <i class="hide close fa-solid fa-xmark"></i>
        <div class="mobile-list hide-menue">
          <li><a href="./index.html" class="active-header">Home</a></li>
          <li><a href="./product.html">Product</a></li>
          <li><a href="./service.html">Our Service</a></li>
          <li><a href="./soon.html">Video</a></li>
          <li><a href="./about.html">About Us</a></li>
          <li><a href="./contact.html">Contact Us</a></li>
          <li><a href="./search.html"><i class="fa-solid fa-magnifying-glass"></i></a></li>
          <div >
            <li><a href=""><i class="facebook fa-brands fa-facebook"></i></a></li>
          <li><a href=""><i class="twitter fa-brands fa-twitter"></i></a></li>
          <li><a href=""><i class="linked-in fa-brands fa-linkedin"></i></a></li>
          </div>

        </div>
      </div>
      <!-- end mobile menue  -->
      <a href="./index.html"><img src="./images/logo.jpg" alt="logo"></a>
      <ul>
        <li><a href="./index.html" class="home">Home</a></li>
        <li class="product"><a href="./product.html" class="product">Product</a>
          <div class="product-menue">
            <div class="col">
              <img src="./images/product-1.jpg" alt="">
              <a class="head-product">Fiber Laser Cutting Machine</a>
              <div class="ul">
                <a href=""><img src="./images/check-mark.png" alt="check"> GH Series</a>
                <a href=""><img src="./images/check-mark.png" alt="check"> 3015GAS</a>
                <a href=""> <img src="./images/check-mark.png" alt="check"> GA Series</a>
              </div>
            </div>
            <div class="col">
              <img src="./images/product-1.jpg" alt="">
              <a class="head-product">Fiber Laser Cutting Machine</a>
              <div class="ul">
                <a href=""><img src="./images/check-mark.png" alt="check"> GH Series</a>
                <a href=""><img src="./images/check-mark.png" alt="check"> 3015GAS</a>
                <a href=""> <img src="./images/check-mark.png" alt="check"> GA Series</a>
              </div>
            </div>
            <div class="col">
              <img src="./images/product-1.jpg" alt="product">
              <a class="head-product">Fiber Laser Cutting Machine</a>
              <div class="ul">
                <a href="" ><img src="./images/check-mark.png" alt="check"> GH Series</a>
                <a href=""><img src="./images/check-mark.png" alt="check"> 3015GAS</a>
                <a href=""> <img src="./images/check-mark.png" alt="check"> GA Series</a>
              </div>
            </div>
            <div class="col">
              <img src="./images/product-1.jpg" alt="product">
              <a class="head-product">Fiber Laser Cutting Machine</a>
              <div class="ul">
                <a href=""><img src="./images/check-mark.png" alt="check"> GH Series</a>
                <a href=""><img src="./images/check-mark.png" alt="check"> 3015GAS</a>
                <a href=""> <img src="./images/check-mark.png" alt="check"> GA Series</a>
              </div>
            </div>
            <div class="col">
              <img src="./images/product-1.jpg" alt="product">
              <a class="head-product">Fiber Laser Cutting Machine</a>
              <div class="ul">
                <a href=""><img src="./images/check-mark.png" alt="check"> GH Series</a>
                <a href=""><img src="./images/check-mark.png" alt="check"> 3015GAS</a>
                <a href=""> <img src="./images/check-mark.png" alt="check"> GA Series</a>
              </div>
            </div>
          </div>
        </li>
        <li><a href="./service.html">Our Service</a></li>
        <li><a href="./soon.html">Video</a></li>
        <li><a href="./about.html">About Us</a></li>
        <li><a href="./contact.html">Contact Us</a></li>
        <li><a href="./search.html" class="scape"><i class="fa-solid fa-magnifying-glass search"></i></a></li>
      </ul>
      <div class="info">
        <a href=""><i class="facebook fa-brands fa-facebook"></i></a>
        <a href=""><i class="twitter fa-brands fa-twitter"></i></a>
        <a href=""><i class="linked-in fa-brands fa-linkedin"></i></a>
        <div class="language"></div>
      </div>
      <div class="language">
        <a href=""><img src="./images/English.webp" alt="en"></a>
        <div class="menue-language">
          <a href=""><img src="./images/English.webp" alt="繁体中文">English</a>
          <a href=""><img src="./images/china.webp" alt="">繁体中文</a>
        </div>
      </div>
    </div>
  </header>
  <!-- end header  -->
        
        `;

    this.addActive();
    this.handleToogle();
  }

  addActive() {
    let path = window.location.pathname;
    let links = document.querySelectorAll(' header ul li>a:not(.scape)');

    links.forEach(link => {
      let rel = link.getAttribute('href');
      let href = rel.substring(rel.indexOf('.') + 2)

      if (href === path) {
        link.classList.add('active-header')
      } else {
        link.classList.remove('active-header')
      }

    });

  }
    handleToogle(){
      let close = document.querySelector('header .toogle .close');
      let list = document.querySelector('header .toogle .list');
      let menue = document.querySelector('header .toogle .mobile-list');

      list.addEventListener("click", (e) => {
        e.target.classList.add('hide');
        close.classList.remove('hide');
        menue.classList.remove('hide-menue');
        menue.classList.add('show-menue');
      });

      close.addEventListener("click", (e) => {
        e.target.classList.add('hide');
        list.classList.remove('hide');
        menue.classList.add('hide-menue');
        menue.classList.remove('show-menue')
      });


    }


}

customElements.define('gamma-header', Header);
