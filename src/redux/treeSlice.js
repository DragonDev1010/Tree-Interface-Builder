import { createSlice } from "@reduxjs/toolkit";
import {treeObjectTestData} from '../test/controlTree.data'
import { movingUp, movingDown } from "../interfaceBuilderTree/functions/controlJsonTree";

export const treeSlice = createSlice({
  name: 'tree',
  initialState: treeObjectTestData,
  reducers: {
    moveUp: (state, action) => {
      movingUp(state, action.payload)
    },

    moveDown: (state, action) => {
      movingDown(state, action.payload)
    },

    moveRight: (state) => {

    },

    moveLeft: (state) => {

    }
  }
})


export const {moveUp, moveDown, moveRight, moveLeft} = treeSlice.actions
export default treeSlice.reducer