import styles from 'app/sass/projects.module.sass';
import { ContactEmail } from 'app/components/layout/ContactEmail';
import { getProjects } from '../services/data';
import { ProjectCard } from 'app/components/globals/ProjectCard';
import { ProjectProps } from '../lib/definitions';

export async function generateMetadata() {
  return {
    title: 'Projects',
    description: "Sara Rioseco's Web Development Projects",
    keywords: [
      'portfolio',
      'development',
      'web',
      'developer',
      'typescript',
      'nextjs',
      'vercel',
    ],
    openGraph: {
      description: "Sara Rioseco's Web Development Projects",
      images: [
        'https://srioseco-portfolio.s3.us-east-2.amazonaws.com/img/icon-180x180.webp',
      ],
    },
  };
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main>
      <h1 className={styles.Title}>Take a look at my most recent projects</h1>
      <p className={styles.Text}>
        You can click on each one to see more details
      </p>
      <ul className={styles.List}>
        {projects
          .sort((a, b) => b.id - a.id)
          .map(project => {
            return (
              <ProjectCard
                key={`project-id-${project.id}`}
                params={project}
              />
            );
          })}
      </ul>
      <ContactEmail />
    </main>
  );
}
