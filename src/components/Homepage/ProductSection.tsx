import Image from "next/image";

const images = [
  "/assets/productsection/prod3.jpeg",
  "/assets/productsection/prod1.jpeg",
  "/assets/productsection/prod2.jpeg",
];

export default function ProductSection() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center gap-12 px-8">
        {/* <h1>Products</h1> */}
        <div className="relative flex flex-col gap-12 md:flex-row">
          {images.map((imgItem, i) => (
            <div className="aspect-12/16" key={i}>
              <Image
                src={imgItem}
                alt="img"
                width={1200}
                height={1600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          ))}
          {/* <div className="aspect-12/16">
            <Image src={prod1} alt="p1" className="rounded-xl" />
          </div>
          <div className="aspect-12/16">
            <Image src={prod2} alt="p2" className="rounded-xl" />
          </div>{" "}
          <div className="aspect-12/16">
            <Image src={prod3} alt="p3" className="rounded-xl" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
