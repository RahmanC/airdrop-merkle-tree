// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleAirdrop {
    address public token;
    bytes32 public merkleRoot;
    mapping(address => bool) public claimed;

    event AirdropClaimed(address indexed claimer, uint256 amount);
    event MerkleRootUpdated(bytes32 newMerkleRoot);

    constructor(address _token, bytes32 _merkleRoot) {
        token = _token;
        merkleRoot = _merkleRoot;
    }

    function claim(uint256 amount, bytes32[] calldata merkleProof) external {
        require(!claimed[msg.sender], "Airdrop already claimed.");

        // Compute the leaf node for the sender
        bytes32 node = keccak256(abi.encodePacked(msg.sender, amount));

        // Verify the proof against the Merkle root
        require(MerkleProof.verify(merkleProof, merkleRoot, node), "Invalid merkle proof.");

        // Mark as claimed
        claimed[msg.sender] = true;

        // Transfer the tokens to the claimer
        require(IERC20(token).transfer(msg.sender, amount), "Transfer failed.");

        emit AirdropClaimed(msg.sender, amount);
    }

    function updateMerkleRoot(bytes32 _merkleRoot) external {
        merkleRoot = _merkleRoot;
        emit MerkleRootUpdated(_merkleRoot);
    }

    function withdrawTokens(uint256 amount) external {
        require(IERC20(token).transfer(msg.sender, amount), "Withdraw failed.");
    }
}
