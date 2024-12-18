import { HardhatUserConfig } from "hardhat/config";
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.19", // solidity version
  defaultNetwork: "mantleSepolia", // chosen by default when network isn't specified while running Hardhat
  networks: {
    mantle: {
      url: "https://rpc.mantle.xyz", //mainnet
      accounts: [process.env.ACCOUNT_PRIVATE_KEY ?? ""],
    },
    mantleSepolia: {
      url: "https://rpc.sepolia.mantle.xyz", // Sepolia Testnet
      accounts: [process.env.ACCOUNT_PRIVATE_KEY ?? ""],
    },
  },
};

export default config;