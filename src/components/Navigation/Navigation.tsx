import Link from "next/link";
import LanguageSwitcher from "~/components/LanguageSwitcher/LanguageSwitcher";
import { useStickyNavigation } from "~/hooks/useStickyNavigation";

import Logo from "~/components/Icons/Logo";

const linkData = [
  { link: "", name: "About Me" },
  { link: "", name: "CV" },
  { link: "", name: "Skills" },
];

const Navigation = () => {
  const { isSticky } = useStickyNavigation();

  const links = linkData.map((link) => (
    <Link key={link.name} href={link.link} className="ml-4 text-sm">
      {link.name}
    </Link>
  ));

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-2 m-3 md:mx-auto bg-bgHighlight rounded-md max-w-5xl">
        <Logo />
        <div className="flex items-center">
          {links}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
