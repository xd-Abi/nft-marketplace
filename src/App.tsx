import React from "react";
import AppHeader from "./blocks/header";
import useContract from "./hooks/use-contract";

function App() {
  const { mint } = useContract();

  return (
    <div>
      <AppHeader />
      <button
        className="mt-20 flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm border border-white hover:bg-transparent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        onClick={() => mint()}
      >
        MINT
      </button>
    </div>
  );
}

export default App;
