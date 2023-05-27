import Web3 from "web3";
import NFTMarketplace from "../contracts/dist/NFTMarketplace.json";
import useWallet from "./use-wallet";

const web3 = new Web3(process.env.REACT_APP_NODE_API ?? "");
const contract = new web3.eth.Contract(
  // @ts-ignore
  NFTMarketplace.abi,
  process.env.REACT_APP_CONTRACT_ADDRESS
);

export interface UseContractInterface {
  mint: () => Promise<void>;
}

const useContract = (): UseContractInterface => {
  const { wallet } = useWallet();

  const mint = async () => {
    const result = await contract.methods.mint().call({ from: wallet.address });
    console.log(result);
    return result;
  };

  return {
    mint,
  };
};

export default useContract;
