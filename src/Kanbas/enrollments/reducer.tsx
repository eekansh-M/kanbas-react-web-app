import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments as enrollmentsData } from "../Database";


type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

type EnrollmentPayload = {
  user: string;
  course: string;
};

const initialState = {
  enrollments: enrollmentsData as Enrollment[],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action: PayloadAction<EnrollmentPayload>) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.user,
        course: action.payload.course,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenroll: (state, action: PayloadAction<EnrollmentPayload>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(
            enrollment.user === action.payload.user &&
            enrollment.course === action.payload.course
          )
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;