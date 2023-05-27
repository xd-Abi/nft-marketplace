import { useSelector as useNativeSelector } from "react-redux";
import { GlobalStoreType } from "../data/global";

const useSelector = (select: (state: GlobalStoreType) => object) => {
  const nativeDispatch = useNativeSelector(select);
  return nativeDispatch;
};

export default useSelector;
