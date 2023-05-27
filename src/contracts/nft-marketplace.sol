// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract NFTMarketplace {

    mapping (address => string) nfts;
    uint counter = 1;

    function mint() public returns (address) {
        nfts[msg.sender] = string(abi.encode("http://fyndit.io/nfts", counter, ".png"));
        counter++;
        return msg.sender;
    }
}