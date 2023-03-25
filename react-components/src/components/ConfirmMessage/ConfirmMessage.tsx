import './index.css';
interface ConfirmMessageProps {
  message: string;
}

const ConfirmMessage = (props: ConfirmMessageProps) => {
  return (
    <div className="confirm-overlay">
      <h1>CONGRATULATIONS!!!!</h1>
      <h2>{props.message}</h2>
    </div>
  );
};

export { ConfirmMessage };
