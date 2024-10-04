import { useDispatch, useSelector } from "react-redux";
import services from "./services.js";
import clear_day from "./clear-day.svg";
import precip from "./precip.svg";
function App() {
  const todayToString = new Date().toISOString().slice(0, 10);
  const dispatch = useDispatch();
  const currentDay = useSelector((state) => state.currentDay);
  const nextDays = useSelector((state) => state.nextDays);
  // services.getWeather("Chile").then((res) => {
  //   const allDays = [];
  //   dispatch({ type: "@currentDay/getWeather", payload: res.currentConditions });
  //   res.days.forEach((day) => {
  //     if (day.datetime && day.datetime === todayToString) {
  //       dispatch({
  //         type: "@currentDay/getMax_minTemp",
  //         payload: { mintemp: day.mintemp, maxtemp: day.maxtemp },
  //       });
  //     }
  //     allDays.push({
  //       ...{
  //         datetime: day.datetime,
  //         temp: day.temp,
  //         icon: day.icon,
  //         precip: day.precip,
  //         mintemp: day.mintemp,
  //         maxtemp: day.maxtemp,
  //       },
  //     });
  //   });
  //   dispatch({
  //     type: "@currentDay/getWeather",
  //     payload: allDays,
  //   });
  // });
  return (
    <>
      <section className="bg-black bg-opacity-40 max-w-fit rounded-lg p-2 px-3 mx-auto mt-20">
        <img
          src=""
          alt=""
        />
        <input
          className="text-xl text-white bg-transparent text-center"
          placeholder="Search a city"
        />
      </section>
      <main>
        <section className=" w-4/5 rounded-lg p-2 px-5 mx-auto mt-10">
          <section className="">
            <div className="flex flex-row">
              <img
                src=""
                alt=""
              />
              <p className="text-white">Ciudad Jardin</p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-white text-6xl font-bold">{currentDay.temp}°</p>
              <img
                src={clear_day}
                alt=""
                className="w-24"
              />
            </div>
            <div>
              <p className="text-white">
                {currentDay.maxtemp}° / {currentDay.mintemp}° Feels like {currentDay.feelslike}°
              </p>
            </div>
          </section>
        </section>
        <section className="bg-black bg-opacity-30 w-5/6 rounded-lg p-2 px-3 mx-auto mt-10">
          <h3 className=" text-white text-lg">Next days</h3>

          {nextDays.map((day) => (
            <div
              className="mx-3 text-white flex flex-row justify-between items-center"
              key={day.day}
            >
              <p className="min-w-20">{day.datetime === todayToString ? "Today" : day.datetime}</p>
              <div className="flex flex-row justify-start w-1/6 ">
                <img
                  src={precip}
                  alt=""
                  className=" min-w-12 max-w-12"
                />
                <p className="text-xs  flex flex-row items-center">{day.precip}%</p>
              </div>
              <img
                src={clear_day}
                alt=""
                className="w-8 justify-center ml-6"
              />
              <div className="flex flex-row  w-1/5">
                <p className="w-3/5 text-end pr-2">{day.maxtemp}°</p>
                <p className="w-3/5 text-end ">{day.mintemp}°</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
