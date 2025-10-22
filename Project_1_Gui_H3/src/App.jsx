import holdup from "/holdup.jpg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Card from "./components/Card/Card";
import GridContainer from "./components/GridContainer/GridContainer";

function App() {
  const cards = Array.from({ length: 9 }, (_, i) => ({
    title: `Produkt ${i + 1}`,
    image: `https://picsum.photos/200?random=${i + 1}`,
    price: `${(Math.random() * 500 + 50).toFixed(0)} kr`,
    description: "Et fedt produkt du bare må eje!",
    buttonText: "Køb nu",
  }));

  return (
    <>
      <Header name="Casper Simon Jensen" />

      <InfoCard
        hobbyOne="Gaming"
        hobbyTwo="Gå tur med hunde"
        hobbyThree="... jeg er kedelig XD"
        imageSrc={holdup}
      />

      {}
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

      <Footer age="21" />
    </>
  );
}

export default App;
