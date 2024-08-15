import "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_MATCHES } from "../../utils/queries";

function Match() {
  const [characters, setCharacters] = useState([
    {
      name: "Richard Hendricks",
      url: "/img/richard.jpg", // Use correct path
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Erlich Bachman",
      url: "/img/erlich.jpg", // Use correct path
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Monica Hall",
      url: "/img/monica.jpg", // Use correct path
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Jared Dunn",
      url: "/img/jared.jpg", // Use correct path
      skill: "carpintero",
      description: "soy carpintero",
    },
    {
      name: "Dinesh Chugtai",
      url: "/img/dinesh.jpg", // Use correct path
      skill: "carpintero",
      description: "soy carpintero",
    },
  ]);

  const { loading, error, data } = useQuery(GET_MATCHES);
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  return (
//     <div className="flex mt-4 ml-4 gap-1 container mx-auto">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bor">
//         {data.getMatches.map(({user, matchedSkills}) => (
//             <div key={user.id}
//               className="rounded-xl shadow-lg justify-center items-center p-4"
//             >
//               <div className="p-5 flex flex-col border-solid border-2 border-slate-9 rounded-lg">
//                 <h5 className="text-2xl md:text-3xl font-medium mt-3">
//                   {user.name}
//                 </h5>
//                 <p>Skills they want to learn:</p>
//                 <ul>
//                   {matchedSkills.map((skill, index) => (
//                     <li key={index}>{skill.skill}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

// ))}
//       </div>
//       </div>
    <div className="flex mt-4 ml-4 gap-1 container mx-auto">
      {" "}
      {/* Added space before 'container' */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bor">
        <p>hello hello</p>
        {characters.map(
          (
            character,
            index // Added index for unique key
          ) => (
            <div
              key={index}
              className="rounded-xl shadow-lg justify-center items-center p-4"
            >
              <div className="p-5 flex flex-col border-solid border-2 border-slate-9 rounded-lg">
                <div className="rounded-full overflow-hidden justify-center items-center">
                  <img
                    src={character.url} // Use src instead of backgroundImage
                    alt="User Profile"
                    className="rounded-full bg" // Optional styling
                  />
                </div>
                <h5 className="text-2xl md:text-3xl font-medium mt-3">
                  {character.name}
                </h5>
                <p className="text text-950 text-lg mt-3">
                  {character.description}
                </p>
                <a
                  href="#"
                  className="text-center bg-green-700 text-950 py-2 rounded-lg font-semibold mt-4 hover:bg-green-500 focus:scale-95 transition-all duration-200 ease-out"
                >
                  Chat
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Match;
