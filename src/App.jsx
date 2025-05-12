import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Ovc from "./components/overview-counter/Ovc";
import BannerDetails from "./components/poster-details/BannerDetails";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
import NewBanner from "./components/poster-details/NewBanner";

function App() {
  return (
    <div className="dark:bg-gray-900 bg-white">

      <Navbar />
      <Hero />
      <Ovc />
      <BannerDetails />
      <NewBanner reverse={true} />
      <SimpleBanner />
      <Blogs />
      <Footer/>


    </div>
  );
}

export default App;
