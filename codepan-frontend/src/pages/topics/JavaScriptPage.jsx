import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';

const jsTopics = [
  {
    topic: "Introduction to JavaScript",
    subtopics: [
      "Introduction",
      "History",
      "Features",
      "Hello World",
      "Use Cases",
      "JavaScript Engines",
      "How JS Works",
      "Setting up JS Environment"
    ],
  },
  {
    topic: "Variables & Data Types",
    subtopics: [
      "var vs let vs const",
      "Primitive Types",
      "Reference Types",
      "Type Conversion",
      "Type Coercion",
      "typeof Operator",
      "Dynamic Typing"
    ],
  },
  {
    topic: "Operators",
    subtopics: [
      "Arithmetic",
      "Assignment",
      "Comparison",
      "Logical",
      "Bitwise",
      "Ternary",
      "typeof & instanceof"
    ],
  },
  {
    topic: "Control Flow",
    subtopics: [
      "if",
      "if-else",
      "switch",
      "ternary",
      "Nested Conditions",
      "Truthy & Falsy"
    ],
  },
  {
    topic: "Loops",
    subtopics: [
      "for",
      "while",
      "do-while",
      "for-in & for-of",
      "loop control (break & continue)",
      "looping through arrays & objects"
    ],
  },
  {
    topic: "Functions",
    subtopics: [
      "Function Declaration",
      "Arrow Functions",
      "IIFE",
      "Callback Functions",
      "Function Expressions",
      "Parameters & Arguments",
      "Rest Parameters",
      "Default Parameters",
      "Function Scope & Closures"
    ],
  },
  {
    topic: "Arrays",
    subtopics: [
      "Array Methods",
      "Map & Filter",
      "Reduce",
      "forEach",
      "find & findIndex",
      "Array Destructuring",
      "Spread Operator",
      "Multidimensional Arrays"
    ],
  },
  {
    topic: "Objects",
    subtopics: [
      "Object Literals",
      "this keyword",
      "Object Methods",
      "Destructuring",
      "Object.assign",
      "Nested Objects",
      "Optional Chaining",
      "Object.entries & Object.keys"
    ],
  },
  {
    topic: "DOM Manipulation",
    subtopics: [
      "Selecting Elements",
      "Events",
      "Creating & Removing Elements",
      "Modifying Classes & Attributes",
      "Event Delegation",
      "DOM Traversal",
      "Form Handling"
    ],
  },
  {
    topic: "ES6+ Features",
    subtopics: [
      "Template Literals",
      "Spread & Rest",
      "Destructuring",
      "Modules",
      "Arrow Functions",
      "let & const",
      "Promises",
      "Optional Chaining",
      "Nullish Coalescing"
    ],
  },
  {
    topic: "Asynchronous JS",
    subtopics: [
      "Callbacks",
      "Promises",
      "async/await",
      "Fetch API",
      "Promise.all & Promise.race",
      "Error Handling in async"
    ],
  },
  {
    topic: "Error Handling",
    subtopics: [
      "try-catch",
      "throw",
      "Custom Errors",
      "Error Object",
      "finally block"
    ],
  },
  {
    topic: "Storage & Cookies",
    subtopics: [
      "localStorage",
      "sessionStorage",
      "Cookies",
      "Difference Between Storage & Cookies",
      "Storing JSON in localStorage"
    ],
  },
  {
    topic: "JavaScript Scope & Closures",
    subtopics: [
      "Global vs Local Scope",
      "Lexical Scope",
      "Closures",
      "Block Scope",
      "Scope Chain"
    ],
  },
  {
    topic: "Event Loop & Concurrency",
    subtopics: [
      "Call Stack",
      "Web APIs",
      "Callback Queue",
      "Event Loop",
      "Microtasks vs Macrotasks"
    ],
  },
  {
    topic: "Memory Management",
    subtopics: [
      "Garbage Collection",
      "Memory Leaks",
      "References vs Values",
      "Performance Optimization"
    ],
  },
  {
    topic: "Modules & Tooling",
    subtopics: [
      "ES Modules vs CommonJS",
      "Import & Export",
      "Bundlers (Webpack, Vite)",
      "Transpiling with Babel",
      "Linting & Prettier"
    ],
  },
  {
    topic: "Object-Oriented JavaScript",
    subtopics: [
      "Constructor Functions",
      "Prototypes & Inheritance",
      "ES6 Classes",
      "Encapsulation",
      "Polymorphism"
    ],
  },
  {
    topic: "Functional Programming in JS",
    subtopics: [
      "Pure Functions",
      "Immutability",
      "Higher-Order Functions",
      "Function Composition",
      "Currying & Partial Application"
    ],
  },
  {
    topic: "Regular Expressions",
    subtopics: [
      "Syntax & Flags",
      "String Matching",
      "Replace & Split",
      "Validation Patterns"
    ],
  },
  {
    topic: "Date and Time",
    subtopics: [
      "Date Object",
      "Date Methods",
      "Formatting Dates",
      "Working with Timezones",
      "Using libraries like dayjs/moment.js"
    ],
  },
  {
    topic: "Unit Testing in JavaScript",
    subtopics: [
      "Why Testing?",
      "Jest Basics",
      "Testing Functions",
      "Mocking",
      "Test Coverage"
    ],
  },
  {
    topic: "Browser APIs",
    subtopics: [
      "Geolocation API",
      "Web Storage API",
      "Canvas API",
      "Notification API",
      "Clipboard API"
    ],
  }
];


const JavaScriptPage = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-24">
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

          <h1 className="text-2xl md:text-3xl font-bold mb-8">JavaScript Topics</h1>

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
