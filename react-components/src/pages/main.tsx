import CardList from '../components/CardList';
import { useEffect, useState, useRef } from 'react';
import products from '../data';

const MainPage = () => {
  const [value, setValue] = useState(localStorage.getItem('value') || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current as HTMLInputElement;
    return () => {
      localStorage.setItem('value', input.value);
    };
  }, []);

  const onChangeHandler = () => {
    inputRef.current && setValue(inputRef.current.value);
  };

  return (
    <>
      <h1>Main Page</h1>
      <form>
        <input ref={inputRef} type="text" value={value} onChange={onChangeHandler} />
      </form>
      <CardList cards={products} />
    </>
  );
};
export { MainPage };
