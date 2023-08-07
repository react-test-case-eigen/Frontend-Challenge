import { FC, useState, useEffect } from "react";
import axios from "axios";
import { NewsType } from "../utils/types";
import Layout from "../components/Layout";
import { HorizontalRuleForPages } from "../components/HorizontalRule";
import { Card } from "../components/Card";

const GetHealth: FC = () => {
  const [newsDatas, setNewsDatas] = useState<NewsType[]>([]);
  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BASE_URL
        }top-headlines?country=us&category=health&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        const { articles } = res.data;
        setNewsDatas(articles);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }, []);
  return (
    <Layout>
      <div className="px-5 bg-slate-100 my-20">
        <p className="text-2xl font-semibold py-14">Health</p>
        <HorizontalRuleForPages />
        <div className="grid grid-cols-5 gap-16 mt-9">
          {newsDatas.map((newsData, index) => (
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
      </div>
    </Layout>
  );
};

export default GetHealth;
