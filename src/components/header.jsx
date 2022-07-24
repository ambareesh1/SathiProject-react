import * as React from 'react';
class Header extends React.Component {
  render() {
    return (
      <div
        class="header header-light header-topbar header-topbar1 header-shadow"
        id="navbar-spy"
      >
        <div class="top-bar">
          <div class="block-left">
            <div class="top-contact">
              <div class="contact-infos">
                <i class="fa-solid fa-phone"></i>
                <div class="contact-body">
                  <p>
                    phone: <a href="tel:919398277980">+91 9398277980</a> &nbsp;
                    &nbsp; | &nbsp; &nbsp;
                    <a href="tel:918125377980">+91 8125377980</a>
                  </p>
                </div>
              </div>

              <div class="contact-infos">
                <i class="fa-solid fa-envelope"></i>
                <div class="contact-body">
                  <p>
                    email:
                    <a href="mailto:shrisathip@gmail.com">
                      shrisathip@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-sticky" id="primary-menu">
          <a class="navbar-brand" href="index.html">
            <img
              class="logo logo-dark"
              src="https://i.ibb.co/55yrdGk/satiprojects-logo.jpg"
              alt="Energia Logo"
            />
            <img
              class="logo logo-mobile logo-custom"
              src="assets/images/logo/satilogo.jpeg"
              alt="Energia Logo"
            />
          </a>
          <div class="module-holder module-holder-phone">
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto">
              <li class="nav-item  active" data-hover="">
                <a href="index.html">
                  <span class="nav-span-icon-custom">Home</span>
                  <span class="custom-divider"> | </span>
                </a>
              </li>
              <li class="nav-item  active" data-hover="">
                <a href="services.html">
                  <span class="nav-span-icon-custom">Services</span>
                  <span class="custom-divider"> | </span>
                </a>
              </li>
              <li class="nav-item  active" data-hover="">
                <a href="projects.html">
                  <span class="nav-span-icon-custom">Projects</span>
                  <span class="custom-divider"> | </span>
                </a>
              </li>
              <li class="nav-item  active" data-hover="">
                <a href="#">
                  <span class="nav-span-icon-custom">About </span>
                  <span class="custom-divider"> | </span>
                </a>
              </li>

              <li class="nav-item  active" data-hover="">
                <a href="#">
                  <span class="nav-span-icon-custom">Gallery</span>
                  <span class="custom-divider"> | </span>
                </a>
              </li>
              <li class="nav-item  active" data-hover="">
                <a href="#">
                  <span class="nav-span-icon-custom">Contact</span>
                </a>
              </li>
            </ul>
            <div class="module-holder">
              <div class="block-right">
                <img src="https://i.postimg.cc/N0Y6zn6V/makeinindia.png" />
              </div>
              <div class="block-right">
                <img src="https://i.postimg.cc/502wxFkS/msme.png" />
              </div>
              <div class="module-contact">
                <a
                  class="btn btn--primary"
                  data-toggle="modal"
                  data-target="#postQuote"
                >
                  request a quote<i class="fa-solid fa-circle-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
