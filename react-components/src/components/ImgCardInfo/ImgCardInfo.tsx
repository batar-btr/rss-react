import { useSearch } from '../../hooks/useSearch';
import './index.css';

interface ImgCardInfoProps {
  imgId: string;
}

export const ImgCardInfo = ({ imgId }: ImgCardInfoProps) => {
  const { loading, error, result } = useSearch('id', imgId);
  if (!result[0]) {
    return (
      <>
        {loading && <h1>LOADING...</h1>}
        {error && <h2 className="fetch-error">{error.message}</h2>}
      </>
    );
  } else {
    console.log(result[0]);
    const {
      user,
      views,
      height,
      width,
      created_at,
      alt_description,
      urls: { regular },
    } = result[0];
    return (
      <>
        {loading && <h1>LOADING...</h1>}
        {result[0] && (
          <div
            className="img-info"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <h3 className="img-info__title">{alt_description || 'No Description...'}</h3>
            <img className="img-info__img" src={regular} alt={alt_description} />
            <div className="img-info__description">
              <p>
                <span>Created at:</span>
                {` ${new Date(created_at).toLocaleString()}`}
              </p>
              <p>
                <span>Resolution:</span>
                {` ${width} x ${height}`}
              </p>
              <p>
                <span>Views:</span>
                {` ${views}`}
              </p>
              <p>
                <span>Photo by</span>
                {` ${user.name || 'No user name'}`}
              </p>
            </div>
          </div>
        )}
        {error && <h2 className="fetch-error">{error.message}</h2>}
      </>
    );
  }
};
