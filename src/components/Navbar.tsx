import { Link } from "react-router-dom";
import { HorizontalRuleForPages } from "./HorizontalRule";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-3">
        <Link to={"/"}>
          <img
            src="/newsify.png"
            alt="Logo Newsify"
            style={{ width: "200px", height: "200px" }}
          />
          <p className="font-semibold text-6xl text-red-600 tracking-widest">
            Newsify
          </p>
        </Link>
      </div>
      <HorizontalRuleForPages />
      <div className="flex justify-center space-x-10 text-lg my-3">
        <p className="hover:text-red-700 hover:underline">Business</p>
        <p className="hover:text-red-700 hover:underline">Entertainment</p>
        <p className="hover:text-red-700 hover:underline">Health</p>
        <p className="hover:text-red-700 hover:underline">Science</p>
        <p className="hover:text-red-700 hover:underline">Sports</p>
        <p className="hover:text-red-700 hover:underline">Technology</p>
      </div>
      <HorizontalRuleForPages />
    </>
  );
}
