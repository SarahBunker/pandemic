import React from "react";

const ThreatDeck = ({ deck }) => {

  /*
  List of known cards on top of threat deck
  List of cards in discard pile
  space to add card to discard pile
    filters the cards in the threat deck for the one that matches the name entered
    Then adds that card to the discard pile
    Filter threat deck for all the cards that don't match
    set threat deck to new value
  button to Intensify
    moves all cards in discard pile to the list of known cards on top of threat deck
  */

  return (
    <div>
      <h3>ThreatDeck Deck</h3>
      <p>Number of Cards left in deck: {deck.length}</p>
      <p>Next escalation in {calculateNextEscCard()} cards</p>
    </div>
  );
};

export default ThreatDeck;