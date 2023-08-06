import axios from "axios";

export async function fetchNews() {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL}everything?q=keyword&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const { data } = res;
    return data;
  } catch (err: any) {
    alert(err.toString());
    return { data: 0 };
  }
}
