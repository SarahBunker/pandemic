import React from "react";

const EventCard = ({ name, actions, timeframe }) => {
  return (
    <div>
      <p>
        {name} : {actions} {timeframe}
      </p>
    </div>
  );
};

export default EventCard;
