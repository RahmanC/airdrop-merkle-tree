// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AirdropToken is ERC20 {
    address owner;

    constructor() ERC20("Merkle Airdrop Token", "MAT") {
        owner = msg.sender;
        _mint(address(this), 2000000e18);
    }

    modifier checkOwner() {
        require(owner == msg.sender, "permission denied!");
        _;
    }

    function transferFromContract(address _to, uint256 amount) external checkOwner {
        uint bal = balanceOf(address(this));
        assert(bal >= amount);
        _transfer(address(this), _to, amount);
    }

    function mint(uint _amount) external checkOwner {
        _mint(msg.sender, _amount);
    }
}