// import { RotatingLines } from 'react-loader-spinner';
import { useGetImageByIdQuery } from '../../store/api';
import './index.css';

interface ImgCardInfoProps {
  imgId: string;
  closeModal: () => void;
}

export const ImgCardInfo = ({ imgId, closeModal }: ImgCardInfoProps) => {
  const { data, isFetching, isError, isSuccess, error } = useGetImageByIdQuery(imgId);

  if (isSuccess) {
    const {
      user,
      views,
      height,
      width,
      created_at,
      alt_description,
      urls: { regular },
    } = data;
    return (
      <div className="img-info">
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
        <button className="modal-close-button" onClick={closeModal}></button>
      </div>
    );
  } else {
    return (
      <>
        {/* <RotatingLines
          strokeColor="#fec524"
          strokeWidth="3"
          animationDuration="0.75"
          width="100px"
          visible={isFetching}
        /> */}
        {isError && <h2 className="fetch-error">{error.toString()}</h2>}
      </>
    );
  }
};
