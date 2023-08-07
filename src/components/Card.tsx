import { FC } from "react";
import { NewsType, NewsTypeNoPict } from "../utils/types";
import { Link } from "react-router-dom";
import { formatDistanceToNow, parseISO, isToday } from "date-fns";

export const Card: FC<NewsType> = (props) => {
  const { url, urlToImage, title, description, author, publishedAt, source } =
    props;
  const sourceName = source ? source.name : "";
  const publishedDate = parseISO(publishedAt);
  const daysAgo = isToday(publishedDate)
    ? "Today"
    : formatDistanceToNow(publishedDate, { addSuffix: true });
  return (
    <div>
      <Link to={url}>
        <figure>
          <img
            className="h-full zoom-in-effect"
            src={urlToImage}
            alt="Pict Huge"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/No-Image-Placeholder.png";
            }}
          />
        </figure>
      </Link>
      <p className="text-red-700 font-semibold my-2">{sourceName}</p>
      <Link to={url}>
        <p className="text-2xl font-bold hover:text-slate-800">{title}</p>
      </Link>
      <p className="my-7 max-w-xs text-lg">{description}</p>
      <p className="font-bold hover:underline hover:text-red-700 mb-16">
        {author} | {daysAgo}
      </p>
    </div>
  );
};

export const CardNoPict: FC<NewsTypeNoPict> = (props) => {
  const { publishedAt, title } = props;
  const publishedDate = parseISO(publishedAt);
  const daysAgo = isToday(publishedDate)
    ? "Today"
    : formatDistanceToNow(publishedDate, { addSuffix: true });
  return (
    <div className="text-lg">
      <p className="mb-3 mt-8">{daysAgo}</p>
      <p className="font-bold">{title}</p>
    </div>
  );
};
