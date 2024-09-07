import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Property Webapp | Next.js 14',
  keywords: 'rental, property, real estate',
  description: 'Next.js project for property webapp',
};

function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default Layout;
