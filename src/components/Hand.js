import React from "react";
import { useState } from "react";
import CityCard from "./CityCard";
import EventCard from "./EventCard";
import EscalationCard from "./EscalationCard";

const Hand = ({
  name,
  cards,
  setPlayerHand,
  addCardToPlayerHand,
  playCardToDiscard,
  cardNames,
}) => {
  const [selectOption, setSelectOption] = useState("");

  console.log("typeOf", typeof cardNames);

  function handleSelectOptionChange(e) {
    setSelectOption(e.target.value);
    console.log("Selected :", e.target.value);
  }

  function handleAddCard(e) {
    e.preventDefault();
    addCardToPlayerHand(selectOption, cards, setPlayerHand);
    setSelectOption("");
  }

  function handlePlayClick(e) {
    e.preventDefault();
    console.log("name", e.target.name);
    playCardToDiscard(e.target.name, cards, setPlayerHand);
  }
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
            <button name={card.name} onClick={handlePlayClick}>
              Play or Discard
            </button>
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
            <button name={card.name} onClick={handlePlayClick}>
              Play or Discard
            </button>
          </li>
        );
      case "escalationCard":
        return (
          <li key={card.name}>
            <EscalationCard />
            <button name={card.name} onClick={handlePlayClick}>
              Play or Discard
            </button>
          </li>
        );
      default:
        return <li>Unknown Card</li>;
    }
  });

  const selectOptions = cardNames.map((cardName) => {
    return <option value={cardName}>{cardName}</option>;
  });
  return (
    <div>
      <h3>{name}'s Hand</h3>
      <form>
        <select name="nameInput" onChange={handleSelectOptionChange}>
          {selectOptions}
        </select>
        <button onClick={handleAddCard}>Add Card to Hand</button>
      </form>

      <ul>{cardsDisplay}</ul>
    </div>
  );
};

export default Hand;
