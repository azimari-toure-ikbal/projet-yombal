import React from "react";
import Image from "next/image";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div className="footer_brand">
            <a href="#" className="logo">
              <Image
                src="/static/img/logo-light.png"
                alt="Yombal logo"
                width={200}
                height={50}
              />
            </a>

            <p className="section_text">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>

            <ul className="contact_list">
              <li>
                <a href="#" className="contact_link">
                  <IoLocationOutline />

                  <address>Point E, Dakar, Sénégal</address>
                </a>
              </li>

              <li>
                <a href="tel:+0123456789" className="contact_link">
                  <IoCallOutline />

                  <span>+77 777 77 77</span>
                </a>
              </li>

              <li>
                <a href="mailto:contact@Yombal.com" className="contact_link">
                  <IoMailOutline />

                  <span>contact@yombal.com</span>
                </a>
              </li>
            </ul>

            <ul className="social_list">
              <li>
                <a href="#" className="social-link">
                  <IoLogoFacebook />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoTwitter />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoLinkedin />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IoLogoYoutube />
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_link_box">
            <ul className="footer_list">
              <li>
                <p className="footer_list_title">Compagnie</p>
              </li>

              <li>
                <a href="#" className="footer_link">
                  À propos
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Villes
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Nos produits
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Locations Map
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Nous contacter
                </a>
              </li>
            </ul>

            <ul className="footer_list">
              <li>
                <p className="footer_list_title">Services</p>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Commandes
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Wish List
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Mon compte
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Termes et conditions
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Offres promotionelles
                </a>
              </li>
            </ul>

            <ul className="footer_list">
              <li>
                <p className="footer_list_title">Clientelle</p>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Commandes
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Wish List
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Mon compte
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Termes et conditions
                </a>
              </li>

              <li>
                <a href="#" className="footer_link">
                  Offres promotionelles
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 <a href="#">rongeurs2A</a>. Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
