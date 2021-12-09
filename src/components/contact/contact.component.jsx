import React, { useState, useRef } from "react";
import { sendForm } from "emailjs-com";
import emailkey from "../../emailkey";
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
        emailkey.SERVICE_ID,
        emailkey.TEMPLATE_ID,
        form.current,
        emailkey.USER_ID
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
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <form
          ref={form}
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col m-auto w-5/6  md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-green-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
            hire me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="w-full border-2 border-gray-700 rounded focus:bg-white focus:border-green-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full border-2 border-gray-700 rounded focus:bg-white focus:border-green-400 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-black">
              message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="w-full border-2 border-gray-700 rounded focus:bg-white focus:border-green-400 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="green-button border-0 py-2 px-6 focus:outline-none rounded text-lg"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
