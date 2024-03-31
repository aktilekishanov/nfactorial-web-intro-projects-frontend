import React from 'react';
  

function Projects({ projects }) {
  return (
    <div className='projects-page'>
      <h1>Projects I've worked on</h1>
      <div className='project-items'>
        {projects.map((project, index) => (
          <div key={index} className='project-item'>
            <div className='project-img'>
              <a>
                <img src={project.url}></img>
              </a>
            </div>
            <div>
              <div className='project-name'>
                <h1>{project.name}</h1>
              </div>
              <div className='project-description'>
                <p>{project.description}</p>  
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
  
export default Projects;
