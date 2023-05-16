import React from "react";

export default function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta_card">
          <div className="head_card">
            <h2 className="h2 card_title">Nous contacter ?</h2>

            <p className="card_text">
              Nous pouvons vous aider à trouver la maison de vos rêves
            </p>
          </div>
          <form action="">
            <div className="inputBox">
              <div className="input">
                <span>Votre email</span>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="inputBox">
              <div className="input">
                <span>Votre message</span>
                <textarea
                  name=""
                  placeholder="Enter your message"
                  id=""
                  cols={20}
                  rows={5}
                ></textarea>
              </div>
            </div>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
    </section>
  );
}
