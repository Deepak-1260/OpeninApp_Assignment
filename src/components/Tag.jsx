import React from 'react';
import './Tag.css'; // Import the CSS for styling

const Tag = ({ tag, onRemove }) => {
  return (
    <div className="tag">
      {tag}
      <button className="remove-btn" onClick={() => onRemove(tag)}>X</button>
    </div>
  );
};

export default Tag;