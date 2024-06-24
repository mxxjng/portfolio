import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("main.about");
  const keys = ["firstParagraph", "secondParagraph"] as const;

  return (
    <div>
      <h2 className="text-2xl font-headline">{t("title")}</h2>
      {keys.map((key) => (
        <p key={key}>{t(`content.${key}.value`)}</p>
      ))}
    </div>
  );
};
export default About;
