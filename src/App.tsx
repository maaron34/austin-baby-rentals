import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import Gear from './pages/Gear';
import HowItWorks from './pages/HowItWorks';
import Reviews from './pages/Reviews';
import AustinGuide from './pages/AustinGuide';
import NeighborhoodPage from './pages/NeighborhoodPage';
import { lazy, Suspense } from 'react';
import { trackPageView } from './utils/analytics';
import { getPageMeta } from './data/seo';

const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getPageMeta(pathname);
    trackPageView(pathname, meta.title);
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Analytics />
      <SEO />
      <Header />
      <main className="flex-1">
        <Suspense fallback={<div className="py-20 text-center text-text-light">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/austin-guide" element={<AustinGuide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/:slug" element={<NeighborhoodPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
