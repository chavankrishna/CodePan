import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext'; // ✅ Import search context

const jsTopics = [
  {
    topic: "Introduction to JavaScript",
    subtopics: ["History", "Features", "Hello World", "Use Cases"],
  },
  {
    topic: "Variables & Data Types",
    subtopics: ["var vs let vs const", "Primitive Types", "Reference Types", "Type Conversion"],
  },
  {
    topic: "Operators",
    subtopics: ["Arithmetic", "Assignment", "Comparison", "Logical"],
  },
  {
    topic: "Control Flow",
    subtopics: ["if", "if-else", "switch", "ternary"],
  },
  {
    topic: "Loops",
    subtopics: ["for", "while", "do-while", "for-in & for-of"],
  },
  {
    topic: "Functions",
    subtopics: ["Function Declaration", "Arrow Functions", "IIFE", "Callback Functions"],
  },
  {
    topic: "Arrays",
    subtopics: ["Array Methods", "Map & Filter", "Reduce", "forEach"],
  },
  {
    topic: "Objects",
    subtopics: ["Object Literals", "this keyword", "Object Methods", "Destructuring"],
  },
  {
    topic: "DOM Manipulation",
    subtopics: ["Selecting Elements", "Events", "Creating & Removing Elements"],
  },
  {
    topic: "ES6+ Features",
    subtopics: ["Template Literals", "Spread & Rest", "Destructuring", "Modules"],
  },
  {
    topic: "Asynchronous JS",
    subtopics: ["Callbacks", "Promises", "async/await", "Fetch API"],
  },
  {
    topic: "Error Handling",
    subtopics: ["try-catch", "throw", "Custom Errors"],
  },
  {
    topic: "Storage & Cookies",
    subtopics: ["localStorage", "sessionStorage", "Cookies"],
  },
];

const JavaScriptPage = () => {
  const { searchTerm } = useSearch(); // ✅ Use global search term

  // 🔍 Filter logic
  const filteredTopics = jsTopics
    .map((item) => {
      const matchingSubtopics = item.subtopics.filter((sub) =>
        sub.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const isTopicMatch = item.topic.toLowerCase().includes(searchTerm.toLowerCase());

      if (isTopicMatch || matchingSubtopics.length > 0) {
        return {
          topic: item.topic,
          subtopics: isTopicMatch ? item.subtopics : matchingSubtopics,
        };
      }
      return null;
    })
    .filter(Boolean); // remove null entries

  return (
    <div className="container mx-auto py-32 px-5">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="col-span-12 md:col-span-3 hidden md:block" />

        {/* Main Content */}
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-3xl font-bold mb-6">JavaScript Topics</h1>

          {filteredTopics.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">No results found.</p>
          ) : (
            <ul className="space-y-5">
              {filteredTopics.map((item, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-700 rounded-lg transition-all"
                >
                  <div className="p-4 font-semibold text-lg border-b dark:border-gray-600">
                    {item.topic}
                  </div>
                  <ul className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    {item.subtopics.map((sub, subIndex) => {
                      const path = `/topics/javascript/${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                      return (
                        <li key={subIndex} className="flex items-start">
                          <IoIosArrowDropright className="text-blue-500 mt-1 mr-2" />
                          <Link to={path} className="hover:underline hover:text-blue-600 transition">
                            {sub}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="col-span-12 md:col-span-3 hidden md:block" />
      </div>
    </div>
  );
};

export default JavaScriptPage;
