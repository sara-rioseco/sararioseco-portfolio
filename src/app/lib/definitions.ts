export interface ProjectsProps {
  params: { project: string };
  searchParams?: {};
}
export interface ProjectProps {
  params: {
    id: number;
    name: string;
    role: string;
    description: string;
    url: string;
    repository: string;
    technologies: string[];
    keywords: string[] | never[];
    imgdesktop: string;
    imgmobile: string;
    video: string | null;
    date: string;
  };
  class?: string;
}

export interface ProjectsList {
  projects: {
    id: number;
    name: string;
    role: string;
    description: string;
    url: string;
    repository: string;
    technologies: string[];
    keywords: string[];
    imgdesktop: string;
    imgmobile: string;
    video: null;
    date: string;
  }[];
}

export interface ButtonProps {
  params: {
    type: 'button' | 'submit' | 'reset';
    label: string;
    handleClick?: () => void;
  };
}

export interface ModalProps {
  params: {
    title: string;
    message: string;
    handleModalClick?: () => void;
  };
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export interface FormData {
  FormData: [
    { name: string; value: string },
    { name: string; value: string },
    { name: string; value: string }
  ];
}
