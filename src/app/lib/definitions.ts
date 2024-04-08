export interface ProjectProps {
  params: {
    project: string;
  };
}

export interface ButtonProps {
  params: {
    type: 'button' | 'submit' | 'reset';
    label: string;
    handleClick?: () => void;
  };
}

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
