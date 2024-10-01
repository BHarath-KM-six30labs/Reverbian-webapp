import image from "../../../assets/image1.png";


const cards = [
    {
      image: image,
      title: "Strategic Bandwidth",
      description: "Get strategic direction for teams overwhelmed with daily operations",
    },
    {
      image: image,
      title: "Diverse, Proven Expertise",
      description: "Leverage expertise across strategy, content, digital, analytics - honed at top enterprises and high-growth startups",
    },
    {
      image: image,
      title: "Seasoned Talent",
      description: "Startups, small businesses, or companies with marketing budget constraints can access senior-level marketing expertise",
    },
    {
      image: image,
      title: "MarTech Processes",
      description: "Build seamless, organic and MarTech automations to track and achieve fastest return on investment in marketing",
    },
    {
      image: image,
      title: "Analytics and Reports",
      description: "Key Metrics and data based decision making seamless across collaborating teams. All pointing to your true north star",
    },
    {
      image: image,
      title: "North-Star Focused Guidance",
      description: "Relevant growth-focused solutions & guidance for your team at high-growth startups",
    },
  ];
  
  export default function Cards() {
    return (
      <div className="grid grid-cols-3 gap-8 mx-16 mt-5 ">
        {cards.map((card, index) => (
          <div key={index} className="flex   hover:shadow-lg transition-shadow duration-300 ">
            <img src={card.image} alt={card.title} className=" h-32 w-32 rounded-t-lg" />
            <div className="p-4">
              <h3 className="font-bold  mb-2 tracking-wide">{card.title}</h3>
              <p className="text-gray-600 tracking-wide">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  