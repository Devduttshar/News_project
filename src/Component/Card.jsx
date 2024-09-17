import React from 'react';

const Card = ({ article }) => {
  // Fallback image URL for articles without images
  const defaultImage = 'https://5.imimg.com/data5/ECOM/Default/2023/6/316326932/US/US/XS/113296398/myproject-1-50-500x500.png';

  return (
    <div className="card">
      <img 
        src={article.urlToImage || defaultImage}  /* Check for null or undefined and use a default image */
        alt={article.title || 'No Title Available'} /* Check for a valid title or use a placeholder */
        className="card-image" 
      />
      <div className="card-content">
        <h3 className="card-title">{article.title || 'No Title Available'}</h3> {/* Handle missing title */}
        <p className="card-description">
          {article.description || 'No description available for this news article.'} {/* Handle missing description */}
        </p>
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="read-more"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
