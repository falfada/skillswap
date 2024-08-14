import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const [steps, setSteps] = useState([]);
  const [featuredSkills, setFeaturedSkills] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Define the data for steps, featured skills, and FAQs directly here.
    setSteps([
      {
        step: "List Your Skills and Learning Goals",
        description:
          "Begin by creating your profile and listing the skills you have to offer as well as the ones you wish to learn.",
      },
      {
        step: "Discover Your Matches",
        description:
          "Our smart matching algorithm will connect you with people who possess the skills you want to learn and who are interested in the skills you offer.",
      },
      {
        step: "Connect and Communicate",
        description:
          "Once you've found someone you’re interested in, you can easily reach out to them via our messaging system.",
      },
      {
        step: "Schedule a Meeting",
        description:
          "To make the exchange more productive, you can set up a meeting through our integrated calendar. Coordinate a convenient time to meet, whether it's virtually or in person, to start your skill-swapping journey.",
      },
    ]);

    setFeaturedSkills([
      "Web Development",
      "Graphic Design",
      "Project Management",
    ]);

    setFaqs([
      { question: "How do I list the skills I have and the ones I want to learn?", answer: "To list your skills and learning goals, first create a profile on our app. Once you're logged in, navigate to the Profile section where you'll find options to add the skills you offer and the skills you wish to learn. Simply enter your skills and interests into the respective fields, and our smart algorithm will start matching you with others who have complementary skills."},
      { question: "How does the matching algorithm work?", answer: "Our matching algorithm uses your listed skills and learning goals to connect you with other users who have the skills you want to learn and who are interested in the skills you offer. The algorithm considers factors like skill level, location, and availability to provide the best possible matches. You’ll see a list of potential matches and can view their profiles to find the right person to connect with." },
      { question: "Can I communicate with my matches through the app?", answer: "Yes, you can! Once you’ve found a match, you can communicate with them using our built-in messaging system. You can send and receive messages directly within the app to discuss your skill exchange. Additionally, you can schedule meetings through our integrated calendar to set up virtual or in-person meetups to facilitate the skill swap." },
    ]);
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-cyan-400 via-white to-white">
      <div className="container mx-auto flex-wrap p-10">
        <div className="text-center my-16 animate-fade-in-down">
          <h1 className="text-4xl font-bold">
            Want to share or <br></br>collaborate on a skill?
          </h1>
          <Link to="/signup">
            <button className="mt-8 px-8 py-3 bg-green-500 text-950 rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl">
              Get started
            </button>
          </Link>
        </div>

        <div className="w-full my-16 animate-fade-in-left">
          <h2 className="text-2xl text-center font-semibold mb-8 text-950">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{step.step}</h3>
                <p className="mt-2 text-950">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center my-16 animate-fade-in-right gap-4">
          <h2 className="w-full text-center text-2xl font-semibold text-950">
            Featured skills
          </h2>
          <div className="w-1/3 flex flex-col gap-4">
            {featuredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-full shadow-md text-center font-semibold transition transform hover:scale-105 hover:shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
          <div className="w-1/3 h-96 overflow-hidden flex justify-center items-center rounded-lg">
            <img src="https://images.pexels.com/photos/3277806/pexels-photo-3277806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </div>
        </div>

        <div className="w-full my-16 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-8 text-950">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="cursor-pointer bg-white p-4 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg">
                
                  <summary className="font-semibold">
                    {faq.question}
                  </summary>
                  <p className="mt-2 text-950">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <footer className="w-full bg-cyan-900 text-lime-400 p-5 rounded-t-lg animate-fade-in-up">
        <div className="flex flex-wrap justify-evenly">
          <div>
            <h3 className="font-bold ">SKILLSWAP</h3><br></br>
            <p>
              Created by{" "} <br></br>
              <a href="https://github.com/ANDRESGOM77" target="_blank" rel="noopener noreferrer">
                Andres,
              </a>{" "}
              <a href="https://github.com/falfada" target="_blank" rel="noopener noreferrer">Daniela,</a>
              {" "}
              <a href="https://github.com/rhiannawilson" target="_blank" rel="noopener noreferrer">Rhianna</a>
              {" "}&{" "} 
              <a href="https://github.com/SoniiPP" target="_blank" rel="noopener noreferrer">Soni</a>
            </p>
            <p> &copy;{currentYear}</p>
          </div>
  
          <div>
            <h3 className="font-bold">Quick Links</h3><br></br>
            <p><a href="http://localhost:5173">Home</a></p>
            <p><a href="https://github.com/falfada/skillswap" target="_blank">GitHub Repository</a></p>
          </div>
          <div>
            <h3 className="font-bold">Social</h3><br></br>
            <p><a href="http://instagram.com" target="_blank">Instagram</a></p>
            <p><a href="http://facebook.com" target="_blank">Facebook</a></p>
          </div>
          <div>
            <h3 className="font-bold">Contact Us</h3><br></br>
            <p>info@skillswap.com</p>
            <p>0412 345 678</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
