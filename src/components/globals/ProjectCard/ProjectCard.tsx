import styles from './ProjectCard.module.sass';
import { ProjectProps } from 'app/app/lib/definitions';
import utils from 'app/app/lib/utils';

import Link from 'next/link';

export const ProjectCard = (props: ProjectProps) => {
  const { id, name, role, imgdesktop, date } = props.params;
  const { removeHyphens, toTitleCase } = utils();

  return (
    <Link href={`/projects/${name}`}>
      <li
        className={styles.ProjectCard}
        style={{ backgroundImage: `url(${imgdesktop})` }}
      >
        <div className={styles.Wrapper}>
          <h2 className={styles.Title}>{removeHyphens(name)}</h2>
          <h2 className={styles.Subtitle}>{date}</h2>
        </div>
      </li>
    </Link>
  );
};
