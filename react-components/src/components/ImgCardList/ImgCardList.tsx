import './index.css';
import { ImgCard } from '../ImgCard/ImgCard';
import { useSearch } from '../../hooks/useSearch';
import { RotatingLines } from 'react-loader-spinner';

interface ImgCardListProps {
  searchValue: string;
}

export const ImgCardList = ({ searchValue }: ImgCardListProps) => {
  const { loading, error, result } = useSearch('search', searchValue);

  return (
    <>
      <RotatingLines
        strokeColor="#fec524"
        strokeWidth="3"
        animationDuration="0.75"
        width="10%"
        visible={loading}
      />
      <div className="img-card-list">
        {!loading && result.map((card) => <ImgCard info={card} key={card.id} />)}
      </div>
      {result?.length === 0 && !loading && !error ? (
        <h1>No images found with this query. Try another keyword!</h1>
      ) : null}
      {error && <h2 className="fetch-error">{error.message}</h2>}
    </>
  );
};
