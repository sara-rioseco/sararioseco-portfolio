import { toTitleCase } from '../../lib/utils';
import { ProjectProps } from '../../lib/definitions';

export default function Project(props: ProjectProps) {
  const { project } = props.params;

  return (
    <main>
      <h1>Project {toTitleCase(project)}</h1>
    </main>
  );
}
