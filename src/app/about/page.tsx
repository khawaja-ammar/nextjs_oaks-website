import ClientsImages from "@/components/ClientsImages";

export const metadata = {
  title: "About Us",
  description: "",
};

const images = [
  "/assets/clients/airplane.png",
  "/assets/clients/cafes.png",
  "/assets/clients/catering.png",
  "/assets/clients/cloud kitchen.png",
  "/assets/clients/fast food.png",
  "/assets/clients/hospitals_sq.png",
  "/assets/clients/hotels_sq.png",
  "/assets/clients/hyper and supermarket.png",
  "/assets/clients/restaurants1.png",
];

export default function About() {
  return (
    <main className="sectionPadding py-20">
      <section className="flex flex-col gap-8">
        <div>
          <h3>Our Company</h3>
          <p>
            <span>
              Since our inception in 2018 we have catered to the local wholesale
              market across the country. Our product and service has come to be
              known in the market for its durability and quality. We have
              revolutionized the disposable industry in Pakistan - bringing the
              latest technology and putting in effort to improve every year. Our
              current disposable lines serve a variety of industries including
              retail, hospitality, healthcare, airlines and the FMCG sector. In
              a very short span we have come to become one of the largest
              manufacturers for disposable goods in Pakistan.
            </span>
            <br />
            <br />
            <span>
              The operations include two different manufacturing plants with an
              increased focus towards integrating the vertical supply chain. We
              strive to deliver value by offering the highest quality at
              affordable pricing. A key pillar of our success has been our
              relationship with our clients - any future client can expect to
              have constant access to the management team at Oaks Packaging.
            </span>
          </p>
        </div>
        <div>
          <h3>Vision</h3>
          <p>
            <span>
              To fulfill the disposable packaging needs of a growing economy
            </span>
          </p>
        </div>
        <div>
          <h3>Accreditations</h3>
          <p>
            <span>
              Quality is paramount at Oaks Packaging, right from the incoming
              raw material to the outgoing finished products to be shipped.
              Superior manufacturing units with minimal touch and human
              intervention ensures hygienic, safe and best manufacturing
              practices. We take pride in sourcing our raw material from
              suppliers with international accreditations that bear/stand
              testimony to our commitment to quality.
            </span>
          </p>
        </div>
        <div>
          <h3>Machinery</h3>
          <p>
            <span>
              Oaks Packaging is equipped with the state of the art machinery
              which includes carrogation, PE coating, in-house printing,
              slitting, sheet-line, cup forming, and lid machines. Our
              integrated approach allows us to maintain strict quality control
              measures while ensuring cost-effectiveness, which ultimately
              benefits our valued partners.
            </span>
          </p>
        </div>
        <div>
          <h3>Our Customers</h3>
          <ClientsImages images={images} />
        </div>
      </section>
    </main>
  );
}
