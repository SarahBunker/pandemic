import React from "react";

const PlayerDeck = ({ deck }) => {
  function calculateNextEscCard() {
    const cityCards = 48;
    const eventCards = 5; // FIX ME
    const escCards = 5;
    const total = cityCards + eventCards + escCards;
    let piles = [0, 0, 0, 0, 0];
    let j = 0;
    for (let i = 1; i <= total; i++) {
      piles[j]++;
      j++;
      if (j === 5) {
        j = 0;
      }
    }
    let sum = 0;
    let escCardLocations = piles.map((pile) => {
      return (sum += pile);
    });
    let remainingLocations = escCardLocations.filter((pile) => {
      return pile <= deck.length;
    });
    if (remainingLocations.length === 0) return 0;
    let next = Math.max(...remainingLocations);
    return deck.length - next;
  }

  return (
    <div>
      <h3>Player Deck</h3>
      <p>Number of Cards left in deck: {deck.length}</p>
      <p>Next escalation in {calculateNextEscCard()} cards</p>
    </div>
  );
};

export default PlayerDeck;
