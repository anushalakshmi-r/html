import React from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  return (
    <section className="projects-section" id="projects">

      <div className="projects-heading">

        <p className="section-label">
          OUR WORK
        </p>

        <h2>Featured Projects</h2>

        <p>
          Explore some of the spaces we have designed
          and built with care.
        </p>

      </div>


      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
            alt="Luxury Villa"
          />

          <div className="project-overlay">
            <p>RESIDENTIAL</p>
            <h3>Modern Luxury Villa</h3>
            <span>Chennai, Tamil Nadu</span>
          </div>

        </div>


        {/* Project 2 */}
        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
            alt="Modern House"
          />

          <div className="project-overlay">
            <p>RESIDENTIAL</p>
            <h3>Contemporary Residence</h3>
            <span>Bangalore, Karnataka</span>
          </div>

        </div>


        {/* Project 3 */}
        <div className="project-card">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
            alt="Interior Project"
          />

          <div className="project-overlay">
            <p>INTERIOR</p>
            <h3>Premium Interior Design</h3>
            <span>Coimbatore, Tamil Nadu</span>
          </div>

        </div>

      </div>


      <div className="projects-button">

  <button
    onClick={() => navigate("/projects")}
  >
    View All Projects →
  </button>

</div>

    </section>
  );
}

export default Projects;