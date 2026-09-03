import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import { Link, useParams } from 'react-router-dom';

import {
  getProjectBySlug,
  type SanityProject,
} from '../../sanity/projects';
import styles from './Project.module.scss';

function Project() {
  const { slug } = useParams();
  const [project, setProject] = useState<SanityProject | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    let isCurrent = true;
    setIsLoading(true);
    setHasLoadError(false);

    getProjectBySlug(slug)
      .then((data) => {
        if (isCurrent) {
          setProject(data);
        }
      })
      .catch(() => {
        if (isCurrent) {
          setHasLoadError(true);
        }
      })
      .finally(() => {
        if (isCurrent) {
          setIsLoading(false);
        }
      });

    return () => {
      isCurrent = false;
    };
  }, [slug]);

  if (isLoading) {
    return <main className={styles.container}>Loading project...</main>;
  }

  if (hasLoadError) {
    return (
      <main className={styles.container}>
        <p>Project details are unavailable right now. Please try again later.</p>
      </main>
    );
  }

  if (!project) {
    return (
      <main className={styles.container}>
        <h1>Project not found</h1>
        <Link className={styles.backLink} to="/">
          ← Back to projects
        </Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <Link className={styles.backLink} to="/">
        ← Back to projects
      </Link>

      <article className={styles.project}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{project.title}</h1>
          {project.githubUrl && (
            <a
              className={styles.githubLink}
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} on GitHub`}
            >
              <FaGithub aria-hidden="true" size={26} />
            </a>
          )}
        </div>
        {project.description && (
          <p className={styles.description}>{project.description}</p>
        )}
        {project.cardImageUrl && (
          <img
            className={styles.image}
            src={project.cardImageUrl}
            alt={project.title}
          />
        )}
        {project.content && <p className={styles.content}>{project.content}</p>}
      </article>
    </main>
  );
}

export default Project;
