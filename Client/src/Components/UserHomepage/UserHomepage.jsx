import React from "react";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import "./UserHomepage.css";

function UserHomepage() {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "./img/richard.jpg",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "./img/dinesh.jpg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col justify-center h-screen w-7/10">
        <div className="cardContainer">
          <link
            href="https://fonts.googleapis.com/css?family=Damion&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
            rel="stylesheet"
          />
          <div className="cardContainer">
            {characters.map((character) => (
              <TinderCard
                className="swipe"
                key={character.name}
                onSwipe={(dir) => swiped(dir, character.name)}
                onCardLeftScreen={() => outOfFrame(character.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                  className="card"
                >
                  <h3>{character.name}</h3>
                </div>
              </TinderCard>
            ))}
          </div>
          <div className="absolute p-2.5 bottom-0">
          {lastDirection ? (
            <h2 className="infoText">You swiped {lastDirection}</h2>
          ) : (
            <h2 className="infoText" />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserHomepage;
