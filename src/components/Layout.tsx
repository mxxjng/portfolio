import * as React from "react";
import Navigation from "./Navigation";

/**
 * Layout component
 * @param children
 * @returns {JSX.Element}
 */
const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <div>
            <Navigation />
            {children}
        </div>
    );
};
export default Layout;
