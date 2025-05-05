import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import API_BASE from "../../config.js";

function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/admin");
      } else {
        setError(data.error || t("admin.login.fail"));
      }
    } catch (err) {
      setError(t("admin.login.server_error"));
      console.error("Login error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">{t("admin.login.title")}</h2>
      <h4 className="text-base font-medium mb-4 text-gray-600">
        {t("admin.login.note")}
      </h4>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("admin.login.email")}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t("admin.login.password")}
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
          {t("admin.login.button")}
        </button>
      </form>
    </div>
  );
}

export default Login;
