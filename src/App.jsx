import { useDispatch } from "react-redux";
import { SearchBar } from "./components/searchBar.jsx";
import { CurrentWeather } from "./components/currentWeather.jsx";
import { useEffect, useState } from "react";
import { NextDays } from "./components/nextDays.jsx";
import { getWeather } from "./functions/getWeather.js";
function App() {
  const [city, setCity] = useState("Argentina");
  const [search, setSearch] = useState("");
  const [showedCity, setshowedCity] = useState("Argentina");
  const todayToString = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();

  useEffect(() => {
    getWeather(city, setshowedCity, todayToString, dispatch);
  }, [city]);

  return (
    <div className="xl:h-full xl:flex xl:flex-col ">
      <SearchBar
        setCity={setCity}
        search={search}
        setSearch={setSearch}
      />
      <main className="xl:flex xl:flex-row xl:w-3/4 xl:mx-auto xl:my-5 xl:bg-black xl:bg-opacity-30 xl:rounded-2xl xl:p-2 xl:px-3  xl:justify-between">
        <CurrentWeather showedCity={showedCity} />
        <NextDays todayToString={todayToString} />
      </main>
    </div>
  );
}

export default App;
