import { useRouter } from "next/router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/UI/Select/Select";

const LanguageSwitcher = () => {
  const router = useRouter();

  const switchLanguage = (locale: string) => {
    const path = router.asPath;

    return router.push(path, path, { locale });
  };

  return (
    <Select onValueChange={switchLanguage} defaultValue={router.locale}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="de">de</SelectItem>
        <SelectItem value="en">en</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
