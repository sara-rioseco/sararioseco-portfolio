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
  try {
    const res = await getProjects();
    const project = res.find(
      project => project.name.toLowerCase() === name.toLowerCase()
    );
    return project;
  } catch (err) {
    throw err;
  }
};
