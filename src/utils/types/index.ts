export interface NewsType {
  url: string;
  urlToImage: string;
  source: {
    name: string;
  };
  title: string;
  description: string;
  author: string;
  publishedAt: string;
}

export interface NewsTypeNoPict {
  title: string;
  publishedAt: string;
}
