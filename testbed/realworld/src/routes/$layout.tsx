import type { Layout } from "vrmf";
import { Footer } from "./_footer";
import { Header } from "./_header";

const RootLayout: Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
