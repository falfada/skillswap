import React from "react";
import { useState } from "react";

function Match() {
  const [characters, setCharacters] = useState([
    {
      name: "Richard Hendricks",
      url: "./img/richard.jpg",
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Erlich Bachman",
      url: "./img/erlich.jpg",
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Monica Hall",
      url: "./img/monica.jpg",
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Jared Dunn",
      url: "./img/jared.jpg",
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Dinesh Chugtai",
      url: "./img/dinesh.jpg",
      skill: "carpintero",
      description: "soy carpintero",
    },
  ]);
  return (
    <div className="flex mt-4 ml-4 gap-1container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bor">
        {characters.map((character) => (
          <div className="rounded-xl shadow-lg justify-center items-center p-4">
            <div className="p-5 flex flex-col border-solid border-2 border-slate-900 rounded-lg">
              <div className="rounded-full overflow-hidden justify-center items-center">
                <img
                  style={{ backgroundImage: "url(" + character.url + ")" }}
                  alt="User Profile"
                />
              </div>
              <h5 className="text-2xl md:text-3xl font-medium mt-3">
                {character.name}
              </h5>
              <p className="text text-slate-950 text-lg mt-3">
                {character.description} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Dignissimos tempore voluptate voluptatibus at
                eaque debitis mollitia architecto? Vel alias itaque culpa! Sequi
                consequuntur accusamus totam a deserunt asperiores. Nam,
                excepturi.
              </p>
              <a
                href="#"
                className="text-center bg-green-700 text-orange-500 py-2 rounded-lg font-semibold mt-4 hover:bg-green-500 focus:scale-95 transition-all duration-200 ease-out"
              >
                Chat
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Match;
