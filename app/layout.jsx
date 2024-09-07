import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Webapp | Next.js 14',
  keywords: 'rental, property, real estate',
  description: 'Next.js project for property webapp',
};

function Layout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

export default Layout;
