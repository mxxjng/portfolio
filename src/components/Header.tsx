import { gapClassNames } from "../utils/styles";
import Button from "./Button";

type HeaderProps = {
    headline?: string;
    text?: string;
};

const Header: React.FC<HeaderProps> = ({
    headline = "Max Jung",
    text = "Multimedia / Web / Animation",
}) => {
    return (
        <div
            className={`text-center h-screen flex items-center justify-center`}
        >
            <div className="mb-8">
                <h1 className="text-headline font-headline text-5xl md:text-7xl mb-2">
                    {headline}
                </h1>
                <p>{text}</p>
                <div className="my-4 flex justify-center">
                    <div className="gradient-button-border rounded-md">
                        <button className="px-6 py-2 bg-bg text-headline rounded-md">
                            Mehr erfahren
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
