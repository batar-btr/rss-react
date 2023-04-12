import { FormEvent, useRef, useState } from 'react';
import './index.css';
import { useAppDispatch } from '../../store/hooks';
import { setSearchValue } from '../../store/searchValueSlice';
import { useAppSelector } from '../../store/hooks';

const SearchBar = () => {
  const searchValue = useAppSelector((state) => state.searchValue.value);
  const [inputValue, setInputValue] = useState<string>(searchValue);
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;
    const value = input?.value as string;
    dispatch(setSearchValue(value));
  };

  const onChangeHandler = () => {
    inputRef.current && setInputValue(inputRef.current.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => onSubmitHandler(e)}>
      <input ref={inputRef} type="text" value={inputValue} onChange={onChangeHandler} />
    </form>
  );
};

export { SearchBar };
