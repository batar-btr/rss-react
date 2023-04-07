import { ImgCardInfo } from '../ImgCardInfo/ImgCardInfo';
import useModal from '../../hooks/useModal';
import UnsplashItem from '../../types/UnsplashItemInterface';
import Modal from '../Modal/Modal';
import './index.css';

interface ImgCardProps {
  info: UnsplashItem;
}

export const ImgCard = (props: ImgCardProps) => {
  const [showModal, toggleModal] = useModal();
  const {
    id,
    urls: { small },
    alt_description,
  } = props.info;
  return (
    <>
      <div className="img-card" onClick={toggleModal}>
        <h2 className="img-card__title">{alt_description || 'No description'}</h2>
        <img src={small} alt={alt_description} />
      </div>
      <Modal isShowing={showModal} hide={toggleModal}>
        <ImgCardInfo imgId={id} closeModal={toggleModal} />
      </Modal>
    </>
  );
};
