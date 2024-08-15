import "react";
import TinderCard from "react-tinder-card";
import { useState } from "react";
import "./UserHomepage.css";

function UserHomepage() {
  const [characters, setCharacters] = useState([
    {
      name: "Richard Hendricks",
      url: "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F774909%2Fpexels-photo-774909.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D2",
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Erlich Bachman",
      url: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      skill: "dance",
      description: "i've been dacing my whole life",
    },
    {
      name: "Monica Hall",
      url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      skill: "football player",
      description: "profesional football player",
    },
    {
      name: "Jared Dunn",
      url: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg",
      skill: "sing",
      description: "i play in a jazz band",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://images.pexels.com/photos/3094215/pexels-photo-3094215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      skill: "programer",
      description: "i'm a developer of apps",
    },
  ]);

  const [lastDirection, setLastDirection] = useState(null);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
    setCharacters(
      characters.filter((character) => character.name !== nameToDelete)
    );
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="flex justify-center m-auto ">
      <div className="flex flex-col justify-center min-h-screen w-7/10">
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
                preventSwipe={["up", "down"]}
              >
                <div
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                  className="card"
                >
                  <div className="absolute top-3/4 p-8 w-full">
                    <h3>{character.name}</h3>
                    <p>{character.skill}</p>
                  </div>
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
