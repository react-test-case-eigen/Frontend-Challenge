import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="mx-auto max-w-[90rem]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
