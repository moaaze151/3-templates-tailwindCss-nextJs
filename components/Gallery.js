import Heading from "./Heading";
import Border from "./Border"
import Image from "next/image";
import CardItem from "../card.json";

export default function Gallery() {
  return (
    <div id="gallery" className="sec-bg py-16 relative overflow-x-clip">
      <Border/>
      <div className="cus-container">
        <Heading title="GALLERY" />
        <div className="gallery">
          {CardItem[1].gallery.map((e) => (
            <div key={e.id} className="gallery-img">
              <Image
                src={`/${e.src}`}
                width="700px"
                height="700px"
                alt="error"
                className="image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
