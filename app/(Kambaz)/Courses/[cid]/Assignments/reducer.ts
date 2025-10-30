/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        ...action.payload,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id !== action.payload
      );
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === action.payload._id ? action.payload : assignment
      ) as any;
    },
    setAssignment: (state, action) => {
      state.assignments = action.payload;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, setAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;