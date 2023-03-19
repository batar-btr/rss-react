import CardList from '../components/CardList';
import { Component } from 'react';
import products from '../data';

interface MainState {
  value: string;
}

type MainProps = Record<string, never>;

export default class MainPage extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      value: localStorage.getItem('value') || '',
    };
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    this.setState({ value: value });
  };

  render() {
    return (
      <>
        <h1>Main Page</h1>
        <form>
          <input type="text" value={this.state.value} onChange={this.onChangeHandler} />
        </form>
        <CardList cards={products} />
      </>
    );
  }
}
