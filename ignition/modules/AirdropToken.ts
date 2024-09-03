import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AirdropTokenModule = buildModule("AirdropTokenModule", (m) => {
  const token = m.contract("AirdropToken");

  return { token };
});

export default AirdropTokenModule;
