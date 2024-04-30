import { ProjectsList } from 'app/app/lib/definitions';
import styles from './Bento.module.sass';
import { ProjectCard } from 'app/components/globals/ProjectCard';

export const Bento = (props: ProjectsList) => {
  return (
    <section className={styles.BentoContainer}>
      <h1 className={styles.Title}>Take a look at my most recent projects</h1>
      <p className={styles.Text}>
        You can click on each one to see more details
      </p>
      <ul className={styles.BentoGrid}>
        {props.projects
          .sort((a, b) => b.id - a.id)
          .map(project => {
            return (
              <ProjectCard
                key={`project-id-${project.id}`}
                params={project}
                class={styles.BentoItem}
              />
            );
          })}
      </ul>
    </section>
  );
};
