import "../App.css";
import PropTypes from "prop-types";
import Star from "../assets/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = "ON-SITE";
  }
  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.image} alt='Athlete' className='card--image' />
      <div className='card--stats'>
        <img src={Star} alt='star' className='card--star' />
        <span>{props.rating}</span>
        <span className='card--light'>({props.reviewCount}) •</span>
        <span className='card--light'>{props.location}</span>
      </div>
      <h2>{props.title}</h2>
      <p className='card--price'>
        <span className='card--bold'>From ${props.price}</span> / person
      </p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  star: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  reviewCount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  openSpots: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
