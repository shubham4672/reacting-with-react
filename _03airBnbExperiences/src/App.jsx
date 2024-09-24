import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./components/Data";
import "./App.css";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        openSpots={item.openSpots}
        image={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <div className='card--section'>{cards}</div>
    </>
  );
}

export default App;
