import { createSlice } from '@reduxjs/toolkit';

const compatibilityListSlice = createSlice({
  name: 'compatibilityList',
  initialState: {
    items: [],
  },
  reducers: {
    replaceList(state, action) {
      state.items = action.payload.items;
    },
    addItemToList(state, action) {
        const newItem = action.payload;
        state.items.push({
            category: newItem.category,
            id: newItem.id,
        });
    },
    removeItemFromList(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if(existingItem){
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export default compatibilityListSlice;