import './index.css';
import UnsplashItem from '../../types/UnsplashItemInterface';
import { ImgCard } from '../ImgCard/ImgCard';

interface ImgCardListProps {
  cards: UnsplashItem[] | null;
}

export const ImgCardList = ({ cards }: ImgCardListProps) => {
  return (
    <div className="img-card-list">
      {cards?.map((card) => (
        <ImgCard info={card} key={card.id} />
      ))}
    </div>
  );
};
