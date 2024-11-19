import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsSlice from "./contactsSlices";
import filtersSlice from "./filtersSlices";

const contactsPersistConfig = {
  key: 'contacts',
  storage,
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersSlice.reducer,
  },
});

export const persistor = persistStore(store);