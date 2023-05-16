import React from "react";
import Image from "next/image";
import {
  IoLocation,
  IoCamera,
  IoFilm,
  IoBedOutline,
  IoManOutline,
  IoSquareOutline,
  IoResizeOutline,
  IoHeartOutline,
  IoAddCircleOutline,
} from "react-icons/io5";

export default function Property() {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section_subtitle">Propriétés</p>

        <h2 className="h2 section_title">En vedette</h2>

        <ul className="property-list has_scrollbar">
          <li>
            <div className="property_card">
              <figure className="card_banner">
                <a href="#">
                  <PropertyImage alt="test" propertyNumber={1} />
                </a>

                <div className="card_badge green">For Rent</div>

                <div className="banner_actions">
                  <button className="banner_actions_btn">
                    <IoLocation />

                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner_actions_btn">
                    <IoCamera />

                    <span>4</span>
                  </button>

                  <button className="banner_actions_btn">
                    <IoFilm />

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card_content">
                <div className="card_price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card_title">
                  <a href="#">New Apartment Nice View</a>
                </h3>

                <p className="card_text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card_list">
                  <li className="card_item">
                    <strong>3</strong>

                    <IoBedOutline />

                    <span>Bedrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>2</strong>

                    <IoManOutline />

                    <span>Bathrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>3450</strong>

                    <IoSquareOutline />

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card_footer">
                <div className="card_author">
                  <figure className="author_avatar">
                    <AuthorImage />
                  </figure>

                  <div>
                    <p className="author_name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author_title">Estate Agents</p>
                  </div>
                </div>

                <div className="card_footer_actions">
                  <button className="card_footer_actions_btn">
                    <IoResizeOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoHeartOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property_card">
              <figure className="card_banner">
                <a href="#">
                  <PropertyImage alt="test" propertyNumber={2} />
                </a>

                <div className="card_badge orange">For Sales</div>

                <div className="banner_actions">
                  <button className="banner_actions_btn">
                    <IoLocation />

                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner_actions_btn">
                    <IoCamera />

                    <span>4</span>
                  </button>

                  <button className="banner_actions_btn">
                    <IoFilm />

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card_content">
                <div className="card_price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card_title">
                  <a href="#">Modern Apartments</a>
                </h3>

                <p className="card_text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card_list">
                  <li className="card_item">
                    <strong>3</strong>

                    <IoBedOutline />

                    <span>Bedrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>2</strong>

                    <IoManOutline />

                    <span>Bathrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>3450</strong>

                    <IoSquareOutline />

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card_footer">
                <div className="card_author">
                  <figure className="author_avatar">
                    <AuthorImage />
                  </figure>

                  <div>
                    <p className="author_name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author_title">Estate Agents</p>
                  </div>
                </div>

                <div className="card_footer_actions">
                  <button className="card_footer_actions_btn">
                    <IoResizeOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoHeartOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property_card">
              <figure className="card_banner">
                <a href="#">
                  <PropertyImage alt="test" propertyNumber={3} />
                </a>

                <div className="card_badge green">For Rent</div>

                <div className="banner_actions">
                  <button className="banner_actions_btn">
                    <IoLocation />

                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner_actions_btn">
                    <IoCamera />

                    <span>4</span>
                  </button>

                  <button className="banner_actions_btn">
                    <IoFilm />

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card_content">
                <div className="card_price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card_title">
                  <a href="#">Comfortable Apartment</a>
                </h3>

                <p className="card_text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card_list">
                  <li className="card_item">
                    <strong>3</strong>

                    <IoBedOutline />

                    <span>Bedrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>2</strong>

                    <IoManOutline />

                    <span>Bathrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>3450</strong>

                    <IoSquareOutline />

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card_footer">
                <div className="card_author">
                  <figure className="author_avatar">
                    <AuthorImage />
                  </figure>

                  <div>
                    <p className="author_name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author_title">Estate Agents</p>
                  </div>
                </div>

                <div className="card_footer_actions">
                  <button className="card_footer_actions_btn">
                    <IoResizeOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoHeartOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li>
            <div className="property_card">
              <figure className="card_banner">
                <a href="#">
                  <PropertyImage alt="test" propertyNumber={4} />
                </a>

                <div className="card_badge green">For Rent</div>

                <div className="banner_actions">
                  <button className="banner_actions_btn">
                    <IoLocation />

                    <address>Belmont Gardens, Chicago</address>
                  </button>

                  <button className="banner_actions_btn">
                    <IoCamera />

                    <span>4</span>
                  </button>

                  <button className="banner_actions_btn">
                    <IoFilm />

                    <span>2</span>
                  </button>
                </div>
              </figure>

              <div className="card_content">
                <div className="card_price">
                  <strong>$34,900</strong>/Month
                </div>

                <h3 className="h3 card_title">
                  <a href="#">Luxury villa in Rego Park</a>
                </h3>

                <p className="card_text">
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly
                  Renovated With New Wood
                </p>

                <ul className="card_list">
                  <li className="card_item">
                    <strong>3</strong>

                    <IoBedOutline />

                    <span>Bedrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>2</strong>

                    <IoManOutline />

                    <span>Bathrooms</span>
                  </li>

                  <li className="card_item">
                    <strong>3450</strong>

                    <IoSquareOutline />

                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>

              <div className="card_footer">
                <div className="card_author">
                  <figure className="author_avatar">
                    <AuthorImage />
                  </figure>

                  <div>
                    <p className="author_name">
                      <a href="#">William Seklo</a>
                    </p>

                    <p className="author_title">Estate Agents</p>
                  </div>
                </div>

                <div className="card_footer_actions">
                  <button className="card_footer_actions_btn">
                    <IoResizeOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoHeartOutline />
                  </button>

                  <button className="card_footer_actions_btn">
                    <IoAddCircleOutline />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function AuthorImage() {
  return (
    <Image
      src="/static/img/author.jpg"
      alt="William Seklo"
      width="0"
      height="0"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}

function PropertyImage({
  alt,
  propertyNumber,
}: {
  alt: string;
  propertyNumber: number;
}) {
  return (
    <Image
      src={`/static/img/property-${propertyNumber}.jpg`}
      alt={alt}
      width="0"
      height="0"
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
    />
  );
}
