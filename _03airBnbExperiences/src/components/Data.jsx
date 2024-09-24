import Katie from "../assets/katie-zaferes.png";
import Women from "../assets/wedding-photography.png";
import Bike from "../assets/mountain-bike.png";
import Family from "../assets/family (2).jpg";
import Time from "../assets/mood.jpg";

export default [
  {
    id: 1,
    coverImg: Katie,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: "Online",
    title: "Life Lessons with Katie Zaferes",
    price: 136,
    openSpots: 0,
  },
  {
    id: 2,
    coverImg: Women,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Online",
    title: "Learn Wedding Photography",
    price: 125,
    openSpots: 10,
  },
  {
    id: 3,
    coverImg: Bike,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: "Norway",
    title: "Group Mountain Biking",
    price: 50,
    openSpots: 20,
  },
  {
    id: 4,
    coverImg: Family,
    stats: {
      rating: 4.7,
      reviewCount: 15,
    },
    location: "Online",
    title: "Trakking guide",
    price: 99,
    openSpots: 30,
  },
  {
    id: 5,
    coverImg: Time,
    stats: {
      rating: 4.9,
      reviewCount: 20,
    },
    location: "Switzerland",
    title: "Spend Great Time",
    price: 30,
    openSpots: 50,
  },
];
