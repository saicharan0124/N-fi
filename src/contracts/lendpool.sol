// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract lendpool is ReentrancyGuard{

    using Counters for Counters.Counter;

    address public owner;
    address payable public Mortage_addr;

    // Minimum of last updated time and interestReward finish time
    uint updatedAt;
    // interestReward to be paid out per second
    uint public interestRewardRate = 500;
    // Sum of (interestReward rate * dt * 1e18 / total supply)
    uint interestRewardPerTokenStored;
    // User address => interestRewardPerTokenStored
    mapping(uint => uint) public userinterestRewardPerTokenPaid;
    // User address => interestRewards to be claimed
    mapping(uint => uint) public interestRewards;
    // Total staked
    uint public totalSupply;
    // User address => staked amount
    mapping(address => uint) public balanceOf;

    struct lends{
        uint Lendid;
        address payable user;
        uint amount;
        uint startTime;
        uint deadline;
    }

    event lending(
        uint Lendid,
        address payable user,
        uint amount,
        uint startTime,
        uint deadline
    );

    event withdraws(
        uint Lendid,
        address payable user,
        uint amount,
        uint time
    );

    event rewardstaken(
        uint Lendid,
        address payable user,
        uint rewardAmount,
        uint time
    );

    event moneySent(
        address payable nft_owner,
        uint price
    );

    Counters.Counter private id;
    mapping(uint => lends) public IDtolends;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner || msg.sender == Mortage_addr, "not authorized");
        _;
    }

    modifier updateinterestReward(address _account, uint _id) {
        interestRewardPerTokenStored = interestRewardPerToken(_id);
        updatedAt = lastTimeinterestRewardApplicable(_id);

        if (_account != address(0)) {
            interestRewards[_id] = earned(_id);
            userinterestRewardPerTokenPaid[_id] = interestRewardPerTokenStored;
        }

        _;
    }

    function setMortage_addr(address payable _Mortage_addr) external onlyOwner{
        Mortage_addr = _Mortage_addr;
    }

    function lastTimeinterestRewardApplicable(uint _id) public view returns (uint) {
        return _min(IDtolends[_id].deadline, block.timestamp);
    }

    function interestRewardPerToken(uint _id) public view returns (uint) {
        if (totalSupply == 0) {
            return interestRewardPerTokenStored;
        }

        return
            interestRewardPerTokenStored +
            (interestRewardRate * (lastTimeinterestRewardApplicable(_id) - updatedAt) * 1e18) /
            totalSupply;
    }

    function lend(uint _days) external payable updateinterestReward(msg.sender, id.current()) nonReentrant{
        require(msg.value > 0, "amount = 0");
        require(_minutes > 0, "minimum duration is 1 minute");

        IDtolends[id.current()] = lends(id.current(), payable(msg.sender), msg.value, block.timestamp, (block.timestamp + (_days*86400)) );

        balanceOf[msg.sender] += msg.value;
        totalSupply += msg.value;

        emit lending(id.current(), payable(msg.sender), msg.value, block.timestamp, (block.timestamp + (_days*86400)) );
        id.increment();
    }

    function withdraw(uint _amount, uint _id) external updateinterestReward(msg.sender, _id) nonReentrant{
        require(_amount > 0, "amount = 0");
        require(IDtolends[_id].user == msg.sender, "not owner of this id");
        require( block.timestamp >= IDtolends[_id].deadline, "duration not completed" );
        require(_amount <= IDtolends[_id].amount, "can't withdraw more than you owe/perID ");

        balanceOf[msg.sender] -= _amount;
        totalSupply -= _amount;
        IDtolends[_id].amount -= _amount;
        payable(msg.sender).transfer(_amount);

        emit withdraws(_id, payable(msg.sender), _amount, block.timestamp );
    }

    function earned(uint _id) public view returns (uint) {
        return
            ((IDtolends[_id].amount *
                (interestRewardPerToken(_id) - userinterestRewardPerTokenPaid[_id])) / 1e18) +
            interestRewards[_id];
    }

    function getinterestReward(uint _id) external updateinterestReward(msg.sender, _id) nonReentrant{
        require(IDtolends[_id].user == msg.sender, "not owner of this id");
        uint interestReward = interestRewards[_id];
        if (interestReward > 0) {
            interestRewards[_id] = 0;
            payable(msg.sender).transfer(interestReward);
        }

        emit rewardstaken(_id, payable(msg.sender), interestReward, block.timestamp);
    }

    function _min(uint x, uint y) private pure returns (uint) {
        return x <= y ? x : y;
    }

    function sendCrypto(uint value, address payable user) external onlyOwner nonReentrant{
        require(address(this).balance > value, "not enough funds");

        payable(user).transfer(value);
        emit moneySent(user, value);
    }

    function setrewardRate(uint rate) external onlyOwner {
        interestRewardRate = rate;
    }
    
/*************************** Testing Purpose ****************************/
   /* function getmaticback() external onlyOwner{
        payable(msg.sender).transfer(address(this).balance);
    }
    function getbalance() external view returns(uint){
        return address(this).balance;
    }
  */

}
