import { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(t("contact_form.error"));
      }
    } catch (err) {
      console.error("HATA:", err);
      alert(t("contact_form.server_error"));
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4">{t("contact_form.title")}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={t("contact_form.name")}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={t("contact_form.email")}
          required
          className="w-full p-3 border rounded"
        />
        <input
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder={t("contact_form.subject")}
          required
          className="w-full p-3 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t("contact_form.message")}
          rows="5"
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded font-bold hover:bg-indigo-700"
        >
          {t("contact_form.send")}
        </button>
        {success && (
          <p className="text-green-600 font-semibold pt-2">
            {t("contact_form.success")}
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
