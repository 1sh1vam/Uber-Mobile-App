import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
}

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin(state, action) {
            state.origin = action.payload
        },
        setDestination(state, action) {
            state.destination = action.payload
        },
        setTravelTimeInfo(state, action) {
            state.travelTimeInfo = action.payload
        },
    }
});

export const { setDestination, setOrigin, setTravelTimeInfo } = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;

export const selectDestination = (state) => state.nav.destination;

export default navSlice.reducer;