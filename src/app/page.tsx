import Services from "@/components/pages/landing/Services";
import Hero from "../components/pages/landing/Hero"
import Contact from "@/components/pages/landing/Contact";
import Tecnologies from "@/components/pages/landing/Tecnologies";
import { workSans } from "./fonts";
import 'react-toastify/dist/ReactToastify.css';
import Projects from "@/components/pages/landing/Projects";

export default function Home() {
  return (
    <main className={ `bg-color-primary flex flex-col items-center ${workSans.className}`}>
      <Hero/>
      <span className="transparent-primary w-[20px] h-[20px] block rounded-full my-[100px]"></span>
      <Services/>
      <span className="transparent-primary w-[20px] h-[20px] block rounded-full my-[100px]"></span>
      <Projects/>
      <span className="transparent-primary w-[20px] h-[20px] block rounded-full my-[100px]"></span>
      <Tecnologies/>
      <span className="transparent-primary w-[20px] h-[20px] block rounded-full my-[100px]"></span>
      <Contact/>
    </main>
  );
}
