import { createSlice } from '@reduxjs/toolkit';

const categoryFilterSlice = createSlice({
  name: 'categoryFilter',
  initialState: {
    categories: [],
  },
  reducers: {
    addCategoryToList(state, action) {
        state.categories.push(action.payload);
    },
    removeCategoryFromList(state, action) {
        state.categories = state.categories.filter((item) => item !== action.payload);
    },
  },
});

export default categoryFilterSlice;