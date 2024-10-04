const initialState = {
    temp: 0,
    icon: "Clear",
    feelslike: 0,
    maxtemp: 1,
    mintemp: 0
}
export const currentDayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("@currentDay/getWeather"):
            console.log(action.payload)
            return {
                temp: action.payload.temp,
                icon: action.payload.icon,
                feelslike: action.payload.feelsLike,
            };
        case ("@curentDay/getMax_minTemp"):
            return [...state, action.payload];

        default:
            return state
    }

}
