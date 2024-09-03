const newFs = require("fs");

const { ethers } = require("ethers");

// Number of test addresses to generate
const numAddresses = 8;

const csvFile = __dirname + "/csv/airdrop_list.csv";

// CSV header
let csvContent = "address,amount\n";

for (let i = 0; i < numAddresses; i++) {
  // Generate a random wallet
  const wallet = ethers.Wallet.createRandom();

  // Generate a random amount between 100 and 1000
  const amount = Math.floor(Math.random() * 900) + 100;

  // Append the address and amount to the CSV content
  csvContent += `${wallet.address},${amount}\n`;
}

// Write the CSV content to a file
newFs.writeFileSync(csvFile, csvContent);
