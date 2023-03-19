import React from 'react';
import Card, { ICard } from './Card';

interface ICardList {
  cards: ICard[];
}

export default class CardList extends React.Component<ICardList> {
  render() {
    const { cards } = this.props;
    return (
      <ul className="card-wrapper">
        {cards.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </ul>
    );
  }
}
