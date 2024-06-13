import { ThemeProvider } from "next-themes";
import * as React from "react";

import Navigation from "~/components/Navigation/Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navigation />
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};
export default Layout;
