import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { QuickMenu } from '@/widgets/QuickMenu';

function DefaultPageLayout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <QuickMenu />
      <Footer />
    </div>
  );
}

export default DefaultPageLayout;
