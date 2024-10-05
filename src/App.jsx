import { useDispatch, useSelector } from "react-redux";
import services from "./services.js";
import clear_day from "./clear-day.svg";
import precip from "./precip.svg";
import { useEffect, useState } from "react";
function App() {
  const [city, setCity] = useState("Argentina");
  const [search, setSearch] = useState("");
  const [showedCity, setshowedCity] = useState("Argentina");
  const todayToString = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const currentDay = useSelector((state) => state.currentDay);
  const nextDays = useSelector((state) => state.nextDays);
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  useEffect(() => {
    services.getWeather(city).then((res) => {
      const allDays = [];
      // console.log(res);
      setshowedCity(res.resolvedAddress);
      dispatch({ type: "@currentDay/getWeather", payload: res.currentConditions });
      res.days.forEach((day, index) => {
        if (index < 7) {
          if (day.datetime && day.datetime === todayToString) {
            dispatch({
              type: "@currentDay/getMax_tempmin",
              payload: { tempmin: Math.round(day.tempmin, 0), tempmax: Math.round(day.tempmax, 0) },
            });
          }
          allDays.push({
            ...{
              datetime: day.datetime,
              temp: day.temp,
              icon: day.icon,
              precipprob: Math.round(day.precipprob),
              tempmin: Math.round(day.tempmin, 0),
              tempmax: Math.round(day.tempmax, 0),
            },
          });
        }
      });
      dispatch({
        type: "@nextDays/getWeather",
        payload: allDays,
      });
    });
  }, [city]);
  function getWeekDay(day) {
    const date = new Date(day);
    return week[date.getDay()];
  }
  function formSubmit(e) {
    e.preventDefault();
    setCity(search.charAt(0).toUpperCase() + search.slice(1));
    setSearch("");
  }
  return (
    <div className="lg:h-full lg:flex lg:flex-col ">
      <section className="bg-black bg-opacity-40 max-w-fit rounded-lg p-2 px-3 mx-auto mt-20">
        <img
          src=""
          alt=""
        />
        <form
          onSubmit={formSubmit}
          className=""
        >
          <input
            className="text-xl text-white bg-transparent text-left lg:ml-20 lg:w-60"
            placeholder="Search a city"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </section>
      <main className="lg:flex lg:flex-row lg:w-3/4 lg:mx-auto lg:my-5 lg:bg-black lg:bg-opacity-30 lg:rounded-2xl lg:p-2 lg:px-3  lg:justify-between">
        <section className=" w-4/5 rounded-lg p-2 px-5 mx-auto mt-5 lg:mb-10 lg:w-1/2 lg:mr-8">
          <section className="">
            <div className="flex flex-row">
              <img
                src=""
                alt=""
              />
              <p className="text-white text-2xl lg:text-4xl lg:max-h-12 lg:min-h-12">
                {showedCity}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center lg:ml-12 lg:w-2/3 lg:mt-10">
              <p className="text-white text-7xl font-bold lg:text-8xl ">{currentDay.temp}°</p>
              <img
                src={clear_day}
                alt=""
                className="w-24 lg:w-28 lg:ml-10 "
              />
            </div>

            <p className="text-white text-lg mt-3 lg:ml-12 lg:text-2xl">
              {currentDay.tempmax}° / {currentDay.tempmin}° Feels like {currentDay.feelslike}°
            </p>
          </section>
        </section>
        <section className="bg-black bg-opacity-30 w-11/12 rounded-lg p-2 px-3 mx-auto mt-5 lg:mb-5 lg:w-1/2 lg:ml-24 lg:mr-5 ">
          <h3 className=" text-white text-lg">Next days</h3>

          {nextDays.map((day) => (
            <div
              className="mx-3 text-white flex flex-row justify-between items-center"
              key={day.day}
            >
              <p className="min-w-20">
                {day.datetime === todayToString ? "Today" : getWeekDay(day.datetime)}
              </p>
              <div className="flex flex-row justify-start w-1/6 ">
                <img
                  src={precip}
                  alt=""
                  className=" min-w-12 max-w-12"
                />
                <p className="text-xs  flex flex-row items-center">{day.precipprob}%</p>
              </div>
              <img
                src={clear_day}
                alt=""
                className="w-8 justify-center ml-6"
              />
              <div className="flex flex-row  w-1/5">
                <p className="w-3/5 text-end pr-2">{day.tempmax}°</p>
                <p className="w-3/5 text-end ">{day.tempmin}°</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
