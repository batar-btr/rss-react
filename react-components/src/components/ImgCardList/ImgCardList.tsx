import './index.css';
import { ImgCard } from '../ImgCard/ImgCard';
import { RotatingLines } from 'react-loader-spinner';
import { useGetImagesQuery } from '../../store/api';
import { useAppSelector } from '../../store/hooks';

export const ImgCardList = () => {
  const searchValue = useAppSelector((store) => store.searchValue.value);
  const { data, isFetching, isError, error } = useGetImagesQuery(searchValue);
  return (
    <>
      <RotatingLines
        strokeColor="#fec524"
        strokeWidth="3"
        animationDuration="0.75"
        width="10%"
        visible={isFetching}
      />
      <div className="img-card-list">
        {!isFetching && data?.map((card) => <ImgCard info={card} key={card.id} />)}
      </div>
      {data?.length === 0 && !isFetching && !isError ? (
        <h1>No images found with this query. Try another keyword!</h1>
      ) : null}
      {isError && <h2 className="fetch-error">{error.toString()}</h2>}
    </>
  );
};
