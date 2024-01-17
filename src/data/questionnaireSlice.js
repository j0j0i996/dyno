// questionnaireSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const questionnaireSlice = createSlice({
    name: 'questionnaire',
    initialState: {
      selectedTarif: null,
      selectedDevices: [],
      postalCode: null,
      consumption: null,
      
    },
    reducers: {
      setPersistSelectedTarif: (state, action) => {
        state.selectedTarif = action.payload;
      },
      setPersistSelectedDevices: (state, action) => {
        state.selectedDevices = action.payload;
      },
      setPersistPostalCode: (state, action) => {
        state.postalCode = action.payload;
      },
      setPersistConsumption: (state, action) => {
        state.consumption = action.payload;
      },
      
    },
  });
  
  // Export the actions
  export const {
    setPersistSelectedTarif,
    setPersistSelectedDevices,
    setPersistPostalCode,
    setPersistConsumption
  } = questionnaireSlice.actions;
  
  // Export the reducer
  export default questionnaireSlice.reducer;