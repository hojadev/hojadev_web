import Services from "@/components/pages/landing/Services";
import Hero from "../components/pages/landing/Hero"
import Proyects from "@/components/pages/landing/Proyects";

export default function Home() {
  return (
    <main className="bg-color-primary flex flex-col items-center">
      <Hero/>
      <span className="transparent-primary w-[20px] h-[20px] block rounded-full my-[100px]"></span>
      <Services/>
      <span className="transparent-primary w-[20px] h-[20px] block rounded-full my-[100px]"></span>
      <Proyects/>
    </main>
  );
}
