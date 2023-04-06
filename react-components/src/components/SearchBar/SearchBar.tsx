import { FormEvent, useRef, useState } from 'react';
import './index.css';

interface SearchBarProps {
  setQuery: (value: string) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(localStorage.getItem('value') || '');
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;
    const value = input?.value as string;
    localStorage.setItem('value', value);
    props.setQuery(value);
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
