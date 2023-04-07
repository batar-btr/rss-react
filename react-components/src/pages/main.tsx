import { SearchBar } from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { ImgCardList } from '../components/ImgCardList/ImgCardList';
import { RotatingLines } from 'react-loader-spinner';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('value') || 'random');
  const { loading, error, result } = useSearch('search', searchValue);
  return (
    <>
      <SearchBar setQuery={(value: string) => setSearchValue(value)} />
      <h3 className="help-message">
        Enter a keyword! For example - <q>forest</q>, <q>sea</q>, <q>cats</q> etc.
      </h3>
      <RotatingLines
        strokeColor="#fec524"
        strokeWidth="3"
        animationDuration="0.75"
        width="10%"
        visible={loading}
      />
      {!loading && <ImgCardList cards={result} />}
      {result?.length === 0 && !loading && !error ? (
        <h1>No images found with this query. Try another keyword!</h1>
      ) : null}
      {error && <h2 className="fetch-error">{error.message}</h2>}
    </>
  );
};
export { MainPage };
