import Card from "@/components/Card";

export default function HomePage() {
  const cardsData = [
    {
      title: "Title 1",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      linkText: "More Info",
      linkUrl: "#",
    },
    {
      title: "Title 2",
      description:
        "Id eros pellentesque facilisi id mollis faucibus commodo enim.",
      linkText: "More Info",
      linkUrl: "#",
    },
    {
      title: "Title 3",
      description: "Nunc, pellentesque velit malesuada non massa arcu.",
      linkText: "More Info",
      linkUrl: "#",
    },
  ];

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          linkText={card.linkText}
          linkUrl={card.linkUrl}
        />
      ))}
    </div>
  );
}
