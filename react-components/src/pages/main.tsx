import CardList from '../components/CardList';
import { useEffect, useState } from 'react';
import products from '../data';

const MainPage = () => {
  const [value, setValue] = useState(localStorage.getItem('value') || '');

  useEffect(
    () => () => {
      localStorage.setItem('value', value);
    },
    [value]
  );

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <>
      <h1>Main Page</h1>
      <form>
        <input type="text" value={value} onChange={onChangeHandler} />
      </form>
      <CardList cards={products} />
    </>
  );
};
export { MainPage };
