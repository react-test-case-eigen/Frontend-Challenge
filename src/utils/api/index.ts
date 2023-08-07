import axios from "axios";

export async function fetchNews() {
  try {
    const res = await axios.get(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=9d9eedd661544b8da8bce1e167383b3c`
    );
    const { articles } = res.data;
    return articles;
  } catch (err: any) {
    alert(err.toString());
    return { articles: 0 };
  }
}
