import React from "react";
import Image from "next/image";
import {
  IoPricetags,
  IoStar,
  IoStarOutline,
  IoStarHalf,
  IoHome,
} from "react-icons/io5";
export default function Blog() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section_subtitle">Villes</p>

        <h2 className="h2 section_title">Les meilleures villes du Sénégal</h2>

        <ul className="city_list has_scrollbar">
          <li>
            <div className="city_card">
              <figure className="card_banner">
                <CityImage alt="test" cityNumber={1} />
              </figure>

              <div className="city_content">
                <div className="city_content_top">
                  <ul className="card_meta_list">
                    <li>
                      <a href="#" className="card_meta_link">
                        <span>
                          <h3 className="h3 city_title">
                            <IoPricetags />
                            Dakar
                          </h3>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card_meta_link">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        <IoStarOutline />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="city_content_bottom">
                  <div className="publish_date">
                    <IoHome />

                    <p>3450 propriétés</p>
                  </div>

                  <a href="#" className="read_more_btn">
                    Voir détails
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="city_card">
              <figure className="card_banner">
                <CityImage alt="test" cityNumber={2} />
              </figure>

              <div className="city_content">
                <div className="city_content_top">
                  <ul className="card_meta_list">
                    <li>
                      <a href="#" className="card_meta_link">
                        <span>
                          <h3 className="h3 city_title">
                            <IoPricetags />
                            Gorée
                          </h3>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card_meta_link">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        <IoStarOutline />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="city_content_bottom">
                  <div className="publish_date">
                    <IoHome />

                    <p>3450 propriétés</p>
                  </div>

                  <a href="#" className="read_more_btn">
                    Voir détails
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="city_card">
              <figure className="card_banner">
                <CityImage alt="test" cityNumber={3} />
              </figure>

              <div className="city_content">
                <div className="city_content_top">
                  <ul className="card_meta_list">
                    <li>
                      <a href="#" className="card_meta_link">
                        <span>
                          <h3 className="h3 city_title">
                            <IoPricetags />
                            Saly
                          </h3>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card_meta_link">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        <IoStarOutline />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="city_content_bottom">
                  <div className="publish_date">
                    <IoHome />

                    <p>250 propriétés</p>
                  </div>

                  <a href="#" className="read_more_btn">
                    Voir détails
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="city_card">
              <figure className="card_banner">
                <CityImage alt="test" cityNumber={3} />
              </figure>

              <div className="city_content">
                <div className="city_content_top">
                  <ul className="card_meta_list">
                    <li>
                      <a href="#" className="card_meta_link">
                        <span>
                          <h3 className="h3 city_title">
                            <IoPricetags />
                            Dakar
                          </h3>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="#" className="card_meta_link">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                        <IoStarOutline />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="city_content_bottom">
                  <div className="publish_date">
                    <IoHome />

                    <p>3450 propriétés</p>
                  </div>

                  <a href="#" className="read_more_btn">
                    Voir détails
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function CityImage({ alt, cityNumber }: { alt: string; cityNumber: number }) {
  return (
    <Image
      src={`/static/img/city-${cityNumber}.jpg`}
      alt={alt}
      width={380}
      height={0}
    />
  );
}
