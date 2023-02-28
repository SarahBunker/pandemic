import React from "react";

const CityCard = ({ name, alliance, area }) => {
  return (
    <div>
      <p>
        <span>{alliance}</span> | {name} | <span>{area}</span>
      </p>
    </div>
  );
};

export default CityCard;
