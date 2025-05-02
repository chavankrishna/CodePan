import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const jsTopics = [
  {
    topic: "Introduction to JavaScript",
    subtopics: ["Introduction", "History", "Features", "Hello World", "Use Cases"],
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
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-24">
      <div className="grid grid-cols-12 gap-6">

        {/* Left Sidebar - Reserved */}
        <div className="hidden sm:block sm:col-span-2 md:col-span-3" />

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-8 md:col-span-6">

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 dark:text-gray-300 mb-6" aria-label="Breadcrumb">
            <ul className="flex flex-wrap items-center space-x-1">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">Home</Link>
                <span className="mx-1">»</span>
              </li>
              <li className="text-gray-800 dark:text-gray-200">JavaScript Tutorials</li>
            </ul>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-bold mb-8">JavaScript Topics</h1>

          <ul className="space-y-6">
            {jsTopics.map((item, index) => (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <div className="p-4 font-semibold text-lg border-b border-gray-200 dark:border-gray-600">
                  {item.topic}
                </div>
                <ul className="p-4 space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                  {item.subtopics.map((sub, subIndex) => {
                    const path = `/topics/javascript/${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                    return (
                      <li key={subIndex} className="flex items-center">
                        <IoIosArrowDropright className="text-blue-500 mr-2 shrink-0" />
                        <Link
                          to={path}
                          className="hover:underline hover:text-blue-600 transition-colors duration-200"
                        >
                          {sub}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>

        </div>

        {/* Right Sidebar - Reserved */}
        <div className="hidden sm:block sm:col-span-2 md:col-span-3" />
      </div>
    </div>
  );
};

export default JavaScriptPage;
