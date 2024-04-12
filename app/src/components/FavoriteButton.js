import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as FasHeart } from '@fortawesome/free-solid-svg-icons';
import "./pages/page.css"

const FavoriteButton = ({ isFavorite, onToggle }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleToggle = () => {
    setFavorite(prevState => !prevState);
    onToggle();
  };

  return (
    <button
      className={favorite ? "btn-test-favorite2 favorited" : "btn-test-favorite2"}
      onClick={handleToggle}
    >
      <FontAwesomeIcon icon={favorite ? FasHeart : FasHeart} />
    </button>
  );
};

export default FavoriteButton;