import React from "react";
import CityCard from "./CityCard";
import EventCard from "./EventCard";
import EscalationCard from "./EscalationCard";

const PlayerDiscardPile = ({ cards }) => {
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
      case "eventCard":
        return (
          <li key={card.name}>
            <EventCard
              name={card.name}
              actions={card.actions}
              timeframe={card.timeframe}
            />
          </li>
        );
      case "escalationCard":
        return (
          <li key={card.name}>
            <EscalationCard />
          </li>
        );
      default:
        return <li>Unknown Card</li>;
    }
  });
  return (
    <div>
      <h3>Player Discard Pile</h3>
      <ul>{cardsDisplay}</ul>
    </div>
  );
};

export default PlayerDiscardPile;
