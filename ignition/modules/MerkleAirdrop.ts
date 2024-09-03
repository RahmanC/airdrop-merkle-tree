import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const { ethers } = require("ethers");

const token = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const merkleRoot = ethers.utils.hexlify(
  ethers.utils.arrayify(
    "0x389f5fc3d79eacc4e22b55e5b1cf0aa60f198b17aecdd4b9045090f5c37f9e7d"
  )
);

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const airdrop = m.contract("MerkleAirdrop", [token, merkleRoot]);

  return { airdrop };
});

export default MerkleAirdropModule;
