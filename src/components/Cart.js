import React from 'react';

export default function Cart({ items, removeFromCart, updateQty }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <aside className="cart">
      <h2>Your Cart</h2>
      {items.length === 0 && <p>Your cart is empty.</p>}
      {items.map(it => (
        <div className="cart-item" key={it.id}>
          <div style={{flex:1}}>
            <div style={{fontWeight:700}}>{it.name}</div>
            <div>₹{it.price} x {it.qty} = ₹{it.price * it.qty}</div>
          </div>
          <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}>
            <input className="qty" type="number" min="1" value={it.qty} onChange={e => updateQty(it.id, parseInt(e.target.value || '1'))} />
            <button className="btn secondary" onClick={() => removeFromCart(it.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">Subtotal: ₹{subtotal}</div>
      <div style={{marginTop:12}}>
        <button className="btn" disabled={items.length===0}>Checkout</button>
      </div>
    </aside>
  );
}
