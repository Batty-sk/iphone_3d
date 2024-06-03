"use client"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
export default function Home() {
  return (
    <main className="flex flex-col p-5">
      <Header />
      <Hero/>
      <Carousel />
    </main>
  );
}
