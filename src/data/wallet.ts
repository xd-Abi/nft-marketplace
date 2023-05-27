import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WalletInterface {
  address?: string;
  network?: string;
}

export const WalletSlice = createSlice({
  name: "wallet",
  initialState: {} as WalletInterface,
  reducers: {
    walletConnect: (state, action: PayloadAction<WalletInterface>) => {
      state.address = action.payload.address;
      state.network = action.payload.network;
    },
  },
});

export const WalletReducer = WalletSlice.reducer;
export const { walletConnect } = WalletSlice.actions;
