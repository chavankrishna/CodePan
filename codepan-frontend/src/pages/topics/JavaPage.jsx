import React from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import { Link } from 'react-router-dom';


const javaTopics = [
  {
    topic: "Introduction to Java",
    subtopics: ["History", "Features", "JVM vs JRE vs JDK", "Hello World Program"],
  },
  {
    topic: "Variables and Data Types",
    subtopics: ["Primitive Types", "Reference Types", "Type Casting", "Literals"],
  },
  {
    topic: "Control Statements",
    subtopics: ["if", "if-else", "switch-case", "nested if"],
  },
  {
    topic: "Loops",
    subtopics: ["for loop", "while loop", "do-while loop", "break & continue"],
  },
  {
    topic: "Arrays",
    subtopics: ["1D Arrays", "2D Arrays", "Array Methods", "Array Sorting"],
  },
  {
    topic: "Strings",
    subtopics: ["String vs StringBuilder", "Common Methods", "String Immutability"],
  },
  {
    topic: "Classes and Objects",
    subtopics: ["Class Structure", "Object Creation", "Constructors"],
  },
  {
    topic: "Inheritance",
    subtopics: ["Types of Inheritance", "super keyword", "Method Overriding"],
  },
  {
    topic: "Polymorphism",
    subtopics: ["Compile-time", "Runtime", "Method Overloading"],
  },
  {
    topic: "Exception Handling",
    subtopics: ["try-catch", "finally", "throw vs throws"],
  },
  {
    topic: "Collections Framework",
    subtopics: ["List", "Set", "Map", "Iterators"],
  },
  {
    topic: "Multithreading",
    subtopics: ["Thread Class", "Runnable Interface", "Synchronization"],
  },
  {
    topic: "File I/O",
    subtopics: ["FileReader & FileWriter", "Buffered Streams", "Serialization"],
  },
  {
    topic: "Interfaces and Abstract Classes",
    subtopics: ["Abstract Class", "Interface", "Multiple Inheritance in Java"],
  },
];

const JavaPage = () => {
    return (
      <div className="container mx-auto py-32 px-5">
        <div className="grid grid-cols-12 gap-6">  
          {/* Left Sidebar */}
          <div className="col-span-12 md:col-span-3 hidden md:block" />
  
          {/* Main Content */}
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-3xl font-bold mb-6">Java Topics</h1>
            <ul className="space-y-5">
              {javaTopics.map((item, index) => (
                <li
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-md border border-gray-300 dark:border-gray-700 rounded-lg transition-all"
                >
                  <div className="p-4 font-semibold text-lg border-b dark:border-gray-600">
                    {item.topic}
                  </div>
                  <ul className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                    {item.subtopics.map((sub, subIndex) => {
                      const path = `/topics/java/${sub.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
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
          </div>
  
          {/* Right Sidebar */}
          <div className="col-span-12 md:col-span-3 hidden md:block" />
        </div>
      </div>
    );
  };
  
  export default JavaPage;