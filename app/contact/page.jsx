"use client";
import React from "react";
import { useState } from "react";

function page() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameError(true);
      return;
    } else {
      setNameError(false);
    }

    if (message.trim() === "") {
      setMessageError(true);
      return;
    } else {
      setMessageError(false);
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    const response = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);

    setName("");
    setMessage("");
  };

  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h1
              className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
              id="home"
            >
              Contact
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              私にメッセージが送れます！お問い合わせがありましたら下記フォームにどうぞ。
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 max-w-md">
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
          method="POST"
          action={`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`}
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none ${
                nameError && "border-red-500"
              }`}
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {nameError && (
              <p className={`mt-1 text-sm text-red-500`}>
                Please enter your name.
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className={`focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 focus:outline-none ${
                messageError && "border-red-500"
              }`}
              id="message"
              placeholder="Your message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            {messageError && (
              <p className={`mt-1 text-sm text-red-500`}>
                Please enter a message.
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default page;
