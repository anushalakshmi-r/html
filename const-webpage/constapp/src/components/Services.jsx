import React from "react";

function Services() {
  return (
    <section className="services-section" id="services">

      <div className="services-heading">

        <p className="section-label">
          WHAT WE DO
        </p>

        <h2>
          Our Services
        </h2>

        <p>
          Complete construction solutions designed
          around your vision.
        </p>

      </div>


      <div className="services-container">

        {/* Service 1 */}
        <div className="service-card">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
            alt="Interior planning"
          />

          <div className="service-content">

            <span className="service-number">
              01
            </span>

            <h3>
              Interior Planning & Designing
            </h3>

            <p>
              Beautiful and functional interiors
              created around your lifestyle.
            </p>

            <a href="#">
              Learn More →
            </a>

          </div>

        </div>


        {/* Service 2 */}
        <div className="service-card">

          <img
            src="https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80"
            alt="Renovation"
          />

          <div className="service-content">

            <span className="service-number">
              02
            </span>

            <h3>
              Renovation & Remodeling
            </h3>

            <p>
              Transforming existing spaces into
              modern and beautiful environments.
            </p>

            <a href="#">
              Learn More →
            </a>

          </div>

        </div>


        {/* Service 3 */}
        <div className="service-card">

          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
            alt="Architectural plans"
          />

          <div className="service-content">

            <span className="service-number">
              03
            </span>

            <h3>
              Architectural Plans
            </h3>

            <p>
              Smart architectural planning that
              turns ideas into practical spaces.
            </p>

            <a href="#">
              Learn More →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;