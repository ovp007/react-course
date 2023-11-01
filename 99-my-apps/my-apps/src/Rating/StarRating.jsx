import React, { useState } from "react";
import Star from "./Star";
import PropTypes from "prop-types";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

StarRating.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};

function StarRating({
  maxRating = 10,
  defaultRating = 5,
  size = 24,
  onSetRating = () => null,
  color,
  className = "",
  messages = [],
}) {
  const [rating, setRating] = useState(defaultRating);
  const [tempRating, setTempRating] = useState();

  const onRate = (i) => {
    setRating(i);
  };

  const onHoverIn = (i) => {
    setTempRating(i);
  };

  const onHoverOut = () => {
    setTempRating(0);
  };

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <>
      <div style={containerStyle} className={className}>
        <div style={starContainerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <Star
              onRate={() => onRate(i + 1)}
              onHoverIn={() => onHoverIn(i + 1)}
              onHoverOut={onHoverOut}
              full={tempRating ? i < tempRating : i < rating}
              size={size}
              color={color}
            />
          ))}
        </div>
        <p style={textStyle}>
          {messages.length === maxRating
            ? messages[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      </div>
    </>
  );
}

export default StarRating;
