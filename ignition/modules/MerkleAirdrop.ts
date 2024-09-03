import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const { ethers } = require("ethers");

const tokenAddress = "0x860fE8cF02690ED3a0385BEb3eF7f215281f9628";
const merkleRoot = ethers.utils.hexlify(
  ethers.utils.arrayify(
    "0x389f5fc3d79eacc4e22b55e5b1cf0aa60f198b17aecdd4b9045090f5c37f9e7d"
  )
);

const MerkleAirdropModule = buildModule("MerkleAirdropModule", (m) => {
  const airdrop = m.contract("MerkleAirdrop", [tokenAddress, merkleRoot]);

  return { airdrop };
});

export default MerkleAirdropModule;
