const boxes = [
  {
    heading: "Safe ",
    color: "#72986F",
    content:
      "We only use premium food grade raw materials. Our paper and ink are sourced from the best suppliers available. ",
  },
  {
    heading: "Quality",
    color: "#0072A0",
    content:
      "We pride ourselves on delivering only the best to our customers - our extensive in-house quality checks ensure that the product being delivered is of the highest quality.",
  },
  {
    heading: "Designs",
    color: "rgb(239 68 68)",
    content:
      "Eye catching designs are the most attractive marketing tool our customers have. We have a wide range of attractive designs to choose from in our inventory, we also have the capability to make bespoke designs for our customers.",
  },
  {
    heading: "Delivery",
    color: "#F58216",
    content:
      "The success of our business is contingent on adhering to strict delivery times. We ensure that once agreed upon all the deliveries are made in time.",
  },
];

export default function EthosSection() {
  return (
    <section className="pb-20">
      <div className="mx-auto grid max-w-sm grid-cols-1 gap-4 text-white sm:max-w-full sm:grid-cols-2">
        {boxes.map((box, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-3xl p-8 shadow-2xl md:gap-4 md:p-10"
            style={{ backgroundColor: `${box.color}` }}
          >
            <h2>{box.heading}</h2>
            <br />
            <p>{box.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
