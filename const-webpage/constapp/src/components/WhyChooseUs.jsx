import React from "react";

function WhyChooseUs() {
  return (
    <section className="why-section">

      <div className="why-heading">

        <p className="section-label">
          WHY BLUEPEAK
        </p>

        <h2>Why Choose Us?</h2>

        <p>
          We combine quality, transparency and technology
          to give you a better construction experience.
        </p>

      </div>


      <div className="why-container">

        {/* Feature 1 */}
        <div className="why-card">

          <div className="why-icon">
            ₹
          </div>

          <h3>Guaranteed Price Protection</h3>

          <p>
            No unexpected surprises. We maintain
            complete transparency throughout your project.
          </p>

        </div>


        {/* Feature 2 */}
        <div className="why-card">

          <div className="why-icon">
            ✓
          </div>

          <h3>440+ Quality Checks</h3>

          <p>
            Every stage of construction goes through
            detailed quality inspections.
          </p>

        </div>


        {/* Feature 3 */}
        <div className="why-card">

          <div className="why-icon">
            ⏱
          </div>

          <h3>Timely Delivery</h3>

          <p>
            We follow a structured process to make sure
            your dream project is delivered on time.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;