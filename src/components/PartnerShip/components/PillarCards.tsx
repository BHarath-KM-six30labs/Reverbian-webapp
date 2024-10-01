import image from "../../../assets/image1.png";
import "./pillar.css";
const pillars = [
  {
    title: "Strategy",
    description:
      "Build executable time-bound strategies to drive product discovery, sales acceleration & account expansion for B2B SaaS.",
  },
  {
    title: "Curation",
    description:
      "Getting specific, getting clarity. Charting a detailed action plan and following up with time-bound executions.",
  },
  {
    title: "Outcomes",
    description: "Measurable results. No vanity metrics. Evaluate and evolve.",
  },
];

function PillarCards() {
  return (
    <div className="mx-16 p-4 mt-9">
      <h3 className="text-[48px] font-bold">Enabled by 3 Pillars</h3>

      {pillars.map((pillar, index) => (
        <div key={index} className=" items-center mt-16 grid-container">
          <h2 className="text-[49px] grid-item-1">{pillar.title}</h2>
          <div
            className={`w-[290px] h-[200px] bg-[#E3E3E3] flex items-center justify-center  ${
              pillar.title === "Outcomes" ? "grid-item-2a " : "grid-item-2"
            }`}
          >
            <img
              src={image}
              alt={pillar.title}
              className="h-32 w-32 rounded-t-lg"
            />
          </div>
          <div className="grid-item-3">
            <p className="text-[22px] ">{pillar.description}</p>
            <button className="mt-2">know more</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PillarCards;
