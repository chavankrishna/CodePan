import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen px-4 sm:px-10 py-32 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-base sm:text-lg mb-6">
          Have a question, feedback, or collaboration idea? I'd love to hear from you!
        </p>

        <div className="text-left sm:text-center space-y-3">
          <p>
            📞 <strong>Phone:</strong>{" "}
            <a
              href="tel:+919834463450"
              className="text-cyan-500 hover:underline"
            >
              +91 98344 63450
            </a>
          </p>
          <p>
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:dardcode@gmail.com"
              className="text-cyan-500 hover:underline"
            >
              dardcode@gmail.com
            </a>
          </p>
          <p>
            💼 <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/krishnachavan1"
              className="text-cyan-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Krishna Chavan
            </a>
          </p>
          <p>
            💻 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/chavankrishna"
              className="text-cyan-500 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Krishna Chavan
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
