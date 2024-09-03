const fs = require("fs");
const csv = require("csv-parser");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

// Array to store the leaf nodes
let leafNodes: any[] = [];

const file = __dirname + "/csv/airdrop_list.csv";
const output = __dirname + "/files/merkleTree.json";
const rootFile = __dirname + "/files/merkleRoot.json";

// Function to hash each address and amount
function hashEntry(address: string, amount: string) {
  return keccak256(address + amount).toString("hex");
}

// Read the CSV file and generate the leaves
fs.createReadStream(file)
  .pipe(csv())
  .on("data", (row: { address: string; amount: string }) => {
    // For each row, hash the address and amount, then push to leaves
    leafNodes.push(hashEntry(row.address, row.amount));
  })
  .on("end", () => {
    // Create a Merkle tree from the hashed leaves
    const merkleTree = new MerkleTree(leafNodes, keccak256, {
      sortPairs: true,
    });

    // Get the Merkle root
    const root = merkleTree.getRoot().toString("hex");

    const finalJsonData = { ...merkleTree, "Merkle Root": root };

    // tree output
    fs.writeFileSync(output, JSON.stringify(finalJsonData));
  });
