import services from "../services.js";

export function getWeather(city, setshowedCity, todayToString, dispatch) {
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
}