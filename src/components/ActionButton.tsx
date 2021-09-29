import PlusIcon from "./Icons/PlusIcon";

const ActionButton = ({ onClick }) => {
    return (
        <div
            onClick={onClick}
            className="fixed w-14 h-14 z-50 rounded-full bottom-16 right-4 md:right-12 bg-primary flex items-center justify-center cursor-pointer"
        >
            <PlusIcon />
        </div>
    );
};
export default ActionButton;
