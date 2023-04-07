import { SearchBar } from '../components/SearchBar/SearchBar';
import { useState } from 'react';
import { ImgCardList } from '../components/ImgCardList/ImgCardList';

const MainPage = () => {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('value') || 'random');
  return (
    <>
      <SearchBar setQuery={(value: string) => setSearchValue(value)} />
      <h3 className="help-message">
        Enter a keyword! For example - <q>forest</q>, <q>sea</q>, <q>cats</q> etc.
      </h3>
      <ImgCardList searchValue={searchValue} />
    </>
  );
};
export { MainPage };
