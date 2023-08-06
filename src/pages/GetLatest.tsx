import Layout from "../components/Layout";
import { FC } from "react";
import { Card } from "../components/Card";
import { HorizontalRuleForPages } from "../components/HorizontalRule";

const GetLatest: FC = () => {
  return (
    <Layout>
      <div className="px-5 bg-slate-100">
        <p className="text-2xl font-semibold py-14">All Latest News</p>
        <HorizontalRuleForPages />
        <div className="grid grid-cols-5 gap-16 mt-9">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Layout>
  );
};

export default GetLatest;
