import { configureStore } from "@reduxjs/toolkit";
import treeReducer from "./treeSlice";
import counterReducer from "./counterSlice";

export default configureStore({
  reducer: {
    tree: treeReducer,
    counter: counterReducer
  },
})