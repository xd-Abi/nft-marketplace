import { configureStore } from "@reduxjs/toolkit";
import { WalletReducer } from "./wallet";

const GlobalStore = configureStore({
  reducer: {
    wallet: WalletReducer,
  },
});

export const getWalletState = () => GlobalStore.getState().wallet;
export type GlobalStoreType = ReturnType<typeof GlobalStore.getState>;
export type GlobalStoreDispatchType = typeof GlobalStore.dispatch;

export default GlobalStore;
