import { Container } from "@/components/container";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col  justify-between p-24">
        <Hero />

        <Container>Dead Party Media</Container>
      </main>
    </>
  );
}
