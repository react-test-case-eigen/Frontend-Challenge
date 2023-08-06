import { useState, useEffect } from "react";
import { fetchNews } from "../utils/api";
import Layout from "../components/Layout";
import { Card, CardNoPict } from "../components/Card";
import { HorizontalRule } from "../components/HorizontalRule";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function App() {
  useEffect(() => {
    fetchNews().then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Layout>
      <p className="text-5xl font-semibold my-12 tracking-wide">Latest</p>
      <div className="grid grid-cols-10 gap-16">
        <div className="col-span-4">
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
          <Card />
        </div>
        <div className="col-span-2">
          <Card />
        </div>
        <div className="col-span-2">
          <hr
            style={{
              background: "gray",
              color: "gray",
              borderColor: "gray",
              height: "2px",
            }}
          />
          <CardNoPict />
          <HorizontalRule />
          <CardNoPict />
          <HorizontalRule />
          <CardNoPict />
          <Link to={"/latest"}>
            <div className="read-all-container my-16">
              <p className="text-lg text-red-700 font-bold tracking-wider hover:text-red-800">
                READ ALL
              </p>
              <div className="text-red-700 hover:text-red-800">
                <FaArrowRightLong size={25} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default App;
