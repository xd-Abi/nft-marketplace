// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract NFTMarketplace {

    mapping (address => bytes32) nfts;
    uint counter = 1;

    function mint() public returns (bytes32) {
        nfts[msg.sender] = bytes32(abi.encode("http://fyndit.io/nfts", counter, ".png"));
        counter++;
        return nfts[msg.sender];
    }
}