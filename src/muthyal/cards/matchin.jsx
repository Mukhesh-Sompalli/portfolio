import React, { useState, useEffect } from "react";
import "./matching.css";

const symbols = ["A", "B", "C", "D", "E", "F", "G", "H"];
const generateShuffledCards = () => {
  return [...symbols, ...symbols, ...symbols, ...symbols]
    .sort(() => Math.random() - 0.5)
    .map((symbol, index) => ({ id: index, symbol, flipped: false, matched: false }));
};

const FlipCardMatchGame = () => {
  const [cards, setCards] = useState(generateShuffledCards());
  const [selectedCards, setSelectedCards] = useState([]);
  const [player, setPlayer] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards;
      if (cards[first].symbol === cards[second].symbol) {
        const updatedCards = cards.map((card, index) =>
          index === first || index === second ? { ...card, matched: true } : card
        );
        setCards(updatedCards);
        setScores(prevScores => ({ ...prevScores, [player]: prevScores[player] + 1 }));
      } else {
        setTimeout(() => {
          setCards(prevCards => prevCards.map((card, index) =>
            index === first || index === second ? { ...card, flipped: false } : card
          ));
        }, 1000);
      }
      setSelectedCards([]);
      setPlayer(player === 1 ? 2 : 1);
    }
  }, [selectedCards, cards, player]);

  useEffect(() => {
    if (cards.every(card => card.matched)) {
      setGameOver(true);
    }
  }, [cards]);

  const flipCard = (index) => {
    if (cards[index].flipped || selectedCards.length === 2) return;
    setCards(prevCards => prevCards.map((card, i) => (i === index ? { ...card, flipped: true } : card)));
    setSelectedCards([...selectedCards, index]);
  };

  const restartGame = () => {
    setCards(generateShuffledCards());
    setScores({ 1: 0, 2: 0 });
    setPlayer(1);
    setGameOver(false);
  };

  return (
    <div className="game-container">
      <h1>Flip Card Match Game</h1>
      <div className="scoreboard">
        <p className={player === 1 ? "active-player" : ""}>Player 1: {scores[1]}</p>
        <p className={player === 2 ? "active-player" : ""}>Player 2: {scores[2]}</p>
        <p>Turn: Player {player}</p>
      </div>
      <div className="grid">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? "flipped" : ""} ${card.matched ? "matched" : ""}`}
            onClick={() => flipCard(index)}
          >
            {card.flipped || card.matched ? card.symbol : "?"}
          </div>
        ))}
      </div>
      {gameOver && (
        <div className="winner">
          <h2>Game Over!</h2>
          <p>{scores[1] > scores[2] ? "Player 1 Wins!" : scores[1] < scores[2] ? "Player 2 Wins!" : "It's a Tie!"}</p>
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default FlipCardMatchGame;
