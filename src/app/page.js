import Navbar from "@/components/Layout/Navbar";
import SliderNewArrival from "@/components/Sliders/SliderNewArrival";
import CardHero from "@/components/Cards/CardHero";
import SliderMain from "@/components/Sliders/SliderMain";

export default function Home() {
  return (
    <>
      <Navbar />
      <SliderMain />
      <SliderNewArrival></SliderNewArrival>
      <CardHero />
    </>
  );
}
