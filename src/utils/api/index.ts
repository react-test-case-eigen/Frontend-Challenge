import axios from "axios";

export async function fetchNews() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}everything?q=keyword&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const { articles } = res.data;
    return articles;
  } catch (err: any) {
    alert(err.toString());
    return { articles: 0 };
  }
}
