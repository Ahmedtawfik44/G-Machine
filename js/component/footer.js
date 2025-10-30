
export class Footer extends HTMLElement {

 connectedCallback(){
     this.innerHTML=`
     <footer>
    <div class="container">
      <div class="col">
        <img src="./images/logo-footer.jpg" alt="">
    </div>
    <div class=" col">
        <h3><a href="">Product</a></h3>
        <li><a href="">Fiber Laser Cutting Machine</a></li>
        <li><a href="">CO2 Laser Cutting Machine</a></li>
        <li><a href="">Laser Machine Welding</a></li>
        <li><a href="">Laser Machine Cleaning</a></li>
      </div>
      <div class="col">
        <h3><a href="">Company</a></h3>
        <li><a href="">Product</a></li>
        <li><a href="">Our Service</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Video</a></li>
        <li><a href="">Concat US</a></li>
      </div>
      <div class="col contact">
        <h3><a href="">Contact US</a></h3>
        <li><a href=""><i class="fa-solid fa-phone"></i>Hotline:+86-13290249306</a></li>
        <li><a href=""><i class="fa-solid fa-location-dot"></i>13A, Building D, Big Data Industrial Base, Xin Lou
            Street, High-tech Zone, Jinan, Shandong, China</a></li>
        <li><a href=""><i class="fa-solid fa-envelope"></i>E-mail:sales@wklaser.com</a></li>
        <li><a href=""><i class="fa-solid fa-fax"></i>Fax:0531-88912386</a></li>
        <li><a href=""><i class="fa-brands fa-square-whatsapp"></i>WhatsAPP/Wechat/ :+86-13290249306</a></li>
      </div>
    </div>

    <div class="copy-right">
      <div class="container">
        <div class="left">
          <p>Privacy Statement
            © Copyright 2025 Gamma</p>
          <div>
          </div>
        </div>
        <div class="right">
          <a href=""><i class="facebook fa-brands fa-facebook"></i></a>
          <a href=""><i class="twitter fa-brands fa-twitter"></i></a>
          <a href=""><i class="linked-in fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </footer>
     
     `
 };
}

customElements.define('gamma-footer',Footer)