import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const favSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {
    toggle: (state, valude) => {
      const idx = state.value.indexOf(valude.payload);
      if(idx !== -1) {
        state.value.splice(idx, 1);
      } else {
        state.value.push(valude.payload);
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = favSlice.actions

export default favSlice.reducer
