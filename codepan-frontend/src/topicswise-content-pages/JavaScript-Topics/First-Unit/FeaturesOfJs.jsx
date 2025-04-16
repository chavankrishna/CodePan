import React from 'react';
//import featuresData from '../../../data/javascript/1.Introduction of JavaScript/FeaturesOfJs.json';
import featuresData from '../../../data/javascript/1.Introduction-of-JavaScript/FeaturesOfJs.json'
const FeaturesOfJs = () => {
  return (
    <div className="container mx-auto py-32 px-5 font-segoe">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3 hidden md:block" /> 

        <div className="col-span-12 md:col-span-6">
          <article className="text-gray-800 dark:text-gray-100">
            <h1 className="text-4xl font-bold mb-6">{featuresData.title}</h1>

            {featuresData.sections.map((section, index) => (
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
                    <p
                      key={i}
                      className="text-base leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))}
              </div>
            ))}
          </article>
        </div>

        <div className="col-span-12 md:col-span-3 hidden md:block" />
      </div>
    </div>
  );
};

export default FeaturesOfJs;
