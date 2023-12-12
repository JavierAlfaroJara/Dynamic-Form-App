import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  fields: any[]; // Update the type based on your field structure
  collectedData: any[]; // Stores the collected data from the form
}

const initialState: FormState = {
  fields: [],
  collectedData: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFields: (state, action: PayloadAction<any[]>) => {
      state.fields = action.payload;
    },
    submitForm: (state, action: PayloadAction<any[]>) => {
      state.collectedData = action.payload;
    },
  },
});

export const { setFields, submitForm } = formSlice.actions;

export default formSlice.reducer;