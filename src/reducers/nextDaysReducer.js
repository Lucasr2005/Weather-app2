const initialState = [
    {
        datetime: "2024-10-04",
        precip: 0,
        icon: "",
        maxtemp: 0,
        mintemp: 0
    }
]
export const nextDaysReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("@currentDay/getWeather"):
            return [...state, action.payload];

        default:
            return state
    }

}
