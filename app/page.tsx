import {
  About,
  Blog,
  Cta,
  Hero,
  Property,
  Features,
  Service,
} from "@/components/home/HomeSections";

export default function HomePage({}) {
  return (
    <>
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
    </>
  );
}
