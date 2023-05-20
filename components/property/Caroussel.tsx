import React from 'react'
import { IoBusinessOutline, IoCloudUploadOutline, IoCopyOutline, IoHeartOutline, IoStarOutline } from 'react-icons/io5'

export default function Caroussel() {
  return (
    <section className="caroussel" id="single_view">
    <div className="container">
      <div className="caroussel_header">
        <span className="main_title">
          <IoBusinessOutline className="ion_icon" />
          <h2 className="caroussel_header_title">Chambre double dans un bel appartement</h2>
        </span>
        <span className="details">
          <div className="ratings">
            <p className="iconified_text">
              <IoStarOutline className="ion_icon" />
              5.0
            </p>
            <p>
              ·
              4 commentaires
            </p>
            <p>
              ·
              Mermoz, Sacré-Coeur, Dakar
            </p>
          </div>
          <div className="social_links">
            <p className="iconified_text">
              <IoCloudUploadOutline className="ion_icon"/>
              Partager
            </p>
            <p className="iconified_text">
              <IoHeartOutline className="ion_icon" />
              Enregistrer
            </p>
          </div>
        </span>
      </div>

      <div className="caroussel_grid">
        <div className="grid_item" style={{backgroundImage: "url('/static/img/property-2.jpg')"}}>
        </div>
        <div className="grid_item" style={{backgroundImage: "url('/static/img/property-4.jpg')"}}>
        </div>
        <div className="grid_item" style={{backgroundImage: "url('/static/img/property-3.jpg')"}}>
        </div>
        <div className="grid_item" style={{backgroundImage: "url('/static/img/property-1.jpg')"}}>
        </div>
        <div className="grid_item" style={{backgroundImage: "url('/static/img/property-4.jpg')"}}>
        </div>
        <span className="grid_button">
          <IoCopyOutline className="ion_icons"/>
          Afficher toutes les photos
        </span>
      </div>
    </div>

    </section>
  )
}
