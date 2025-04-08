import React from "react";

const About = () => {
  return (
    <section className="min-h-screen px-4 sm:px-10 py-32 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">About CodePan</h1>
        <p className="text-lg sm:text-xl mb-4">
          Hey there 👋 I'm <span className="font-semibold">Krishna Chavan</span>, the creator of <span className="font-semibold">CodePan</span>.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          CodePan is a platform dedicated to empowering computer science students and developers by providing high-quality blogs, tutorials, and insights on web development and programming. As a full-stack developer passionate about modern technologies, I built this platform to help others learn, grow, and stay up-to-date in the tech world.
        </p>
        <p className="mt-4 text-base sm:text-lg leading-relaxed">
          Whether you're diving into JavaScript, React, Node.js, or exploring backend systems, CodePan is your go-to resource. I'm on a mission to build a developer-friendly community—so stay curious, keep building, and happy coding! 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
