import { createSlice } from "@reduxjs/toolkit";
import {treeObjectTestData} from '../test/controlTree.data'
import {
  movingUp,
  movingDown,
  movingLeft,
  movingRight,
  creatingChild,
  deletingChild
} from "../interfaceBuilderTree/functions/controlJsonTree";
export const treeSlice = createSlice({
  name: 'tree',
  initialState: null,
  reducers: {
    loadData: (state, action) => {
      return action.payload
    },

    moveUp: (state, action) => {
      movingUp(state, action.payload)
    },

    moveDown: (state, action) => {
      movingDown(state, action.payload)
    },

    moveRight: (state, action) => {
      movingRight(state, action.payload)
    },

    moveLeft: (state, action) => {
      movingLeft(state, action.payload)
    },

    createChild: (state, action) => {
      creatingChild(state, action.payload, { val: 'test data' })
    },

    deleteChild: (state, action) => {
      deletingChild(state, action.payload)
    }
  }
})


export const { loadData, moveUp, moveDown, moveRight, moveLeft, createChild, deleteChild } = treeSlice.actions
export default treeSlice.reducer