import './Projects.css'; // Import the Projects CSS file

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="project1.jpg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Shopping Mall</h5>
                <p className="card-text">Description of the project.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="project2.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project Title 2</h5>
                <p className="card-text">Description of the second project.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-3">
            <div className="card">
              <img src="project3.jpg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project Title 3</h5>
                <p className="card-text">Description of the third project.</p>
                <a href="#" className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
