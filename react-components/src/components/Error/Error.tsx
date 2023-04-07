import './index.css';

const Error = ({ message }: { message: string | undefined }) => {
  return <p className="error">{message}</p>;
};

export { Error };
