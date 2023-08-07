import Layout from "../components/Layout";
import { FC, useState, useEffect } from "react";
import { Card } from "../components/Card";
import { HorizontalRuleForPages } from "../components/HorizontalRule";
import { NewsType } from "../utils/types";
import { fetchNews } from "../utils/api";

const GetLatest: FC = () => {
  const [newsDatas, setNewsDatas] = useState<NewsType[]>([]);

  useEffect(() => {
    fetchNews().then((articles) => {
      setNewsDatas(articles);
    });
  }, []);

  return (
    <Layout>
      <div className="px-5 bg-slate-100">
        <p className="text-2xl font-semibold py-14">All Latest News</p>
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

export default GetLatest;
