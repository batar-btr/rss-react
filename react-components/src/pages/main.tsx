import { SearchBar } from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import { useSearch } from '../hooks/useSearch';
import { ImgCardList } from '../components/ImgCardList/ImgCardList';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('value') || 'random');
  // const [items, setItems] = useState([]);
  const { loading, error, result } = useSearch(searchValue);
  return (
    <>
      <SearchBar setQuery={(value: string) => setSearchValue(value)} />
      <h3 className="help-message">
        Enter a keyword! For example - <q>forest</q>, <q>sea</q>, <q>cats</q> etc.
      </h3>
      {loading && <h1>LOADING...</h1>}
      {!loading && <ImgCardList cards={result} />}
      {result.length === 0 && !loading && !error ? (
        <h1>No images found with this query. Try another keyword!</h1>
      ) : null}
      {error && error.message}
    </>
  );
};
export { MainPage };
