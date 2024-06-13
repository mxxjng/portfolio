import LanguageSwitcher from "~/components/LanguageSwitcher/LanguageSwitcher";
import { useStickyNavigation } from "~/hooks/useStickyNavigation";

const Navigation = () => {
  const { isSticky } = useStickyNavigation();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center p-2 m-3 md:mx-auto bg-bgHighlight rounded-md max-w-7xl">
        <div>Max Jung</div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};
export default Navigation;
