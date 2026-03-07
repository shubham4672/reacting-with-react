import type { FC } from "react";

interface CountryProps {
  id: number;
  countryName: string;
  capital: string;
  population: number | string;
  interestingFact: string;
}

interface CardProps {
    country: CountryProps
}

const Card: FC<CardProps> = ({ country }) => {
  return (
    <div className='card'>
      <div className='container-card bg-blue-box'>
        <p className='card-title'>{country.countryName}</p>
        <p>
          <span className='card-description'>Capital:</span>
          {country.capital}
        </p>
        <p>
          <span className='card-description'>Population:</span>
          {country.population}
        </p>
        <p>
          <span className='card-description'>Interesting Fact:</span>
          {country.interestingFact}
        </p>
      </div>
    </div>
  );
};

export default Card;
