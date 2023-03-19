import React from 'react';

export interface ICard {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default class Card extends React.Component<ICard> {
  render() {
    const { title, description, price, images } = this.props;

    return (
      <li className="card" data-testid="card">
        <img src={images[0]} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{`${price} $`}</h4>
      </li>
    );
  }
}
