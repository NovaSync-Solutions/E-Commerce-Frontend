import Navbar from "@/components/Layout/Navbar";
import SliderNewArrival from "@/components/Sliders/SliderNewArrival";
import CardHero from "@/components/Cards/CardHero";
import SliderMain from "@/components/Sliders/SliderMain";
import ExploreNow from "@/components/Sections/ExploreNow";
import Footer from "@/components/Layout/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <SliderMain />
      <SliderNewArrival></SliderNewArrival>
      <CardHero />
      <ExploreNow />

      <Footer />
    </>
  );
}
