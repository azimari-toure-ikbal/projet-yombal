"use client";

import React, { useState, useEffect } from "react";
import {
  IoMailOutline,
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoPinterest,
  IoSearchOutline,
  IoPersonOutline,
  IoCartOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  const [navbarActive, setNavbarActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setNavbarActive(true);
      } else {
        setNavbarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setNavbarActive(!navbarActive);
    console.log(navbarActive);
  };

  const navbarClassName = navbarActive ? "active" : "";

  return (
    <header className={`header ${navbarClassName}`} data-header>
      <div className={`overlay`} data-overlay></div>
      <div className="header_top">
        <div className="container">
          <ul className="header_top_list">
            <li>
              <a href="mailto:info@Yombal.com" className="header_top_link">
                <IoMailOutline />
                <span>info@yombal.com</span>
              </a>
            </li>
            <li>
              <a href="#" className="header_top_link">
                <IoLocationOutline />
                <address>Point E, Dakar</address>
              </a>
            </li>
          </ul>
          <div className="wrapper">
            <ul className="header_top_social_link">
              <li>
                <a href="#" className="top_social_link">
                  <IoLogoFacebook />
                  {/* <ion-icon name="logo-facebook"></ion-icon> */}
                </a>
              </li>
              <li>
                <a href="#" className="top_social_link">
                  <IoLogoTwitter />
                  {/* <ion-icon name="logo-twitter"></ion-icon> */}
                </a>
              </li>
              <li>
                <a href="#" className="top_social_link">
                  <IoLogoInstagram />
                  {/* <ion-icon name="logo-instagram"></ion-icon> */}
                </a>
              </li>
              <li>
                <a href="#" className="top_social_link">
                  <IoLogoPinterest />
                  {/* <ion-icon name="logo-pinterest"></ion-icon> */}
                </a>
              </li>
            </ul>
            <button className="header_top_btn">Lorem ipsum</button>
          </div>
        </div>
      </div>

      <div className="header_bottom">
        <div className="container">
          <a href="#" className="logo">
            <Image
              src="/static/img/logo.png"
              alt="Yombal Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>

          <nav className="navbar" data-navbar>
            <div className="navbar-top">
              <a href="#" className="logo">
                <Image
                  src="/static/img/logo.png"
                  alt="Yombal Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>

              <button
                className="nav_close_btn"
                data-nav_close_btn
                aria-label="Close Menu"
              >
                <IoCloseOutline />
              </button>
            </div>

            <div className="navbar_bottom">
              <ul className="navbar_list">
                <li>
                  <a href="#home" className="navbar_link" data-nav-link>
                    Accueil
                  </a>
                </li>

                <li>
                  <a href="#about" className="navbar_link" data-nav-link>
                    À propos
                  </a>
                </li>

                <li>
                  <a href="#service" className="navbar_link" data-nav-link>
                    Services
                  </a>
                </li>

                <li>
                  <a href="#property" className="navbar_link" data-nav-link>
                    Propriétés
                  </a>
                </li>

                <li>
                  <a href="#blog" className="navbar_link" data-nav-link>
                    Villes
                  </a>
                </li>

                <li>
                  <a href="#contact" className="navbar_link" data-nav-link>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className="header_bottom_actions">
            <button className="header_bottom_actions_btn" aria-label="Search">
              <IoSearchOutline />
              {/* <ion-icon name="search-outline"></ion-icon> */}

              <span>Search</span>
            </button>

            <button className="header_bottom_actions_btn" aria-label="Profile">
              <IoPersonOutline />
              {/* <ion-icon name="person-outline"></ion-icon> */}

              <span>Profile</span>
            </button>

            <button className="header_bottom_actions_btn" aria-label="Cart">
              <IoCartOutline />
              {/* <ion-icon name="cart-outline"></ion-icon> */}

              <span>Cart</span>
            </button>

            <button
              className="header_bottom_actions_btn"
              data-nav-open-btn
              aria-label="Open Menu"
            >
              <IoMenuOutline onClick={toggleNavbar} />
              {/* <ion-icon name="menu-outline"></ion-icon> */}

              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
