import utils from '../../lib/utils';
import Image from 'next/image';
import { ProjectProps } from '../../lib/definitions';
import { getProjects, getProjectByName } from 'app/app/services/data';

const { toTitleCase, removeHyphens } = utils();

export async function generateMetadata(props: ProjectProps) {
  const { project } = props.params;
  const item = await getProjectByName(project);
  if (!item) throw new Error('Project not found');

  return {
    title: toTitleCase(removeHyphens(item.name)),
    description: item.description,
    keywords: item.keywords,
    openGraph: {
      images: [item.imgdesktop],
    },
  };
}

export default async function Project(props: ProjectProps) {
  const { project } = props.params;
  const item = await getProjectByName(project);
  console.log(item);
  if (!item) throw new Error('Project not found');

  return (
    <main>
      <h1>{toTitleCase(project)}</h1>
      <h3>{item?.role}</h3>
      <p>{item?.description}</p>
      <Image
        className='project-image'
        src={item?.imgdesktop || ''}
        alt={item?.name}
        quality={100}
        height={300}
        width={400}
      />
    </main>
  );
}
