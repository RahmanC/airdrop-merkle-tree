# Merkle Airdrop

This project implements a Merkle tree-based airdrop mechanism for token distribution on the Lisk blockchain.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Generate Random Addresses and Amounts](#generate-random-addresses-and-amounts)
  - [Generate Merkle Root](#generate-merkle-root)
  - [Deploy Contract](#deploy-contract)
- [Claiming the Airdrop](#claiming-the-airdrop)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js
- npm or yarn
- Hardhat

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/RahmanC/airdrop-merkle-tree.git
   cd merkle-airdrop
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables:
   ```
   ACCOUNT_PRIVATE_KEY=your_private_key_here
   LISK_RPC_URL=your_lisk_rpc_url_here
   ```

## Usage

### Generate Random Addresses and Amounts

Run the following command to generate random addresses and amounts:

```
node scripts/ethers.ts
```

### Generate Merkle Root

Generate the Merkle root by running:

```
node scripts/merkle.ts
```

### Deploy Contract

1. Obtain the Merkle root from `scripts/files/merkleTree.json`.
2. Update `tokenAddress` and `MerkleRoot` in `MerkleAirdrop.ts` module.
3. Deploy the contract using Hardhat Ignition:
   ```
   npx hardhat ignition deploy ./ignition/modules/MerkleAirdrop.ts --network lisk-sepolia
   ```

## Claiming the Airdrop

To claim your airdrop:

1. Generate your proof using `merkle.ts`.
2. Call the `claim` function in the MerkleAirdrop contract, providing your proof and amount.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

