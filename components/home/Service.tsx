import React from "react";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

export default function Service() {
  return (
    <section className="service" id="service">
      <div className="container">
        <p className="section_subtitle">Nos services</p>

        <h2 className="h2 section_title">Notre priorité</h2>

        <ul className="service_list">
          <li>
            <div className="service_card">
              <div className="card_icon">
                <Image
                  src="/static/img/service-1.png"
                  alt="Service icon"
                  width={66}
                  height={66}
                />
              </div>

              <h3 className="h3 card_title">
                <a href="#">Buy a home</a>
              </h3>

              <p className="card_text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>

              <a href="#" className="card_link">
                <span>Find A Home</span>
                <IoArrowForwardOutline />
              </a>
            </div>
          </li>

          <li>
            <div className="service_card">
              <div className="card_icon">
                <Image
                  src="/static/img/service-2.png"
                  alt="Service icon"
                  width={66}
                  height={66}
                />
              </div>

              <h3 className="h3 card_title">
                <a href="#">Rent a home</a>
              </h3>

              <p className="card_text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>

              <a href="#" className="card_link">
                <span>Find A Home</span>
                <IoArrowForwardOutline />
              </a>
            </div>
          </li>

          <li>
            <div className="service_card">
              <div className="card_icon">
                <Image
                  src="/static/img/service-3.png"
                  alt="Service icon"
                  width={66}
                  height={66}
                />
              </div>

              <h3 className="h3 card_title">
                <a href="#">Sell a home</a>
              </h3>

              <p className="card_text">
                over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>

              <a href="#" className="card_link">
                <span>Find A Home</span>
                <IoArrowForwardOutline />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
