import UnsplashItem from '../../types/UnsplashItemInterface';
import './index.css';

interface ImgCardProps {
  info: UnsplashItem;
}

export const ImgCard = (props: ImgCardProps) => {
  const {
    urls: { small },
    alt_description,
  } = props.info;
  return (
    <div className="img-card">
      <h2 className="img-card__title">{alt_description || 'No description'}</h2>
      <img src={small} alt={alt_description} />
    </div>
  );
};
