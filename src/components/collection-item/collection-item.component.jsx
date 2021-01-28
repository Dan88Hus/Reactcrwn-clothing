import React from 'react';
import './collection-item.styles.css';

const ColletionItem = ({id, name, price, imageUrl}) => (
  <div className="colletion-item">
    <div 
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>

    </div>
    </div>
  </div>
);

export default ColletionItem;