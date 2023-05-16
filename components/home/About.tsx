import React from "react";
import Image from "next/image";
import {
  IoHomeOutline,
  IoLeafOutline,
  IoWineOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <figure className="about_banner">
          <Image
            src="/static/img/about-banner-1.png"
            alt="Houses interior"
            className="dark:invert"
            width={650}
            height={650}
            priority={true}
          />
          {/* <img src="./assets/images/about-banner-1.png" alt="House interior"> */}

          <Image
            src="/static/img/about-banner-2.jpg"
            alt="House interior"
            className="dark:invert abs-img"
            width={180}
            height={180}
          />
          {/* <img src="./assets/images/about-banner-2.jpg" alt="House interior" className="abs-img"> */}
        </figure>

        <div className="about_content">
          <p className="section_subtitle">À propos</p>

          <h2 className="h2 section_title">
            The Leading Real Estate Rental Marketplace.
          </h2>

          <p className="about_text">
            Over 39,000 people work for us in more than 70 countries all over
            the This breadth of global coverage, combined with specialist
            services
          </p>

          <ul className="about_list">
            <li className="about_item">
              <div className="about_item-icon">
                <IoHomeOutline />
              </div>

              <p className="about_item-text">Smart Home Design</p>
            </li>

            <li className="about_item">
              <div className="about_item-icon">
                <IoLeafOutline />
              </div>

              <p className="about_item-text">Beautiful Scene Around</p>
            </li>

            <li className="about_item">
              <div className="about_item-icon">
                <IoWineOutline />
              </div>

              <p className="about_item-text">Exceptional Lifestyle</p>
            </li>

            <li className="about_item">
              <div className="about_item-icon">
                <IoShieldCheckmarkOutline />
              </div>

              <p className="about_item-text">Complete 24/7 Security</p>
            </li>
          </ul>

          <p className="callout">
            "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem
            ipsum dolor sit amet"
          </p>

          <a href="#service" className="btn">
            Nos services
          </a>
        </div>
      </div>
    </section>
  );
}
