import { useDispatch as useNativeDispatch } from "react-redux";
import { GlobalStoreDispatchType } from "../data/global";

const useDispatch = () => {
  const nativeDispatch = useNativeDispatch<GlobalStoreDispatchType>();
  return nativeDispatch;
};

export default useDispatch;
