require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
   
    },
    goerli: {
      url: "https://goerli.infura.io/v3/4f45eb87abd64cde96c9f3e54487f8e4",
      accounts:
        [process.env.PRIVATE_KEY],
    },
  }
};
