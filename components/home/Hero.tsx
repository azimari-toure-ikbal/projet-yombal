import React from "react";
import { IoHome } from "react-icons/io5";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero_content">
          <p className="hero_subtitle">
            <IoHome />

            <span>Agence de logements & locations</span>
          </p>

          <h2 className="h1 hero_title">Yekksil akk jamm ci yombal</h2>

          <p className="hero_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          <button className="btn">Trouver un logement</button>
        </div>

        <figure className="hero_banner">
          <Image
            src="/static/img/hero-banner.png"
            alt="Modern house model"
            className="dark:invert"
            width={450}
            height={450}
            priority={true}
          />
        </figure>
      </div>
    </section>
  );
}