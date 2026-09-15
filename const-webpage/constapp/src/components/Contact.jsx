import React, { useState } from "react";

function Contact() {
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState("");

  const getMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        setLocation(
          `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`
        );

        setLocationError("");
      },
      () => {
        setLocationError(
          "Unable to get your location. Please allow location permission."
        );
      }
    );
  };

  return (
    <section className="contact-page">

      {/* Heading */}
      <div className="contact-header">
        <p className="section-label">CONTACT BLUEPEAK</p>

        <h1>Let's Build Something Great Together </h1>

        <p>
          Have a construction, renovation or interior design project in mind?
          Our team is ready to help you turn your vision into reality.
        </p>
      </div>


      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Whether you are planning a new home, commercial building,
            renovation or interior project, BluePeak Construction is here
            to guide you from planning to completion.
          </p>


          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <h3>Our Office</h3>

              <p>
                BluePeak Construction<br />
                Chennai, Tamil Nadu<br />
                India
              </p>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">📞</div>

            <div>
              <h3>Phone</h3>

              <p>+91 98765 43210</p>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">✉️</div>

            <div>
              <h3>Email</h3>

              <p>hello@bluepeakconstruction.com</p>
            </div>
          </div>


          <div className="contact-item">
            <div className="contact-icon">🕐</div>

            <div>
              <h3>Working Hours</h3>

              <p>
                Monday – Saturday<br />
                9:00 AM – 6:00 PM
              </p>
            </div>
          </div>


          {/* GEOLOCATION */}
          <div className="location-box">

            <h3>📍 Find Your Location</h3>

            <p>
              Allow location access to get your current coordinates.
            </p>

            <button
              className="location-btn"
              onClick={getMyLocation}
            >
              Get My Location
            </button>

            {location && (
              <p className="location-result">
                {location}
              </p>
            )}

            {locationError && (
              <p className="location-error">
                {locationError}
              </p>
            )}

          </div>

        </div>


        {/* RIGHT SIDE - MAP */}
        <div className="map-container">

          <iframe
            title="BluePeak Construction Location"
            src="https://www.google.com/maps?q=Chennai,Tamil Nadu,India&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;