import React from "react";

function HowItWorks() {
  return (
    <section className="process-section">

      <div className="process-heading">

        <p className="section-label">
          SIMPLE & TRANSPARENT
        </p>

        <h2>
          How It Works
        </h2>

        <p>
          From your first conversation to handing over
          your dream space, we make the journey simple.
        </p>

      </div>


      <div className="process-container">

        {/* Step 1 */}
        <div className="process-card">

          <div className="process-number">
            01
          </div>

          <h3>
            Consultation
          </h3>

          <p>
            Tell us about your requirements,
            ideas and budget.
          </p>

        </div>


        {/* Step 2 */}
        <div className="process-card">

          <div className="process-number">
            02
          </div>

          <h3>
            Design & Planning
          </h3>

          <p>
            Our experts create detailed plans
            designed around your vision.
          </p>

        </div>


        {/* Step 3 */}
        <div className="process-card">

          <div className="process-number">
            03
          </div>

          <h3>
            Construction
          </h3>

          <p>
            Our experienced team brings your
            project to life.
          </p>

        </div>


        {/* Step 4 */}
        <div className="process-card">

          <div className="process-number">
            04
          </div>

          <h3>
            Handover
          </h3>

          <p>
            We complete the final checks and
            hand over your dream space.
          </p>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;