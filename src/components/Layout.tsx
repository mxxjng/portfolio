import { ThemeProvider } from "next-themes";
import * as React from "react";

import Navigation from "~/components/Navigation/Navigation";
import Container from "./UI/Container/Container";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Navigation />
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </Container>
  );
};
export default Layout;
