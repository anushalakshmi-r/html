import React from "react";

function CompanyStory() {
  return (
    <div className="company-story-page">

      {/* HERO */}

      <section className="story-hero">

        <div>
          <p className="section-label">
            OUR STORY
          </p>

          <h1>
            Building Dreams.
            <br />
            Creating Legacies.
          </h1>

          <p>
            BluePeak was founded with a simple belief —
            every building should be more than just walls
            and concrete. It should be a place where people
            create memories and build their future.
          </p>
        </div>

      </section>


      {/* COMPANY STORY */}

      <section className="story-section">

        <div className="story-image">

          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80"
            alt="BluePeak construction"
          />

        </div>


        <div className="story-content">

          <p className="section-label">
            WHO WE ARE
          </p>

          <h2>
            A Journey Built on Trust
          </h2>

          <p>
            BluePeak began with a vision to bring together
            quality construction, thoughtful design and
            transparent communication.
          </p>

          <p>
            What started as a small team has grown into a
            passionate group of architects, engineers,
            designers and construction professionals.
          </p>

          <p>
            Today, we work with homeowners and businesses
            across India to create spaces that combine
            functionality, beauty and long-lasting quality.
          </p>

        </div>

      </section>


      {/* CEO */}

      <section className="ceo-section">

        <div className="ceo-image">

          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
            alt="BluePeak CEO"
          />

        </div>


        <div className="ceo-content">

          <p className="section-label">
            LEADERSHIP
          </p>

          <h2>
            Meet Our CEO
          </h2>

          <h3>
            Arjun Mehta
          </h3>

          <span>
            Founder & Chief Executive Officer
          </span>

          <p>
            Arjun founded BluePeak with a passion for
            creating better spaces and a strong belief
            that construction should be transparent,
            professional and customer-focused.
          </p>

          <p>
            With years of experience in construction and
            project management, he leads the BluePeak team
            with a focus on innovation, quality and
            customer satisfaction.
          </p>

          <blockquote>
            "We don't just build buildings.
            We build the places where life happens."
          </blockquote>

        </div>

      </section>


      {/* TEAM */}

      <section className="team-section">

        <div className="team-heading">

          <p className="section-label">
            OUR PEOPLE
          </p>

          <h2>
            The Team Behind BluePeak
          </h2>

          <p>
            A talented team working together to turn
            ideas into exceptional spaces.
          </p>

        </div>


        <div className="team-container">

          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Architect"
            />

            <h3>
              Ananya Sharma
            </h3>

            <p>
              Lead Architect
            </p>

          </div>


          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
              alt="Project Manager"
            />

            <h3>
              Vikram Rao
            </h3>

            <p>
              Project Manager
            </p>

          </div>


          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
              alt="Interior Designer"
            />

            <h3>
              Meera Krishnan
            </h3>

            <p>
              Interior Designer
            </p>

          </div>


          <div className="team-card">

            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80"
              alt="Construction Engineer"
            />

            <h3>
              Karthik Kumar
            </h3>

            <p>
              Construction Engineer
            </p>

          </div>

        </div>

      </section>


      {/* MISSION */}

      <section className="mission-section">

        <div className="mission-card">

          <div className="mission-icon">
            🎯
          </div>

          <h3>
            Our Mission
          </h3>

          <p>
            To make quality construction accessible,
            transparent and stress-free for every client.
          </p>

        </div>


        <div className="mission-card">

          <div className="mission-icon">
            👁️
          </div>

          <h3>
            Our Vision
          </h3>

          <p>
            To become one of India's most trusted
            construction and design companies.
          </p>

        </div>


        <div className="mission-card">

          <div className="mission-icon">
            ⭐
          </div>

          <h3>
            Our Values
          </h3>

          <p>
            Quality, integrity, innovation and
            customer-first thinking guide everything we do.
          </p>

        </div>

      </section>

    </div>
  );
}

export default CompanyStory;