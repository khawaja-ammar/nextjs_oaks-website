import Header from "../components/Header";
import ProductSection from "../components/Homepage/ProductSection";
import EthosSection from "../components/Homepage/EthosSection";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="sectionPadding">
        <ProductSection />
        <EthosSection />
      </section>
    </main>
  );
}
