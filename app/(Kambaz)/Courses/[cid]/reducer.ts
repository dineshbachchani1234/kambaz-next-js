/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { courses } from "../../Database";
const initialState = {
 courses: courses,
};
const coursesSlice = createSlice({
 name: "courses",
 initialState,
 reducers: {
  addNewCourse: (state, { payload: course }) => {
    console.log("addNewCourse reducer called with:", course);
    const newCourse = { ...course, _id: uuidv4() };
    console.log("New course created:", newCourse);
    state.courses = [...state.courses, newCourse] as any;
    console.log("State courses after add:", state.courses);
  },
   deleteCourse: (state, { payload: courseId }) => {
     state.courses = state.courses.filter(
       (course: any) => course._id !== courseId
     );
   },
   updateCourse: (state, { payload: course }) => {
     state.courses = state.courses.map((c: any) =>
       c._id === course._id ? course : c
     ) as any;
   },
 },
});
export const { addNewCourse, deleteCourse, updateCourse } =
 coursesSlice.actions;
export default coursesSlice.reducer;