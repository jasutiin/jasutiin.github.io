import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  uri: string;
  name: string;
  description: string;
  attributes: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  uri,
  name,
  description,
  attributes,
}) => {
  return (
    <div className={styles.container}>
      <img src={uri}></img>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>{description}</p>
        <ul className={styles.attributes}>
          {attributes.map((attribute) => (
            <li className={styles.projectAttribute} key={attribute}>
              {attribute}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
