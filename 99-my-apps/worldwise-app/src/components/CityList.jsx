import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../hooks/useCities";

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  return (
    <>
      {cities ? (
        <ul className={styles.cityList}>
          {cities.map((city) => (
            <CityItem city={city} key={city.id} />
          ))}
        </ul>
      ) : (
        <>Cities not loaded</>
      )}
    </>
  );
}

export default CityList;
