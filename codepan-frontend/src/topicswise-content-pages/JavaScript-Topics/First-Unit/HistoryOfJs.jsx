import React from 'react';
import { Link } from 'react-router-dom'; //
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"; 
//import jsHistoryData from '../../../src/data/javascript/1.Introduction to JavaScript/HistoryOfJavaScript.json';
//import jsHistoryData from '../../../data/javascript/1.Introduction of JavaScript/HistoryOfJavaScript.json';
import jsHistoryData from '../../../data/javascript/1.Introduction-of-JavaScript/HistoryOfJavaScript.json'

const HistoryOfJs = () => {
  return (
    <div className="container mx-auto py-32 sm:py-24 px-5 font-segoe">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 hidden md:block" />

        <div className="col-span-12 md:col-span-6">                   
         
          {/* Breadcrumb Navigation */}      
          <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">    
            <ul className="flex flex-wrap space-x-1 items-center">
                <li>
                    <Link to="/" className="text-blue-700 hover:underline">Home</Link>
                    <span className="mx-1">»</span>
                </li>
                <li>
                    <Link to="/topics/javascript" className="text-blue-700 hover:underline">JavaScript Tutorials</Link>
                    <span className="mx-1">»</span> 
                </li>
                <li className="text-gray-800 dark:text-gray-200">JavaScript History</li> 
            </ul>
          </nav>

          <article className="text-gray-800 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-6">{jsHistoryData.title}</h1>

            {jsHistoryData.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mt-8 mb-4">{section.heading}</h2>

                {section.type === 'list' && (
                  <>
                    {section.description && (
                      <p className="text-base leading-relaxed mb-2">{section.description}</p>
                    )}
                    <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
                      {section.content.map((item, i) => (
                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  </>
                )}

                {section.type === 'paragraph' &&
                  section.content.map((para, i) => (
                    <p key={i} className="text-base leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: para }} />
                  ))}

                {section.type === 'table' && (
                  <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
                      <thead>
                        <tr className="bg-gray-200">
                          {section.headers.map((header, hIdx) => (
                            <th key={hIdx} className="border border-gray-400 px-4 py-2">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="border border-gray-400 px-4 py-2">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}

            {/* Previous and Next buttons */}   
                        <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                            {/* Previous */}
                            <Link
                                to="/topics/javascript"
                                className="flex items-center justify-between sm:w-1/2 px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
                            >
                                <div className="flex items-center space-x-3">
                                    <HiArrowNarrowLeft className="text-gray-500 text-5xl" />
                                    <div>
                                        <p className="text-sm text-gray-500 uppercase font-medium">Previous</p>    
                                        <p className="text-blue-700 text-lg hover:underline">      
                                            JavaScript Tutorials
                                        </p>
                                    </div>
                                </div>
                            </Link>
            
                            {/* Next */}
                            <Link
                                to="/topics/javascript/features" 
                                className="flex items-center justify-between sm:w-1/2 px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
                            >
                                <div className="flex items-center space-x-3 ml-auto">                                                    
                                    <div className="text-right">                                            
                                        <p className="text-sm text-gray-500 uppercase font-medium">Next</p>   
                                        <p className="text-blue-700 text-lg hover:underline">    
                                            Javascript Features 
                                        </p>
                                    </div>
                                    <HiArrowNarrowRight className="text-gray-500 text-5xl" /> 
                                </div>
                            </Link>
                        </div>

          </article>
        </div>

        <div className="col-span-12 md:col-span-3 hidden md:block" />
      </div>
    </div>
  );
};

export default HistoryOfJs;
