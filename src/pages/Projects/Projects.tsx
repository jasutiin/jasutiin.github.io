import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.scss';
import projects from '../../constants/projects';

function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            uris={project.uri}
            name={project.name}
            description={project.description}
            attributes={project.attributes}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
