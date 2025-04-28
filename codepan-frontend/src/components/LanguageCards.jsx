import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiCloudflare,
  SiCplusplus,
  SiC,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import "../styles/global.css";

const topics = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
  { name: "React", icon: <SiReact className="text-cyan-400 text-4xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-500 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
  { name: "Cloud Computing", icon: <SiCloudflare className="text-orange-400 text-4xl" /> },
  { name: "Java", icon: <FaJava className="text-red-600 text-4xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500 text-4xl" /> },
  { name: "C", icon: <SiC className="text-blue-400 text-4xl" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-600 text-4xl" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500 text-4xl" /> },
];

const LanguageCards = ({ searchTerm = "" }) => {       
  const navigate = useNavigate();   

  const formatPath = (name) =>
    "/topics/" +
    name
      .toLowerCase()
      .replace(/\+\+/g, "cpp")
      .replace(/\./g, "")
      .replace(/\s+/g, "-");

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-5 sm:px-4 md:px-3 py-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
        Learn Programming with <span className="text-cyan-500">CodePan</span>
      </h2>
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 dark:text-gray-300 text-center mb-8">
        "One Line at a Time"
      </p>

      {/* Cards Grid */}
      {filteredTopics.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          No topics found.
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTopics.map((topic, index) => (
            <div
              key={index}
              onClick={() => navigate(formatPath(topic.name))}
              className="p-6 flex flex-col items-center justify-center text-gray-900 dark:text-white rounded-xl shadow-md bg-white dark:bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-300 dark:border-gray-700 hover:scale-105 transition-all cursor-pointer text-center"
            >
              {topic.icon}
              <h3 className="mt-3 text-lg font-semibold">{topic.name}</h3>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LanguageCards;
