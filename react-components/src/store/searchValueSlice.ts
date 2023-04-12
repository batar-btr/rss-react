import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchValue {
  value: string;
}

const initialState: SearchValue = {
  value: '',
};

export const searchValueSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchValue } = searchValueSlice.actions;
export default searchValueSlice.reducer;
