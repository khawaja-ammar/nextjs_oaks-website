export const metadata = {
  title: "Custom Order",
  description: "",
};

const boxes = [
  {
    heading: "Influence",
    color: "#72986F",
    content:
      "72% of consumers say their purchasing decision is influenced by the packaging design",
  },
  {
    heading: "Marketing",
    color: "#F58216",
    content: "Packaging to become the most important marketing tool",
  },
  {
    heading: "Brand",
    color: "rgb(239 68 68)",
    content: "77% of B2B marketing leaders say branding is critical growth",
  },
  {
    heading: "Quality",
    color: "#0072A0",
    content:
      "Businesses have reported a 30% increase in consumer interest when businesses show strong attention to packaging",
  },
  {
    heading: "Customer",
    color: "#75CBA8",
    content:
      "40% of customers would share a photo of a product if the packaging is interesting",
  },
];

export default function Custom() {
  return (
    <main className="sectionPadding py-20">
      <h3 className="pb-12 text-center">Custom Order</h3>
      <section className="">
        <div className="flex flex-col gap-2 md:flex-row">
          {boxes.map((box, i) => (
            <div
              key={i}
              className="flex basis-full flex-col items-center gap-2 rounded-3xl p-4 text-white shadow-2xl md:gap-4 md:p-4"
              style={{ backgroundColor: `${box.color}` }}
            >
              <p className="text-base md:text-lg">{box.heading}</p>
              <br />
              <p className="text-sm md:text-base">{box.content}</p>
            </div>
          ))}
        </div>
      </section>
      <br />
      <p>
        With printing facilities and designers on board, we can create the
        perfect cup to help you launch your brand. For the past two years we
        have served a select few clients providing them customized cups for
        everything from ice creams to coffee. We have envisioned helping you
        serve your customer with cups that portray the value and personality
        your brand has to offer.
      </p>
    </main>
  );
}
