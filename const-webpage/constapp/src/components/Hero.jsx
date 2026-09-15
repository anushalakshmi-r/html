import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="small-title">BUILD • DESIGN • DELIVER</p>

        <h1>
          Build Your Future
          <br />
          With Confidence
        </h1>

        <p className="hero-text">
          From concept to completion, we create exceptional spaces built around your vision.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Our Projects
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Talk To Our Expert
          </button>
        </div>
      </div>

      <div className="consultation-box">
        <h2>Talk to Our Expert</h2>

        <p>Tell us about your dream project</p>

        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Phone Number" />

        <select>
          <option>Select Project Type</option>
          <option>New Construction</option>
          <option>Renovation</option>
          <option>Interior Design</option>
        </select>

        <input type="text" placeholder="Location" />

        <button>Book Free Consultation →</button>
      </div>
    </section>
  );
}

export default Hero;