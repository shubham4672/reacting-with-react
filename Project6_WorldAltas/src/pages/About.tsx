import countriesData from "../api/countriesData.json";
import Card from "../components/ui/Card";

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className='container-title'>
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className='gradient-cards'>
        {countriesData.map((countryData) => (
          <Card key={countryData.id} country={countryData} />
        ))}
      </div>
    </section>
  );
};

export default About;
