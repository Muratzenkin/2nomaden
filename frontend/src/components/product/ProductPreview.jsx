import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Mail } from "lucide-react";

function ProductPreview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const data = {
    starter: {
      title: t("product.starter.title"),
      description: t("product.starter.description"),
      price: "€49 / saat",
      benefits: [t("product.benefits.zoom"), t("product.benefits.doc_review")],
    },
    pro: {
      title: t("product.pro.title"),
      description: t("product.pro.description"),
      price: "€89 / saat",
      benefits: [
        t("product.benefits.zoom"),
        t("product.benefits.doc_review"),
        t("product.benefits.email_followup"),
        t("product.benefits.translation"),
      ],
    },
    custom: {
      title: t("product.custom.title"),
      description: t("product.custom.description"),
      price: t("product.custom.price"),
      benefits: [
        t("product.benefits.flexible"),
        t("product.benefits.strategy"),
      ],
    },
  };

  const option = data[id];

  if (!option) return <p>{t("product.not_found")}</p>;

  return (
    <>
      <Helmet>
        <title>{option.title} | 2 Nomaden</title>
      </Helmet>
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-4">{option.title}</h1>
        <p className="text-gray-600 mb-6">{option.description}</p>

        <ul className="space-y-2 mb-6">
          {option.benefits.map((b, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              ✅ {b}
            </li>
          ))}
        </ul>

        <p className="text-lg font-bold text-indigo-700 mb-8">{option.price}</p>

        <button
          onClick={() => navigate(`/contact?package=${id}`)}
          className="inline-flex items-center gap-2 bg-brand-accent hover:bg-indigo-700 text-black px-5 py-3 rounded-lg text-sm font-semibold shadow transition"
        >
          <Mail size={16} /> {t("product.button_contact")}
        </button>
      </section>
    </>
  );
}

export default ProductPreview;
