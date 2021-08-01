// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

contract GravityHash {

   mapping(address => bytes32[]) private userWishes;
   bytes32[] public allWishes;

   event WishMade(bytes32 wish); 
   event DrainWishes();
   event AllWishes(bytes32[] allWishes);

   function hashWish(bytes32 _wish) public {
     userWishes[msg.sender].push(_wish);
     allWishes.push(_wish);
     emit WishMade(_wish);
   }

   function drainWishes() public {
     emit DrainWishes();
   }

   function getWishes() public returns(bytes32[] memory _userWishes) {
      _userWishes = allWishes;
      emit AllWishes(_userWishes);
   }

   function getMyWishes() public view returns(bytes32[] memory _myWishes) {
      _myWishes = userWishes[msg.sender];
   }

  }