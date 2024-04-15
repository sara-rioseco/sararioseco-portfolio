import { ProjectProps } from '../lib/definitions';

export const getProjects = async () => {
  try {
    const res = await import('../lib/data.json');
    return res.default.projects;
  } catch (err) {
    throw err;
  }
};

export const getProjectById = async (id: number) => {
  try {
    const res = await getProjects();
    const project = res.find(project => project.id === id);
    return project;
  } catch (err) {
    throw err;
  }
};
export const getProjectByName = async (name: string) => {
  console.log('name here', name);
  try {
    const res = await getProjects();
    const project = res.find(p => p.name.toLowerCase() === name.toLowerCase());
    console.log('name here', name);
    console.log('project here', project);
    return project;
  } catch (err) {
    throw err;
  }
};
