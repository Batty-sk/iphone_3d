import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="flex flex-col p-5">
      <Header />
      <Hero/>
    </main>
  );
}
