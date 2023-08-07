import { useState, useEffect } from "react";
import { fetchNews } from "../utils/api";
import Layout from "../components/Layout";
import { Card, CardNoPict } from "../components/Card";
import { HorizontalRule } from "../components/HorizontalRule";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { NewsType } from "../utils/types";

function App() {
  const [newsDatas, setNewsDatas] = useState<NewsType[]>([]);
  useEffect(() => {
    fetchNews().then((articles) => {
      setNewsDatas(articles);
    });
  }, []);

  const firstNews = newsDatas.length > 0 ? newsDatas[0] : null;
  const secondNews = newsDatas.slice(1, 3);
  const thirdNews = newsDatas.slice(3, 5);

  return (
    <Layout>
      <p className="text-5xl font-semibold my-12 tracking-wide">All News</p>
      <div className="grid grid-cols-10 gap-16">
        {firstNews && (
          <div className="col-span-4">
            <Card
              url={firstNews.url}
              urlToImage={firstNews.urlToImage}
              source={firstNews.source}
              title={firstNews.title}
              description={firstNews.description}
              author={firstNews.author}
              publishedAt={firstNews.publishedAt}
            />
          </div>
        )}
        <div className="col-span-2">
          {secondNews.map((newsData, index) => (
            <Card
              key={index}
              url={newsData.url}
              urlToImage={newsData.urlToImage}
              source={newsData.source}
              title={newsData.title}
              description={newsData.description}
              author={newsData.author}
              publishedAt={newsData.publishedAt}
            />
          ))}
        </div>
        <div className="col-span-2">
          {thirdNews.map((newsData, index) => (
            <Card
              key={index}
              url={newsData.url}
              urlToImage={newsData.urlToImage}
              source={newsData.source}
              title={newsData.title}
              description={newsData.description}
              author={newsData.author}
              publishedAt={newsData.publishedAt}
            />
          ))}
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
          {newsDatas.length >= 6 && (
            <div className="col-span-2">
              <CardNoPict
                publishedAt={newsDatas[5].publishedAt}
                title={newsDatas[5].title}
              />
            </div>
          )}
          <HorizontalRule />
          {newsDatas.length >= 7 && (
            <div className="col-span-2">
              <CardNoPict
                publishedAt={newsDatas[6].publishedAt}
                title={newsDatas[6].title}
              />
            </div>
          )}
          <HorizontalRule />
          {newsDatas.length >= 8 && (
            <div className="col-span-2">
              <CardNoPict
                publishedAt={newsDatas[7].publishedAt}
                title={newsDatas[7].title}
              />
            </div>
          )}
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
