import precip from "../precip.svg";
import { useSelector } from "react-redux";
import { svgUrl } from "../functions/svgUrl.js";
export function NextDays({ todayToString }) {
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const nextDays = useSelector((state) => state.nextDays);
  function getWeekDay(day) {
    const date = new Date(day);
    return week[date.getDay()];
  }
  return (
    <section className="bg-black bg-opacity-30 w-11/12 rounded-lg p-2 px-3 mx-auto mt-5 xl:mb-5 xl:w-1/2 xl:ml-24 xl:mr-5 ">
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
            src={svgUrl(day.icon)}
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
  );
}
