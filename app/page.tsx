import {
  About,
  Blog,
  Cta,
  Hero,
  Navbar,
  Property,
  Features,
  Service,
  Footer,
} from "@/components/home/HomeSections";

export default function HomePage({}) {
  return (
    <>
      <Navbar />
      <main>
        <article>
          <Hero />

          <About />

          <Service />

          <Property />

          <Features />

          <Blog />

          <Cta />
        </article>
      </main>
      <Footer />
    </>
  );
}
