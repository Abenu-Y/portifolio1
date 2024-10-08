import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
   

      <Header />

     <section id="hero" className="snap-center">
       <Hero />
     </section>

     <section id='about' className="snap-center">
        <About />
     </section>

     <section id='experience' className="snap-center">
        <Experience />
     </section>

     <section id='skills' className="snap-start">
         <Skills />
     </section>

     <section id='projects' className="snap-start">
         <Projects />
     </section>

     <section id='contact' className="snap-start">
         <ContactUs />
     </section>

   </main>
  );
}
