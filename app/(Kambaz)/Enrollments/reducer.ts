/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollUserInCourse: (state, action) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.user,
        course: action.payload.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollUserFromCourse: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          !(enrollment.user === action.payload.user && 
            enrollment.course === action.payload.course)
      );
    },
  },
});

export const { enrollUserInCourse, unenrollUserFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;