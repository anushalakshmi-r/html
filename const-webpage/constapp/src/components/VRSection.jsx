import React from "react";

function VRSection() {
  return (
    <section className="vr-section">

      <div className="vr-image">
        <img
          src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80"
          alt="Modern building"
        />

        <div className="vr-badge">
          360°
          <span>VR Experience</span>
        </div>
      </div>


      <div className="vr-content">

        <p className="section-label">
          EXPERIENCE BEFORE YOU BUILD
        </p>

        <h2>
          Experience Your Project
          <br />
          in Virtual Reality
        </h2>

        <p>
          Step inside your future home before construction
          even begins. Explore every corner and experience
          your space in an immersive virtual environment.
        </p>


        <div className="vr-features">

          <div>
            <span>✓</span>
            <p>Explore your home in 360°</p>
          </div>

          <div>
            <span>✓</span>
            <p>Visualize interiors before construction</p>
          </div>

          <div>
            <span>✓</span>
            <p>Make confident design decisions</p>
          </div>

        </div>


        <button className="primary-btn">
          Book Free Consultation →
        </button>

      </div>

    </section>
  );
}

export default VRSection;