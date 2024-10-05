import pin_icon from "../pin-icon.svg";
import { useSelector } from "react-redux";
import { svgUrl } from "../functions/svgUrl.js";

export function CurrentWeather({ showedCity }) {
  const currentDay = useSelector((state) => state.currentDay);

  return (
    <section className=" w-4/5 rounded-lg p-2 px-5 mx-auto mt-5 xl:mb-10 xl:w-1/2 xl:mr-8">
      <section className="">
        <div className="flex flex-row items-center">
          <img
            src={pin_icon}
            alt="pin icon"
            className=" h-12 p-2 mb-2"
          />
          <p className="text-white text-2xl xl:text-4xl xl:max-h-12 xl:min-h-12">{showedCity}</p>
        </div>
        <div className="flex flex-row justify-between items-center xl:ml-12 xl:w-2/3 xl:mt-10">
          <p className="text-white text-7xl font-bold xl:text-8xl ">{currentDay.temp}°</p>
          <img
            src={svgUrl(currentDay.icon)}
            alt=""
            className="w-24 xl:w-28 xl:ml-10 "
          />
        </div>

        <p className="text-white text-lg mt-3 xl:ml-12 xl:text-2xl">
          {currentDay.tempmax}° / {currentDay.tempmin}° Feels like {currentDay.feelslike}°
        </p>
      </section>
    </section>
  );
}
