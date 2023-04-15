import { SearchBar } from '../components/SearchBar/SearchBar';
import { ImgCardList } from '../components/ImgCardList/ImgCardList';

const MainPage = () => {
  return (
    <>
      <SearchBar />
      <h3 className="help-message">
        Enter a keyword! For example - <q>forest</q>, <q>sea</q>, <q>cats</q> etc.
      </h3>
      <ImgCardList />
    </>
  );
};
export { MainPage };
