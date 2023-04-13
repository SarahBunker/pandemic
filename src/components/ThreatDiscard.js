import React from 'react';
import CityCard from './CityCard';

const ThreatDiscard = ({cards}) => {
  const cardsDisplay = cards.map((card) => {
    switch (card.type) {
      case "playerCard":
        return (
          <li key={card.name}>
            <CityCard
              name={card.name}
              alliance={card.alliance}
              area={card.area}
            />
          </li>
        );
      default:
        return <li>Unknown Card</li>;
    }
  });
  return (
    <div>
      <h3>Threat Discard Pile</h3>
      <ul>{cardsDisplay}</ul>
    </div>
  );
};

export default ThreatDiscard;