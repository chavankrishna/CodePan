import React from 'react';
import { Link } from 'react-router-dom'; //
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi"; 
//import helloData from '../../../data/javascript/1.Introduction of JavaScript/helloWorldOfJs.json';
// import helloData from '../../../data/javascript/1.Introduction of JavaScript/HelloWorldOfJs.json'
import helloData from '../../../data/javascript/1.Introduction-of-JavaScript/HelloWorldOfJs.json'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HelloWorldOfJs = () => {
  const isCodeBlock = (text) => /<code>.*<\/code>/.test(text.trim());
  const extractCode = (htmlString) => htmlString.replace(/<\/?code>/g, '');

  return (
    <div className="container mx-auto py-32 sm:py-24 px-5 font-segoe bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
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
                <li className="text-gray-800 dark:text-gray-200">JavaScript Hello World</li>
            </ul>
            </nav>
          <article>
            <h1 className="text-4xl font-bold mb-6">{helloData.title}</h1>

            {helloData.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mt-8 mb-4">{section.heading}</h2>

                {section.type === 'paragraph' &&
                  section.content.map((para, i) =>
                    isCodeBlock(para) ? (
                      <div key={i} className="my-4 rounded-lg overflow-hidden bg-gray-800">
                        <SyntaxHighlighter
                          language="javascript"
                          style={materialDark}
                          customStyle={{
                            margin: 0,
                            background: 'transparent',
                            padding: '1rem',
                            fontSize: '0.9rem',
                          }}
                        >
                          {extractCode(para)}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <p
                        key={i}
                        className="text-base leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: para }}
                      />
                    )
                  )}

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
              </div>
            ))}
          </article>
        </div>

        <div className="col-span-12 md:col-span-3 hidden md:block" />
      </div>
    </div>
  );
};

export default HelloWorldOfJs;
