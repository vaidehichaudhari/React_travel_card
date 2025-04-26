import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CardBootstrap = ({ city }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // limit before showing "Read More"

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={city.image} className="card-img-top" alt={city.name} />
      <div className="card-body">
        <h5 className="card-title">{city.name}</h5>
        <p className="card-text">
          {isExpanded || city.info.length <= maxLength 
            ? city.info 
            : `${city.info.substring(0, maxLength)}...`
          }
          {city.info.length > maxLength && (
            <span 
              onClick={toggleReadMore} 
              style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
            >
              {isExpanded ? "Show Less" : "Read More"}
            </span>
          )}
        </p>
        <p className="card-text text-primary">Price : {city.price}</p>

        <Link to={`/city-details/${city.id}`} className="btn btn-primary">Know More</Link>
      </div>
    </div>
  );
};

export default CardBootstrap;
