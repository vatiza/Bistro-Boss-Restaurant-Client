import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import CardInItems from "./CardInItems";

const Card = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const topSalads = data.filter((salads) => salads.category === "salad");
        const cardsSlice = topSalads.slice(0, 3);
        setCards(cardsSlice);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"---Should Try---"}
        subHeading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-3">
        {cards.map((items) => (
          <CardInItems key={items._id} items={items}></CardInItems>
        ))}
      </div>
    </section>
  );
};

export default Card;
