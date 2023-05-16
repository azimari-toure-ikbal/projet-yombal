import React from "react";
import {
  IoCarSportOutline,
  IoWaterOutline,
  IoShieldCheckmarkOutline,
  IoFitnessOutline,
  IoBedOutline,
  IoHomeOutline,
  IoFootballOutline,
  IoArrowForwardOutline,
  IoLibraryOutline,
} from "react-icons/io5";

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <p className="section_subtitle">Nos catégories</p>

        <h2 className="h2 section_title">Catégories d'aménagements</h2>

        <ul className="features_list">
          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoCarSportOutline />
              </div>

              <h3 className="card_title">Parking Space</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoWaterOutline />
              </div>

              <h3 className="card_title">Swimming Pool</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoShieldCheckmarkOutline />
              </div>

              <h3 className="card_title">Private Security</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoFitnessOutline />
              </div>

              <h3 className="card_title">Medical Center</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoLibraryOutline />
              </div>

              <h3 className="card_title">Library Area</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoBedOutline />
              </div>

              <h3 className="card_title">King Size Beds</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoHomeOutline />
              </div>

              <h3 className="card_title">Smart Homes</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="features_card">
              <div className="card_icon">
                <IoFootballOutline />
              </div>

              <h3 className="card_title">Kid’s Playland</h3>

              <div className="card_btn">
                <IoArrowForwardOutline />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
