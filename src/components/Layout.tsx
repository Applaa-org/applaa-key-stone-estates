import { Outlet } from '@tanstack/react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from './CookieBanner';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};