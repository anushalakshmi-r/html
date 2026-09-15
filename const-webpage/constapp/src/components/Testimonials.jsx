import React, { useState, useEffect } from "react";

function Testimonials() {

  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Arun Kumar",
      location: "Chennai",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      text:
        "BluePeak made our entire construction journey simple and stress-free. The quality of work was excellent and the team was very professional."
    },

    {
      name: "Priya & Santhosh",
      location: "Bangalore",
      role: "Homeowners",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      text:
        "From design to final handover, everything was handled perfectly. We loved how transparent the team was throughout the project."
    },

    {
      name: "Rahul Menon",
      location: "Coimbatore",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      text:
        "Our home turned out even better than we imagined. The attention to detail and timely delivery really impressed us."
    },

    {
      name: "Divya Krishnan",
      location: "Chennai",
      role: "Villa Owner",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      text:
        "The BluePeak team understood exactly what we wanted. Their design suggestions and execution were outstanding."
    },

    {
      name: "Vivek Raj",
      location: "Madurai",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      text:
        "We trusted BluePeak with our commercial project and they delivered everything on time. Highly recommended."
    }
  ];


  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );
  };


  const previousTestimonial = () => {
    setCurrent((prev) =>
      prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };
  
  useEffect(() => {

  const timer = setInterval(() => {

    setCurrent((prev) =>
      prev === testimonials.length - 1
        ? 0
        : prev + 1
    );

  }, 5000);

  return () => clearInterval(timer);

}, []);


  return (
    <section className="testimonials-section">

      <div className="testimonials-heading">

        <p className="section-label">
          CLIENT STORIES
        </p>

        <h2>
          What Our Clients Say
        </h2>

        <p>
          Real experiences from clients who trusted
          us to build their dream spaces.
        </p>

      </div>


      {/* CAROUSEL */}

      <div className="testimonial-carousel">

        {/* LEFT BUTTON */}

        <button
          className="testimonial-arrow left"
          onClick={previousTestimonial}
        >
          ←
        </button>


        {/* CARD */}

        <div className="testimonial-card">

          <div className="stars">
            ★★★★★
          </div>

          <p className="testimonial-text">
            "{testimonials[current].text}"
          </p>


          <div className="client">

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="client-image"
            />

            <div>

              <h4>
                {testimonials[current].name}
              </h4>

              <span>
                {testimonials[current].role} •{" "}
                {testimonials[current].location}
              </span>

            </div>

          </div>

        </div>


        {/* RIGHT BUTTON */}

        <button
          className="testimonial-arrow right"
          onClick={nextTestimonial}
        >
          →
        </button>

      </div>


      {/* DOTS */}

      <div className="testimonial-dots">

        {testimonials.map((_, index) => (

          <button
            key={index}
            className={
              current === index
                ? "testimonial-dot active"
                : "testimonial-dot"
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>
  );
}

export default Testimonials;