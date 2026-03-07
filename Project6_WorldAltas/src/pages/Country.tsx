import { useQuery } from "@tanstack/react-query";
import { getCountryData } from "../api/postApi";
import Loader from "../components/ui/Loader";
import CountryCard from "../components/ui/CountryCard";

const Country = () => {
  const { data, isPending } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountryData,
  });

  if (isPending) {
    return <Loader />;
  }
  
  return (
    <section className='country-section'>
      <ul className='grid grid-four-cols'>
        {data?.data?.map((currCountry, index: number) => (
          <CountryCard key={index} country={currCountry} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
