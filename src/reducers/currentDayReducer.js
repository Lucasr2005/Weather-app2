const initialState = {
    temp: 0,
    icon: "Clear",
    feelslike: 0,
    tempmax: 1,
    tempmin: 0
}
export const currentDayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("@currentDay/getWeather"):
            return {
                temp: Math.round(action.payload.temp),
                icon: action.payload.icon,
                feelslike: Math.round(action.payload.feelslike),
            };
        case ("@currentDay/getMax_tempmin"):
            return { ...state, tempmax: action.payload.tempmax, tempmin: action.payload.tempmin };

        default:
            return state
    }

}
