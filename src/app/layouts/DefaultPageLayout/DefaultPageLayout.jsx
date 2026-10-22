import { Footer } from '@/widgets/Footer';

function DefaultPageLayout({ children }) {
  return (
    <div className="wrapper">
      {children}
      <Footer />
    </div>
  );
}

export default DefaultPageLayout;
