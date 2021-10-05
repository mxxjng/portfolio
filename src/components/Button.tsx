import React, {
    ButtonHTMLAttributes,
    DetailedHTMLProps,
    ReactNode,
} from "react";

import { SpinnerSmall } from "./SpinnerSmall";

const sizeClassNames = {
    big: "w-full py-4 px-8 text-md rounded-md",
    small: "w-full px-2 py-1 text-sm rounded-md",
    tiny: "px-1 text-sm rounded-md",
    full: "w-full md:w-full rounded-md",
};

const colorClassNames = {
    primary: "bg-primary text-white",
    secondary: "border border-primary text-headline",
    dangerPrimary: "bg-danger text-white",
    dangerSecondary: "border border-danger text-headline",
};

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & {
    size?: keyof typeof sizeClassNames;
    color?: keyof typeof colorClassNames;
    icon?: ReactNode;
    loading?: boolean;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({
    children,
    color = "primary",
    size = "big",
    className = "",
    disabled,
    icon,
    loading,
    ...props
}) => {
    return (
        <button
            disabled={disabled || loading}
            className={` md:w-auto outline-none mb-2 px-4 py-2 rounded-md 
            font-headline ${colorClassNames[color]} ${sizeClassNames[size]}
            whitespace-nowrap flex items-center justify-center ${className}`}
            {...props}
        >
            <span className={loading ? "opacity-0" : `flex items-center mt-1`}>
                {icon && <span className={`mr-2 items-center`}>{icon}</span>}
                {children}
            </span>
            {loading && (
                <span className={`absolute`}>
                    <SpinnerSmall />
                </span>
            )}
        </button>
    );
};
export default Button;
