import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssigments: (state, {payload: assignments}) => {
      state.assignments = assignments;
      console.log(state.assignments)
    },
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        _id: assignment._id,
        title: assignment.title,
        course: assignment.course,
        avaliableUntil: assignment.avaliableUntil,
        dueDate: assignment.dueDate,
        avaliableFrom: assignment.avaliableFrom,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentID }) => {
      console.log(assignmentID)
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentID);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? module : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const { setAssigments, addAssignment, deleteAssignment, updateAssignment,  editAssignment } =
assignmentsSlice.actions;
export default assignmentsSlice.reducer;