import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Helmet } from 'react-helmet';
import featuresData from '../../../data/javascript/1.Introduction-of-JavaScript/FeaturesOfJs.json';

const FeaturesOfJs = () => {
  return (
    <div className="container mx-auto py-32 sm:py-24 px-5 font-segoe">
      <Helmet>
        <title>Features of JavaScript | JavaScript Tutorial</title>
        <meta name="description" content="Explore the powerful features of JavaScript, including dynamic typing, functional programming, object-oriented capabilities, and platform independence." />
        <meta name="keywords" content="JavaScript Features, Dynamic Typing, Functional Programming in JavaScript, JavaScript OOP, Platform Independence, JavaScript Tutorial" />
        <meta name="author" content="CodePan Blogs" />
        <meta property="og:title" content="Features of JavaScript | JavaScript Tutorial" />
        <meta property="og:description" content="Learn about key features that make JavaScript essential for modern web development, such as dynamic typing, OOP support, and functional programming." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://code-pan-red.vercel.app/topics/javascript/features" />
        <meta property="og:image" content="https://code-pan-red.vercel.app/images/js-features-banner.png" />
      </Helmet>

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
              <li className="text-gray-800 dark:text-gray-200">JavaScript Features</li>
            </ul>
          </nav>

          <article className="text-gray-800 dark:text-gray-100">
            <section>  
              <h1 className="text-2xl md:text-3xl font-bold mb-8 tracking-tight text-gray-900 dark:text-white">{featuresData.title}</h1>

              {featuresData.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl md:text-2xl font-semibold mt-10 mb-4 text-gray-800 dark:text-white">{section.heading}</h2>

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
                      <p
                        key={i}
                        className="text-base leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    ))}
                </div>
              ))}

            </section>

            {/* Previous and Next buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
              <Link
                to="/topics/javascript/history"
                className="flex items-center justify-between sm:w-1/2 px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <HiArrowNarrowLeft className="text-gray-500 text-5xl" />
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-medium">Previous</p>
                    <p className="text-blue-700 text-lg hover:underline">
                      History of JavaScript
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/topics/javascript/hello-world"
                className="flex items-center justify-between sm:w-1/2 px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
              >
                <div className="flex items-center space-x-3 ml-auto">
                  <div className="text-right">
                    <p className="text-sm text-gray-500 uppercase font-medium">Next</p>
                    <p className="text-blue-700 text-lg hover:underline">
                      Hello World of JavaScript
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

export default FeaturesOfJs;
