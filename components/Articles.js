import Card from "./Card";
import Heading from "./Heading";
import CardItem from "../card.json";
export default function Articles() {
  console.log(CardItem);
  return (
    <div id="articles" className="px-2 py-16">
      <div className="cus-container flex flex-col items-center">
        <Heading title="ARTICLES" />
        <div className="mt-8 flex flex-wrap justify-center sm:justify-between">
          {CardItem.map((e) => (
            <Card key={e.id} text={e.text} title={e.title} src={e.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
