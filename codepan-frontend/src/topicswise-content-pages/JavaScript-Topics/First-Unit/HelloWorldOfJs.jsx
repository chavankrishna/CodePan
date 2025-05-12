import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import helloData from '../../../data/javascript/1.Introduction-of-JavaScript/HelloWorldOfJs.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Helper function to extract code from <pre><code> blocks
const extractCode = (htmlString) => {
  const stripped = htmlString
    .replace(/^<pre><code>/, '')
    .replace(/<\/code><\/pre>$/, '')
    .replace(/<\/?code>/g, '');
  const textarea = document.createElement('textarea');
  textarea.innerHTML = stripped;
  return textarea.value;
};

// CodeBlock Component to reuse across different code blocks
const CodeBlock = ({ code, language }) => (
  <div className="my-4 rounded-lg overflow-hidden bg-gray-800">
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        margin: 0,
        background: 'transparent',
        padding: '1rem',
        fontSize: '2rem !important',
        borderRadius: '0.5rem',
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        lineHeight: '1.4',
      }}
    >
      {extractCode(code)}
    </SyntaxHighlighter>
  </div>
);

const HelloWorldOfJs = () => {
  const isCodeBlock = (text) => /<code>.*<\/code>/.test(text.trim());

  // Check if the string is a full <pre><code> block (for the full HTML example)
  const isFullCodeBlock = (text) =>
    /^<pre><code>[\s\S]*<\/code><\/pre>$/.test(text.trim());

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
                    isFullCodeBlock(para) || isCodeBlock(para) ? (
                      <CodeBlock
                        key={i}
                        code={para}
                        language={isFullCodeBlock(para) ? 'html' : 'javascript'}
                      />
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

            {/* Previous and Next buttons */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
              <Link
                to="/topics/javascript/features"
                className="flex items-center justify-between sm:w-1/2 px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <HiArrowNarrowLeft className="text-gray-500 text-5xl" />
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-medium">Previous</p>
                    <p className="text-blue-700 text-lg hover:underline">
                      Features of JavaScript
                    </p>
                  </div>
                </div>
              </Link>

              <Link
                to="/topics/javascript/use-cases"
                className="flex items-center justify-between sm:w-1/2 px-6 py-4 border rounded-xl shadow-sm bg-white dark:bg-gray-800 transition hover:shadow-md"
              >
                <div className="flex items-center space-x-3 ml-auto">
                  <div className="text-right">
                    <p className="text-sm text-gray-500 uppercase font-medium">Next</p>
                    <p className="text-blue-700 text-lg hover:underline">
                      Use Cases of JavaScript
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

export default HelloWorldOfJs;
