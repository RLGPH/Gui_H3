import React from "react";
import holdup from "../../public/holdup.jpg";
import InfoCard from "../components/InfoCard/InfoCard";
import GridContainer from "../components/GridContainer/GridContainer";
import Card from "../components/Card/Card";

const InfoCardPage = () => {
  const cards = Array.from({ length: 9 }, () => ({
    title: "Something",
    image: holdup,
    price: `${(Math.random() * 500 + 50).toFixed(0)} kr`,
    description: "Why",
    buttonText: "Køb nu",
  }));

  return (
    <div>
      <InfoCard
        hobbyOne="Gaming"
        hobbyTwo="Gå tur med hunde"
        hobbyThree="... jeg er kedelig XD"
        imageSrc={holdup}
      />
      <GridContainer>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            price={card.price}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default InfoCardPage;
