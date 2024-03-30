import { toTitleCase } from '../../lib/utils';
import { ProjectProps } from '../../lib/definitions';
import styles from '../../page.module.css';

export default function Project(props: ProjectProps) {
  const { project } = props.params;

  return (
    <main className={styles.main}>
      <h1>Project {toTitleCase(project)}</h1>
    </main>
  );
}
