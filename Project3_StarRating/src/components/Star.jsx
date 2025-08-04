import { FaStar } from "react-icons/fa";
import React from "react";

const Star = ({ starsCount = 5 }) => {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  const handleClick = (index) => {};
  const handleMove = (index) => {};
  const handleLeave = (index) => {};
  return (
    <div className='star'>
      {[...Array(starsCount)].map((index) => {
        index++;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMove(index)}
            onMouseLeave={() => handleLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Star;
