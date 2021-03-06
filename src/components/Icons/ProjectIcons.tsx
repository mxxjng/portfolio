import { colors } from "../../utils/styles";

const ProjectIcon: React.FC<{ className?: string }> = ({ className = "" }) => {
    return (
        <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.6426 1.5C2.7386 1.5 1.4996 2.976 1.4996 6.433V14.232C1.4996 17.416 3.2576 19.169 6.4496 19.169H14.2316C17.4156 19.169 19.1686 17.416 19.1686 14.232V14.229L19.1966 9.264C19.1966 5.865 18.0306 4.54 15.0356 4.54H12.2056C11.2566 4.539 10.3506 4.086 9.7806 3.328L8.8676 2.114C8.5806 1.729 8.1216 1.501 7.6416 1.5H5.6426ZM14.2316 20.669H6.4496C2.4716 20.669 -0.000396729 18.202 -0.000396729 14.232V6.433C-0.000396729 2.164 1.8986 0 5.6426 0H7.6426C8.5936 0.001 9.4996 0.455 10.0676 1.214L10.9786 2.426C11.2676 2.81 11.7266 3.039 12.2066 3.04H15.0356C18.8976 3.04 20.6966 5.019 20.6966 9.268L20.6686 14.235C20.6676 18.203 18.2016 20.669 14.2316 20.669Z"
                fill={colors.black}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.7158 13.7128H5.9808C5.5668 13.7128 5.2308 13.3768 5.2308 12.9628C5.2308 12.5488 5.5668 12.2128 5.9808 12.2128H14.7158C15.1298 12.2128 15.4658 12.5488 15.4658 12.9628C15.4658 13.3768 15.1298 13.7128 14.7158 13.7128Z"
                fill={colors.black}
            />
        </svg>
    );
};
export default ProjectIcon;
