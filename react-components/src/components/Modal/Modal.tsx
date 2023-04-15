import './index.css';
import ReactDOM from 'react-dom';

type ModalProps = {
  isShowing: boolean;
  hide: () => void;
  children?: React.ReactNode;
};

const closeModal = (func: () => void) => (e: React.MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target === e.currentTarget) {
    func();
  }
};

const Modal = ({ isShowing, hide, children }: ModalProps) =>
  isShowing
    ? ReactDOM.createPortal(
        <div className="modal-overlay" onClick={closeModal(hide)}>
          {children}
        </div>,
        document.body
      )
    : null;

export default Modal;
