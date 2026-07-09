import Header from "./components/layout/Header";
import HeroSection from "./components/sections/HeroSection";
import PeachIntroSection from "./components/sections/PeachIntroSection";
import FarmStorySection from "./components/sections/FarmStorySection";
import GallerySection from "./components/sections/GallerySection";
import OrderGuideSection from "./components/sections/OrderGuideSection";
import FAQSection from "./components/sections/FAQSection";
import NoticeSection from "./components/sections/NoticeSection";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <PeachIntroSection />
        <FarmStorySection />
        <GallerySection />
        <OrderGuideSection />
        <FAQSection />
        <NoticeSection />
      </main>

      <Footer />
    </>
  );
}

export default App;