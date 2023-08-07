import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { HorizontalRuleForPages } from "../HorizontalRule";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="items-center max-w-[90rem] mx-auto">
        <div className="flex justify-start pt-24 pb-24">
          <p className="max-w-md text-lg">
            Stay informed with a wide range of captivating and relevant topics,
            including sports, business, technology, and entertainment, presented
            in an informative and user-friendly format.
          </p>
        </div>
        <HorizontalRuleForPages />
      </div>
      <div className="space-x-[27rem] flex justify-center text-center pt-5 text-gray-400 text-sm pb-8">
        <span>© 2023. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <div>
          <span
            className="p-2 cursor-pointer inline-flex items-center
             rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
             duration-300"
          >
            <FaFacebook />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
             rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
             duration-300"
          >
            <FaTwitter />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
             rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
             duration-300"
          >
            <FaGithub />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
             rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
             duration-300"
          >
            <FaLinkedin />
          </span>
          <span
            className="p-2 cursor-pointer inline-flex items-center
             rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
             duration-300"
          >
            <FaInstagram />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
