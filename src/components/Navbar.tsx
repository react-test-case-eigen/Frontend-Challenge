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
        <Link to={"/business"}>
          <p className="hover:text-red-700 hover:underline">Business</p>
        </Link>
        <Link to={"/entertainment"}>
          <p className="hover:text-red-700 hover:underline">Entertainment</p>
        </Link>
        <Link to={"/health"}>
          <p className="hover:text-red-700 hover:underline">Health</p>
        </Link>
        <Link to={"/science"}>
          <p className="hover:text-red-700 hover:underline">Science</p>
        </Link>
        <Link to={"/sports"}>
          <p className="hover:text-red-700 hover:underline">Sports</p>
        </Link>
        <Link to={"/technology"}>
          <p className="hover:text-red-700 hover:underline">Technology</p>
        </Link>
      </div>
      <HorizontalRuleForPages />
    </>
  );
}
