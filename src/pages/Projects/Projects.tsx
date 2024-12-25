import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Projects.module.scss';

const sampleProject = {
  uri: 'lol',
  name: 'Looply',
  description: 'A mobile video sharing platform.',
  attributes: ['Javascript', 'React Native', 'Express', 'MongoDB', 'AWS S3'],
};

const sampleProject2 = {
  uri: 'lol',
  name: 'UofCBazaar',
  description: 'A platform for students to conveniently buy and sell items.',
  attributes: ['css', 'javascript', 'react'],
};

const sampleProject3 = {
  uri: 'lol',
  name: 'SwapMeet',
  description: `Have some skills you're willing to share? Would you also like to learn new things? No need for paying for tutors, just meet people and swap!`,
  attributes: ['css', 'javascript', 'react'],
};

const sampleProject4 = {
  uri: 'lol',
  name: 'jasuttin',
  description:
    'I make videos for fun! Mainly focused on computer science content.',
  attributes: ['css', 'javascript', 'react'],
};

const sampleProject5 = {
  uri: 'lol',
  name: 'Snake Game',
  description: 'so cool project very nice',
  attributes: ['css', 'javascript', 'react'],
};

const projects = [
  sampleProject,
  sampleProject2,
  sampleProject3,
  sampleProject4,
  sampleProject5,
];

function Projects() {
  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            uri={project.uri}
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
