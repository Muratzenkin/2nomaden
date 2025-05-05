const API_BASE =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000" // kendi bilgisayarın
    : "https://twonomaden.onrender.com"; // Render’daki canlı backend

export default API_BASE;
