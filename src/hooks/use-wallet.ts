import Web3 from "web3";
import useDispatch from "./use-dispatch";
import { WalletInterface, walletConnect } from "../data/wallet";
import useSelector from "./use-selector";

export interface UseWalletInterface {
  connect: () => void;
  wallet: WalletInterface;
}

const useWallet = (): UseWalletInterface => {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

  const connect = async () => {
    const web3 = new Web3(Web3.givenProvider);
    await web3.eth.requestAccounts();
    const network = await web3.eth.net.getNetworkType();
    const accounts = await web3.eth.getAccounts();

    dispatch(walletConnect({ address: accounts[0], network }));
  };

  return {
    connect,
    wallet,
  };
};

export default useWallet;
