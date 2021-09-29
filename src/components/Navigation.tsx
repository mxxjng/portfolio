import React, { useRef, useEffect } from "react";
import LogoIconMobile from "./Icons/LogoIconMobile";

const win = typeof window !== "undefined" && window;

const Navigation = () => {
    const navBar = useRef(null);

    useEffect(() => {
        stickyNav();
        window.addEventListener("scroll", stickyNav);

        return function cleanup() {
            window.removeEventListener("scroll", stickyNav);
        };
    });

    const stickyNav = () => {
        const scrollTop = win.pageYOffset;

        // Sticky Nav
        if (scrollTop > 0) {
            navBar.current.classList.add("is-sticky");
        } else if (scrollTop <= 0) {
            navBar.current.classList.remove("is-sticky");
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full">
            <div
                className="flex justify-between items-center p-2 m-3 md:mx-auto bg-bgHighlight rounded-md nav max-w-7xl "
                ref={navBar}
            >
                <div>
                    <LogoIconMobile />
                </div>
                <div>
                    <div className="w-8 h-8 bg-headline rounded-full"></div>
                </div>
            </div>
        </div>
    );
};
export default Navigation;
