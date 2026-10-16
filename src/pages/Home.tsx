import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import SelectedWorks from "../components/home/SelectedWorks";
import HowIWork from "../components/home/HowIWork";
import Statement from "../components/home/Statement";
import Wall from "../components/home/Wall";
import About from "../components/home/About";
import Quote from "../components/home/Quote";

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink" style={{ overflowX: "clip" }}>
      <Header />
      <main>
        <Hero />
        <Featured />
        <SelectedWorks />
        <HowIWork />
        <Statement />
        <Wall />
        <About />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
