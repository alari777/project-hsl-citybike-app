import { FC, ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type layoutProps = {
  children: ReactNode;
};

const Layout: FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
