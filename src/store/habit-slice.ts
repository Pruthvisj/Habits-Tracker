import { createSlice } from "@reduxjs/toolkit";

export interface Habit{
    id: string;
    name: string;
    frequency: "daily" | "weekly";
    completedDates: string[]; //array of completed dates.
    createdAt: string;
}

const initialState = {

}
const habitSlice = createSlice({
    name:"habits",
    initialState
})