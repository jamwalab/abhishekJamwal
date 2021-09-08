import React from 'react';

function Projects({allProjects}) {
  //Map the project array and generate project blocks
  return(
    <section>
      {allProjects.map((project) => (
        <article className="img-container" key={project.title}>
          <div className='projectTitle'>
            <h4 className="bottomBorder-underline">{project.title}</h4>
            <p>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>|
              <a href={project.link} target="_blank" rel="noreferrer">
                Website
              </a>
            </p>
          </div>
          
          <p className="projectDesc">{project.description}</p>
          <a className="img-preview" href={project.link} target="_blank" rel="noreferrer">
            <img
              src={require(`../../assets/images/${project.image}`).default}
              alt={project.title}
            ></img>
            <div className="img-text">
              <p>{project.tech}</p>
            </div>
          </a> 
        </article>
      ))}
    </section>
  );
};

export default Projects;