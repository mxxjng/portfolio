import { useTranslations } from "next-intl";

type Props = {
  headline?: string;
  text?: string;
};

const Header = ({ headline = "Max Jung", text = "Multimedia / Web / Animation" }: Props) => {
  const t = useTranslations("main");

  return (
    <div className={`text-center h-screen flex items-center justify-center mx-auto max-w-7xl`}>
      <div className="mb-8">
        <h1 className="text-headline font-headline text-5xl md:text-7xl mb-2">{t("title")}</h1>
        <p>{text}</p>
        <div className="my-4 flex justify-center">
          <div className="gradient-button-border rounded-md">
            <button className="px-6 py-2 bg-bg text-headline rounded-md">Mehr erfahren</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
