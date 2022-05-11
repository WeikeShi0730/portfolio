import React, { useState, useRef } from "react";
import { sendForm } from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      );
      toast.success("success ✅ i'll get back to you asap, thanks!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
      console.log("SUCCESS!", res.status, res.text);
    } catch (error) {
      toast.error("sorry, there's an error, please try again!", {
        position: toast.POSITION.TOP_CENTER,
        theme: "dark",
      });
      console.log("FAILED...", error);
    }
  };

  return (
    <section id="contact" className="mx-8 scroll-mt-20">
      <div className="container bg-opacity-40 bg-white dark:bg-neutral-900 dark:bg-opacity-40 px-5 py-10 mx-auto my-20 rounded-3xl shadow-xl dark:shadow-xl-dark font-light">
        <form
          ref={form}
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
        >
          <h2 className="text-center sm:text-4xl text-3xl mb-4 text-green-500">
            get in touch
          </h2>
          <p className="text-center text-black dark:text-white text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            we can talk about anything!
          </p>
          <div className="relative mb-4 lg:w-2/3 w-3/4 m-auto">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-black dark:text-white"
            >
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
              className="w-full border-2 border-gray-700 rounded bg-white dark:bg-neutral-900 focus:border-green-400 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 lg:w-2/3 w-3/4 m-auto">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-black dark:text-white"
            >
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full border-2 border-gray-700 rounded bg-white dark:bg-neutral-900 focus:border-green-400 text-base outline-none text-black dark:text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4 lg:w-2/3 w-3/4 m-auto">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black dark:text-white"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              onChange={handleChange}
              className="w-full border-2 border-gray-700 rounded bg-white dark:bg-neutral-900 focus:border-green-400 h-32 text-base outline-none text-black dark:text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center m-auto sm-shadow green-button  py-2 px-6 rounded font-light"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
