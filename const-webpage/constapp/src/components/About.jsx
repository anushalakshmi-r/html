import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <section className="about-section" id="about">

      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80"
          alt="Construction project"
        />
      </div>

      <div className="about-content">

        <p className="section-label">
          ABOUT BLUEPEAK
        </p>

        <h2>
          Building Landmarks.
          <br />
          Delivering Excellence.
        </h2>

        <p>
          We believe every space has a story waiting to be built.
          From thoughtful planning to flawless execution, we bring
          your vision to life with quality, transparency and care.
        </p>

        <p>
          With experienced professionals and a commitment to
          excellence, we deliver homes and commercial spaces
          that are designed to last.
        </p>

        <button
  className="about-btn"
  onClick={() => navigate("/about-company")}
>
  Discover Our Story →
</button>

      </div>

    </section>
  );
}

export default About;