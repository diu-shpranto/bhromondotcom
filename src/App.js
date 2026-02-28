import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/layout/Layout";
import { AuthProvider } from './context/AuthContext';
import HomePage from "./pages/HomePage";
import PackagesPage from "./pages/PackagesPage";
import RegionalPackagesPage from './pages/RegionalPackagesPage';
import RegionalGuidePage from './pages/RegionalGuidePage';
import PackageDetailsPage from "./pages/PackageDetailsPage";
import LoginPage from "./pages/LoginPage";
import CompaniesPage from "./pages/CompaniesPage";
import CompanyProfilePage from "./pages/CompanyProfilePage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import DestinationDetailsPage from "./pages/DestinationDetailsPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import DestinationsPage from "./pages/DestinationsPage";
import SearchPage from "./pages/SearchPage";
import StyleDetailsPage from "./pages/StyleDetailsPage";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import DMCAPage from "./pages/DMCAPage";
import ContentRemovalPage from "./pages/ContentRemovalPage";
import ImagePolicyPage from "./pages/ImagePolicyPage";
import AboutPage from "./pages/AboutPage";
import FlightBookingPage from "./pages/FlightBookingPage";
import HotelBookingPage from "./pages/HotelBookingPage";

import VisaAssistancePage from "./pages/VisaAssistancePage";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
 <AuthProvider>
      <Layout>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
          
<Route path="/search" element={<SearchPage />} />
<Route path="/style/:type" element={<StyleDetailsPage />} />

          {/* ================= PACKAGES ================= */}
          <Route path="/packages" element={<PackagesPage />} />
                <Route path="/packages/division/:divisionId" element={<RegionalPackagesPage />} /> 
                 <Route path="/guide/:divisionId" element={<RegionalGuidePage />} />
          <Route path="/packages/category/:type" element={<PackagesPage />} />
          <Route path="/package/:id" element={<PackageDetailsPage />} />

          {/* ================= DESTINATION ================= */}
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:slug" element={<DestinationDetailsPage />} />

          {/* ================= PLACE ================= */}
          <Route path="/places/:slug" element={<PlaceDetailsPage />} />

          {/* ================= COMPANY ================= */}
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/company/:id" element={<CompanyProfilePage />} />

          {/* ================= BLOG ================= */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />

          {/* ================= AUTH ================= */}
          <Route path="/login" element={<LoginPage />} />
<Route path="/about" element={<AboutPage />} />

<Route path="/privacy" element={<PrivacyPage />} />
<Route path="/terms" element={<TermsPage />} />
<Route path="/dmca" element={<DMCAPage />} />
<Route path="/content-removal" element={<ContentRemovalPage />} />
<Route path="/image-policy" element={<ImagePolicyPage />} />

<Route path="/flight-booking" element={<FlightBookingPage />} />
<Route path="/hotel-booking" element={<HotelBookingPage />} />

<Route path="/visa-assistance" element={<VisaAssistancePage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
    </AuthProvider>
    </>
  );
}

export default App;