import React, { useState } from "react";

function AllProjects() {

  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      category: "Exterior",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 2,
      title: "Premium Living Room",
      category: "Interior",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 3,
      title: "Corporate Office",
      category: "Commercial",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 4,
      title: "Contemporary House",
      category: "Exterior",
      location: "Coimbatore",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 5,
      title: "Luxury Bedroom",
      category: "Interior",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 6,
      title: "Shopping Complex",
      category: "Commercial",
      location: "Bangalore",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 7,
      title: "Architectural Floor Plan",
      category: "Plans",
      location: "Chennai",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 8,
      title: "Modern Kitchen",
      category: "Interior",
      location: "Madurai",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80"
    },

    {
      id: 9,
      title: "Villa Floor Plan",
      category: "Plans",
      location: "Coimbatore",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const filters = [
    "All",
    "Interior",
    "Exterior",
    "Commercial",
    "Plans"
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="all-projects-page">

      {/* Heading */}

      <div className="all-projects-heading">

        <p className="section-label">
          OUR PORTFOLIO
        </p>

        <h1>Our Projects</h1>

        <p>
          Explore our residential, commercial,
          interior and architectural projects.
        </p>

      </div>


      {/* Filters */}

      <div className="project-filters">

        {filters.map((filter) => (

          <button
            key={filter}
            className={
              activeFilter === filter
                ? "filter-btn active"
                : "filter-btn"
            }
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>

        ))}

      </div>


      {/* Projects */}

      <div className="all-projects-container">

        {filteredProjects.map((project) => (

          <div
            className="all-project-card"
            key={project.id}
          >

            <div className="all-project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <span>
                {project.category}
              </span>

            </div>


            <div className="all-project-info">

              <h3>{project.title}</h3>

              <p>📍 {project.location}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default AllProjects;