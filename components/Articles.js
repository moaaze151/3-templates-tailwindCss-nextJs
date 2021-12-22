import Card from "./Card";
import Heading from "./Heading";
import CardItem from "../card.json";
export default function Articles() {
  return (
    <div id="articles" className="py-16">
      <div className="cus-container">
        <Heading title="ARTICLES" />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CardItem[0].articles.map((e) => (
            <Card key={e.id} text={e.text} title={e.title} src={e.src} />
          ))}
        </div>
      </div>
    </div>
  );
}
