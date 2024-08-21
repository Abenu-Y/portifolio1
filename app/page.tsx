import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll">
   

     {/* header */}
      <Header />
     {/* hero-section */}
     <section id="hero" className="snap-center">
       <Hero />
     </section>
     {/* about-section */}
     {/* Experience  */}
     {/* Skills  */}

     {/* Projects */}
     {/* Contact Me */}
   </main>
  );
}
