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
