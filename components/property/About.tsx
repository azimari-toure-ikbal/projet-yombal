import React from 'react'
import Image from "next/image";
import { IoAccessibilityOutline, IoBagRemove, IoBedOutline, IoChevronBackOutline, IoChevronForwardOutline, IoFileTrayFullOutline, IoFlashlightOutline, IoGlobeOutline, IoHomeOutline, IoLanguage, IoStarOutline, IoTimeOutline } from 'react-icons/io5';


export default function About() {
  return (
    <section className="property_about">
        <div className="container">
        <div className="property_details ">
            <div className="main_info low_bordered details_container">
            <div className="info_header">
                <h2>
                Chambre dans appartement · Chez Edouard
                </h2>
                <span>
                    <Image 
                        src="/static/img/author.jpg"
                        alt="Yombal Logo"
                        className="dark:invert img"
                        height="40"
                        width="40"
                    />
                </span>
            </div>
            <div className="info_cards">
                <div>
                <IoBedOutline className="ion_icon"/>
                <span>
                    1 lit double
                </span>
                </div>
                <div>
                <IoAccessibilityOutline className="ion_icon" />
                <span>
                    Sur place : l'hôte
                </span>
                </div>
                <div>
                <IoFlashlightOutline className="ion_icon" />
                <span>
                    Salle de bain privée
                </span>
                </div>
            </div>
            </div>
            <div className="room_info details_container low_bordered">
            <div>
                <IoHomeOutline className="ion_icon" />
                <span>
                <h3>
                    Chambre dans appartement
                </h3>
                <p>
                    Votre chambre privée dans un logement, avec accès à des espaces partagés.
                </p>
                </span>
            </div>
            <div>
                <IoFileTrayFullOutline className="ion_icon" />
                <span>
                <h3>
                    Arrivée autonome
                </h3>
                <p>
                    Vous pouvez entrer dans les lieux avec une boîte à clé sécurisée.
                </p>
                </span>
            </div>
            <div>
                <IoTimeOutline className="ion_icon" />
                <span>
                <h3>
                    Annulation gratuite pendant 48 heures.
                </h3>
                <p>
                </p>
                </span>
            </div>
            </div>
            <div className="owner_info details_container low_bordered">
            <h2>Faites connaissance avec votre hôte</h2>
            <div className="owner_card ">
                <div className="presentation">
                <div className="profile">
                    <Image 
                        src="/static/img/author.jpg"
                        alt="Yombal Logo"
                        className="dark:invert img"
                        height="40"
                        width="40"
                    />
                    <h2>Edouard</h2>
                    <p>Superhôte</p>
                </div>
                <div className="ratings">
                    <div>
                    <h3>
                        300
                    </h3>
                    <small>évaluations</small>
                    </div>
                    <hr/>
                    <div>
                    <h3>
                        7
                    </h3>
                    <small>années d'expérience</small>
                    </div>
                    <hr/>
                    <div>
                    <h3 className="buffered_text">
                        4.86
                        <IoStarOutline className="ion_icon" />

                    </h3>
                    <small>en note globale</small>
                    </div>
                </div>
                </div>
                <div className="owner_about">
                <div className="more">
                    <span>
                    <IoBagRemove className="ion_icon" />
                    <p>Ma profession : coach</p>
                    </span>
                    <span>
                    <IoLanguage className="ion_icon" />
                    <p>Langues parlées : Anglais, Français, Italien, Portugais et Espagnol</p>
                    </span>
                    <span>
                    <IoGlobeOutline className="ion_icon" />
                    <p>Je vis à : Valence, Espagne</p>
                    </span>
                </div>
                <div className="desc">
                    <p>Ouverte et communicative, avec un don de gens et ravie de recevoir des amis du monde à la maison.
                    </p>
                </div>
                <div className="see_more low_bordered">
                En savoir plus <IoChevronForwardOutline className="ion_icon" />
                </div>
                <div className="owner_btn_container">
                    <button className="btn">Discutez avec votre hôte</button>
                </div>
                <div className="warning_text">
                    <small>
                    Pour protéger votre paiement, ne transférez jamais d'argent et ne communiquez pas en dehors du
                    site ou de l'application Yombal.
                    </small>
                </div>

                </div>
            </div>
            </div>
            <div className="property_info details_container">
            <h3>À propos de ce logement</h3>
            <br/>
            <p>Belle maison familiale à seulement dix minutes en voiture du début de la West Highland Way et à
                proximité du centre-ville de Glasgow. Nous offrons une chambre double confortable, une salle de bain à
                l'usage exclusif des voyageurs et un petit-déjeuner simple. S'il vous plaît noter, nous avons une autre
                chambre simple répertoriée de sorte que la salle de bains peut parfois être partagée avec un autre
                invité. Vous pouvez poser des questions à ce sujet au moment de la réservation.</p>
            </div>
            </div>
            <div className="property_booking">
                <div className="booking_card">
                <div className="card_body">
                    <div className="card_header">
                    <div className="price">
                        <h3>45.000 FCFA</h3>
                        <p>par mois</p>
                    </div>
                    <p className="rating">
                    <IoStarOutline className="ion_icon" />
                        4.86
                    </p>
                    </div>
                    <div className="datepicker">
                    <input type="date"/>
                    <button className="btn">Planifier la visite</button>
                    </div>
                    <small>
                    Il ne s'agira que de visiter le logement pour le moment.
                    </small>
                </div>
                </div>
            </div>
            </div>

            </section>
        // </div>
  )
}
