import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import { FaHeart } from "react-icons/fa";
import img from "./image/ano.jpg"; // with import
import "./App.css";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [x, setX] = useState(52); // Změna výchozí hodnoty x na 50
  const [y, setY] = useState(55); // Změna výchozí hodnoty y na 50

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart = {
        id: Math.random(),
        style: {
          left: `${Math.random() * 75 + 12.5}vw`, // Náhodná pozice zleva uvnitř oblasti 12.5vw až 87.5vw
          animationDuration: `${Math.random() * 3 + 2}s`, // Náhodná doba trvání animace
          color: "red",
          position: "fixed",
          top: `${Math.random() * 75 + 12.5}vh`, // Náhodná pozice shora uvnitř oblasti 12.5vh až 87.5vh
          zIndex: 1000,
        },
      };
      setHearts((currentHearts) => [...currentHearts, newHeart]);
    };

    const intervalId = setInterval(createHeart, 500);

    return () => clearInterval(intervalId);
  }, []);

  const popUp = () => {
    alert(
      "AH look at you, you caught the button. \nLucky button catchers win one free date on February 14th with an eligible bachelor who will be in touch with you to follow up!"
    );
  };

  const clickedYes = () => {
    setModalVisible(true);
  };

  const mouseOver = () => {
    setX(Math.random() * 75 + 12.5); // Náhodná pozice zleva uvnitř oblasti 12.5vw až 87.5vw
    setY(Math.random() * 75 + 12.5); // Náhodná pozice shora uvnitř oblasti 12.5vh až 87.5vh
  };

  const noStyle = {
    left: `${x}%`,
    top: `${y}%`,
    position: "absolute",
  };

  const yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  };

  return (
    <div className="app-container">
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={img} alt="Juchuuu!" />
            <p>Juchuuu!</p>
            <button onClick={() => setModalVisible(false)}>Těším se na nejlepší rande!</button>
          </div>
        </div>
      )}

<div className="valentine-text">
  <span className="valentine">Will you be my Valentine?</span>
</div>

      {hearts.map((heart) => (
        <FaHeart className="fa-heart" key={heart.id} style={heart.style} />
      ))}

      <Spline style={{zIndex: "99"}} scene="https://prod.spline.design/36iJXv04ns8fFFe1/scene.splinecode" />

      <div className="button-container">
        <button style={yesStyle} onClick={clickedYes}>
          YES!
        </button>
        <button onMouseOver={mouseOver} style={noStyle} onClick={popUp}>
          No..
        </button>
      </div>
    </div>
  );
}
