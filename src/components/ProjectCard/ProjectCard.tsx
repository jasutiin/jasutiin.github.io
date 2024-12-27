import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  uris: string[];
  name: string;
  description: string;
  attributes: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  uris,
  name,
  description,
  attributes,
}) => {
  return (
    <div className={styles.container}>
      {uris.map((uri, index) =>
        index == 0 ? (
          <img className={`${styles.image}`} src={uri} key={uri} />
        ) : (
          <img
            className={`${styles.image} ${styles.noshow}`}
            src={uri}
            key={uri}
          />
        )
      )}
      <div className={styles.content}>
        <h2 className={styles.title}>{name}</h2>
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
