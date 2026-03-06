import React from 'react';
import ProductCard from './ProductCard';

const SAMPLE_MENU = [
  { id: 1, name: 'Margherita Pizza', desc: 'Classic cheese & tomato', price: 299 },
  { id: 2, name: 'Veg Burger', desc: 'Loaded veg patty', price: 149 },
  { id: 3, name: 'Caesar Salad', desc: 'Crisp greens with dressing', price: 199 },
  { id: 4, name: 'Pasta Alfredo', desc: 'Creamy white sauce pasta', price: 259 },
];

export default function Menu({ addToCart }) {
  return (
    <section className="menu">
      <h2>Menu</h2>
      {SAMPLE_MENU.map(item => (
        <ProductCard key={item.id} item={item} onAdd={() => addToCart(item)} />
      ))}
    </section>
  );
}
