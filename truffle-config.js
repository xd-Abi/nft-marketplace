module.exports = {
  contracts_directory: "./src/contracts",
  contracts_build_directory: "./src/contracts/dist",
  compilers: {
    solc: {
      version: "0.8.10",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
