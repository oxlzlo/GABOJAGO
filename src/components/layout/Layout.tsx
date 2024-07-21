import Header from '@/components/Header';
import { LayoutProps } from '@/lib/types/layoutProps';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
