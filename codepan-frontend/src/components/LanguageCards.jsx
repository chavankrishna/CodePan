import React from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Import useNavigate
import "../styles/global.css";

const topics = [
  { name: "Java" },
  { name: "C++" },
  { name: "C Programming" },
  { name: "SQL" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "React" },
];

const LanguageCards = () => {
  const navigate = useNavigate();

  // Function to convert topic name to URL-friendly path
  const formatPath = (name) =>
    "/topics/" +
    name.toLowerCase().replace(/\+\+/g, "cpp").replace(/\s+/g, "-");

  return (
    <section className="">   
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Learn Programming with <span className="text-cyan-500">CodePan</span>
      </h2>
      <p className="text-gray-600 text-center mb-8">"One Line at a Time"</p>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => navigate(formatPath(topic.name))}
            className="p-6 text-gray-900 rounded-xl shadow-md bg-white bg-opacity-50 backdrop-blur-md border border-gray-300 hover:scale-105 transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold">{topic.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LanguageCards;
