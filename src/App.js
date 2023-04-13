import "./App.css";
import { useState } from "react";
import Hand from "./components/Hand";
import PlayerDeck from "./components/PlayerDeck";
import PlayerDiscardPile from "./components/PlayerDiscardPile";
import ThreatDiscard from "./components/ThreatDiscard";
// import NewNote from "./components/NewNote";
// import Notes from "./components/Notes";
const playercards = require("./data/cards.json");
const cardNameList = playercards.cards.map((card) => card.name);

function App() {
  const [playerdeck, setPlayerDeck] = useState(playercards.cards);
  const [sarahHand, setSarahHand] = useState([]);
  const [anneHand, setAnneHand] = useState([]);
  const [peterHand, setPeterHand] = useState([]);
  const [tamiHand, setTamiHand] = useState([]);
  const [playerDiscardPile, setPlayerDiscardPile] = useState([]);

  function addCardToPlayerHand(cardName, hand, setPlayerHand) {
    let card = playerdeck.filter(
      (card) => card.name.toLowerCase() === cardName.toLowerCase()
    )[0];
    // let card = playerdeck.filter((card) => card.name.toLowerCase() = cardName.toLowerCase())[0];
    if (card === undefined) {
      alert(
        "Card can't be added. Check if card is mispelled or is no longer in the deck."
      );
      return;
    }
    setPlayerHand([...hand, card]);
    let newDeck = playerdeck.filter(
      (card) => card.name.toLowerCase() !== cardName.toLowerCase()
    );
    setPlayerDeck(newDeck);
  }

  function playCardToDiscard(cardName, hand, setPlayerHand) {
    let card = hand.filter(
      (card) => card.name.toLowerCase() === cardName.toLowerCase()
    )[0];
    console.log({ card });
    // if (card === undefined) return;
    let newHand = hand.filter(
      (card) => card.name.toLowerCase() !== cardName.toLowerCase()
    );
    setPlayerHand(newHand);
    setPlayerDiscardPile([...playerDiscardPile, card]);
  }

  return (
    <div>
      <PlayerDeck deck={playerdeck} />
      <PlayerDiscardPile cards={playerDiscardPile} />
      <Hand
        name="Sarah"
        cards={sarahHand}
        setPlayerHand={setSarahHand}
        addCardToPlayerHand={addCardToPlayerHand}
        playCardToDiscard={playCardToDiscard}
        cardNames={cardNameList}
      />
      <Hand
        name="Anne"
        cards={anneHand}
        setPlayerHand={setAnneHand}
        addCardToPlayerHand={addCardToPlayerHand}
        playCardToDiscard={playCardToDiscard}
        cardNames={cardNameList}
      />
      <Hand
        name="Peter"
        cards={peterHand}
        setPlayerHand={setPeterHand}
        addCardToPlayerHand={addCardToPlayerHand}
        playCardToDiscard={playCardToDiscard}
        cardNames={cardNameList}
      />
      <Hand
        name="Tami"
        cards={tamiHand}
        setPlayerHand={setTamiHand}
        addCardToPlayerHand={addCardToPlayerHand}
        playCardToDiscard={playCardToDiscard}
        cardNames={cardNameList}
      />
      <hr></hr>
      <ThreatDiscard cards = {[]} />
    </div>
  );
}

export default App;
