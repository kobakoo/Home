import Head from "next/head";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Social Media Accounts</title>
        <meta name="description" content="My social media accounts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to My Social Media Accounts!
        </h1>

        <div className="mt-8 flex flex-row justify-center">
          <a
            href="https://twitter.com/kobako0o"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 rounded-full bg-blue-500 p-4 text-white transition-colors duration-300 hover:bg-blue-700"
          >
            <FaTwitter size={32} />
          </a>

          <a
            href="https://www.instagram.com/your_instagram_username"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 rounded-full bg-pink-500 p-4 text-white transition-colors duration-300 hover:bg-pink-700"
          >
            <FaEnvelope size={32} />
          </a>

          <a
            href="https://github.com/kobakoo"
            target="_blank"
            rel="noopener noreferrer"
            className="m-4 rounded-full bg-gray-700 p-4 text-white transition-colors duration-300 hover:bg-gray-900"
          >
            <FaGithub size={32} />
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="text-center">
          Made with <span className="text-red-500">♥</span> by Kobako
        </p>
      </footer>
    </div>
  );
};

export default SocialMedia;
