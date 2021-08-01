// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

contract GravityHash {

   bytes32[] public allWishes;

   event WishMade(bytes32 wish); 
   event DrainWishes();

   function hashWish(bytes32 _wish) public {
     allWishes.push(_wish);
     emit WishMade(_wish);
   }

   function drainWishes() public {
     emit DrainWishes();
   }

   function getWishes() public view returns(bytes32[] memory _userWishes) {
      _userWishes = allWishes;
   }

  }