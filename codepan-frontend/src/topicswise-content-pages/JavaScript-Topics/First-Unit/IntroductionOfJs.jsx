import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import jsIntroData from '../../../data/javascript/1.Introduction-of-JavaScript/IntroductionOfJs.json';

const IntroductionOfJs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-24">  
      <div className="grid grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <div className="hidden sm:block sm:col-span-2 md:col-span-3" />

        {/* Main Content */}
        <div className="col-span-12 sm:col-span-8 md:col-span-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            <ul className="flex flex-wrap space-x-1 items-center">
              <li>
                <Link to="/" className="text-blue-700 hover:underline">Home</Link>
                <span className="mx-1" aria-hidden="true">»</span>
              </li>
              <li>
                <Link to="/topics/javascript" className="text-blue-700 hover:underline">JavaScript Tutorials</Link>
                <span className="mx-1" aria-hidden="true">»</span>
              </li>
              <li className="text-gray-800 dark:text-gray-200">JavaScript Introduction</li>
            </ul>
          </nav>

          { /* main */ }
          <main>   
            {/* Article */}
            <article className="text-gray-800 dark:text-gray-100">
              <section>
                <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">{jsIntroData.title}</h1>

                {jsIntroData.sections.map((section, index) => (
                  <div key={index} className='mb-10' >
                    <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-gray-800 dark:text-white ">{section.heading}</h2>

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
                        <p key={i} className="text-base leading-7 tracking-normal mb-6" dangerouslySetInnerHTML={{ __html: para }} />
                      ))}
                  </div>
                ))}
              </section>

              {/* Navigation Buttons */}
              <div className="mt-16 flex flex-col sm:flex-row justify-between gap-4">
                {/* Previous */}
                <Link
                  to="/topics/javascript"
                  aria-label="Previous: JavaScript Tutorials"
                  className="flex items-center justify-between w-[98%] sm:w-1/2 md:w-[48%] px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition hover:scale-[1.02]"
                >
                  <div className="flex items-center space-x-3">
                    <HiArrowNarrowLeft className="text-gray-600 dark:text-gray-300 text-3xl" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 uppercase font-medium">Previous</p>
                      <p className="text-blue-700 text-lg hover:underline">JavaScript Tutorials</p>
                    </div>
                  </div>
                </Link>

                {/* Next */}
                <Link
                  to="/topics/javascript/history"
                  aria-label="Next: JavaScript History"
                  className="flex items-center justify-between w-[98%] sm:w-1/2 md:w-[48%] px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 hover:shadow-md transition hover:scale-[1.02]"
                >
                  <div className="flex items-center space-x-3 ml-auto">
                    <div className="text-right">
                      <p className="text-sm text-gray-600 dark:text-gray-300 uppercase font-medium">Next</p>
                      <p className="text-blue-700 text-lg hover:underline">JavaScript History</p>
                    </div>
                    <HiArrowNarrowRight className="text-gray-600 dark:text-gray-300 text-3xl" />
                  </div>
                </Link>
              </div>

            </article>
          </main>
        </div>

        {/* Right Sidebar */}
        <div className="hidden sm:block sm:col-span-2 md:col-span-3" />    
      </div>
    </div>
  );
};

export default IntroductionOfJs;
