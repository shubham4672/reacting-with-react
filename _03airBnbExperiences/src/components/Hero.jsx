import "../App.css";
import Gallery from "../assets/photo-grid.png";

export default function Hero() {
  return (
    <div className='section'>
      <section>
        <img src={Gallery} alt='Photo gallery' className='photo--gallery' />
        <div className='info'>
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts-all
            without leaving home.
          </p>
        </div>
      </section>
    </div>
  );
}
