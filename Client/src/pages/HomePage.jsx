import  { useState, useEffect } from 'react';


export default function HomePage() {
  const [steps, setSteps] = useState([]);
  const [featuredSkills, setFeaturedSkills] = useState([]);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    // Define the data for steps, featured skills, and FAQs directly here.
    setSteps([
      { step: 'STEP 1', description: 'Description for step 1' },
      { step: 'STEP 2', description: 'Description for step 2' },
      { step: 'STEP 3', description: 'Description for step 3' },
      { step: 'STEP 4', description: 'Description for step 4' },
    ]);

    setFeaturedSkills([
      'Web Development',
      'Graphic Design',
      'Project Management',
      'Digital Marketing',
      'Data Analysis',
    ]);

    setFaqs([
      { question: 'Question 1', answer: 'Answer to question 1' },
      { question: 'Question 2', answer: 'Answer to question 2' },
      { question: 'Question 3', answer: 'Answer to question 3' },
    ]);
  }, []);

  return (
    <section className="h-full bg-gradient-to-r from-pink-300 via-white to-white">
  
      <div className="container h-full p-10">
        <div className="text-center my-16 animate-fade-in-down">
          <h1 className="text-4xl font-bold text-gray-800">Do you have a skill you’d like to share or collaborate on?</h1>
          <button className="mt-8 px-8 py-3 bg-pink-500 text-white rounded-full shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            Get started
          </button>
        </div>

        <div className="my-16 animate-fade-in-left">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 hover:shadow-lg">
                <h3 className="text-xl font-bold text-pink-600">{step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="my-16 animate-fade-in-right">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700">Featured skills</h2>
          <div className="flex flex-col gap-4">
            {featuredSkills.map((skill, index) => (
              <div key={index} className="bg-white p-4 rounded-full shadow-md text-center text-pink-500 font-semibold transition transform hover:scale-105 hover:shadow-lg">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="my-16 animate-fade-in-up">
          <h2 className="text-2xl font-semibold mb-8 text-gray-700">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <details className="transition transform hover:scale-105 hover:shadow-lg">
                  <summary className="font-semibold text-pink-600">{faq.question}</summary>
                  <p className="text-gray-600">{faq.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </div>
        
        <footer className="bg-pink-600 text-white p-10 rounded-t-lg animate-fade-in-up">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold">SKILLSWAP</h3>
              <p>Created by</p>
              <p>Copyright</p>
            </div>
            <div>
              <h3 className="font-bold">Quick Links</h3>
              <p>Home</p>
            </div>
            <div>
              <h3 className="font-bold">Social</h3>
              <p>Instagram</p>
              <p>Facebook</p>
            </div>
            <div>
              <h3 className="font-bold">Contact Us</h3>
              <p>info@skillswap.com</p>
              <p>xx xxx xxxx</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
