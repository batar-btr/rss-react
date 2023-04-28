import './index.css';
import { ImgCard } from '../ImgCard/ImgCard';
import { useGetImagesQuery } from '../../store/api';
import { useAppSelector } from '../../store/hooks';

export const ImgCardList = () => {
  const searchValue = useAppSelector((store) => store.searchValue.value);
  const { data, isFetching, isError, error } = useGetImagesQuery(searchValue);
  return (
    <>
      {isFetching && <h2>Loading...</h2>}
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
