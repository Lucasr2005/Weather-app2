const initialState = [
    {
        datetime: "2024-10-04",
        precipprob: 0,
        icon: "",
        tempmax: 0,
        tempmin: 0
    }
]
export const nextDaysReducer = (state = [], action) => {
    switch (action.type) {
        case ("@nextDays/getWeather"):
            return action.payload;

        default:
            return state
    }

}
