import { configureStore } from "@reduxjs/toolkit";
import contactsSlice from "./contactsSlices";
import filtersSlice from "./filtersSlices";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
  },
});