pragma solidity ^0.8.0;
//SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./lendpool.sol";

contract mortgagev2 is ReentrancyGuard{

    address payable owner;
    address payable lend_addr;
    lendpool LP;
    
    constructor() {
        owner = payable(msg.sender);
    }
    
    modifier OnlyOwner {
        require(msg.sender == owner, "you are not the owner");
        _;
    }
    
    function setLend_Pool(address payable _lend_addr) external OnlyOwner{
        lend_addr = _lend_addr;
        LP = lendpool(lend_addr);
    }

    struct MortgageItem {
    uint256 tokenId;
    address payable nft_owner;
    uint256 price;
    bool repaid;
    uint time;
    uint deadline;
    }

    event transaction(bool status);

    mapping(uint256 => MortgageItem) private idToMortgageItem;

    event MortgageItemCreated (
    uint256 indexed tokenId,
    address payable nft_owner,
    uint256 price,
    uint time
    );

    event MortgageRepaid (
    uint256 indexed tokenId,
    address payable nft_owner,
    bool repaid,
    uint duration
    );
    
    function borrow(IERC721 _nft, uint256 _tokenID, uint256 nft_price) external nonReentrant{
        // require(nft_price > 0);
        if(lend_addr.balance >= (nft_price)){

            idToMortgageItem[_tokenID] = MortgageItem(_tokenID, payable(msg.sender), nft_price, false, block.timestamp, (block.timestamp + (30*86400)));
            LP.sendCrypto(((70*idToMortgageItem[_tokenID].price)/100), idToMortgageItem[_tokenID].nft_owner);
            emit MortgageItemCreated(_tokenID, payable(msg.sender), nft_price, block.timestamp);
            emit transaction(true);
        }else{
            _nft.safeTransferFrom(address(this), payable(msg.sender), _tokenID);
            emit transaction(false);
        }
    }
    
    function repay(IERC721 _nft, uint _tokenID) external payable nonReentrant{
        MortgageItem storage Nft = idToMortgageItem[_tokenID];
        require(Nft.nft_owner == payable(msg.sender), "not owner");
        if(Nft.deadline >= block.timestamp){
        require(msg.value == (90*Nft.price)/100);

        Nft.repaid = true;
        payable(lend_addr).transfer((80*Nft.price)/100);
        payable(owner).transfer(address(this).balance);
        _nft.safeTransferFrom(address(this), payable(msg.sender), _tokenID);
        emit MortgageRepaid(_tokenID, payable(msg.sender), true, (block.timestamp - idToMortgageItem[_tokenID].time));
        }
        else{
            _nft.transferFrom(address(this), owner, _tokenID);
            Nft.nft_owner = owner;
            payable(msg.sender).transfer(msg.value);
            emit MortgageRepaid(_tokenID, payable(msg.sender), false, 0);
        }
    }
    
/******************************  Testing Purpose ******************************/
  /*  function error(IERC721 _nft, uint _tokenID) external nonReentrant{
        _nft.safeTransferFrom(address(this), payable(msg.sender), _tokenID);
    }
    function testlp(uint amount, address payable _user)external {
        LP.sendCrypto(amount, _user);
    }
    function getmatic() external OnlyOwner{
        owner.transfer(address(this).balance);
    }  */

}
