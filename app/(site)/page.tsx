import About from "@/components/About";
import Blog from "@/components/Blog";
import DevStack from "@/components/DevStack";
import HeroSection from "@/components/HeroSection";
import Work from "@/components/Work";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <About />
      <Work />
      <Blog />
      <DevStack />
    </main>
  );
};

export default Home;
