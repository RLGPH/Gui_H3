import holdup from "/holdup.jpg";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InfoCard from "./components/InfoCard/InfoCard";
import Card from "./components/Card/Card";
import GridContainer from "./components/GridContainer/GridContainer";
import Counter from "./components/Counter/Counter"; // <-- Importér Counter

function App() {
  const cards = Array.from({ length: 9 }, () => ({
    title: "Something",
    image: holdup,
    price: `${(Math.random() * 500 + 50).toFixed(0)} kr`,
    description: "Why",
    buttonText: "Køb nu",
  }));
  
  return (
    <div>
      <Header name="Casper Simon Jensen" />

      <InfoCard
        hobbyOne="Gaming"
        hobbyTwo="Gå tur med hunde"
        hobbyThree="... jeg er kedelig XD"
        imageSrc={holdup}
      />

      <Counter /> {}

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
    </div>
  );
}

export default App;
