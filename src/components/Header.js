
import { Link } from 'react-router-dom';
import  { useEffect, useState } from "react";

import '../cssmodule/Header.css';

import {FaCut,FaHandHoldingUsd,FaUserAlt,FaDollarSign,FaBitcoin,FaWallet}  from "react-icons/fa";

import {
    connectWallet,
    getCurrentWalletConnected
    //import here
  } from "../utilities/Interact.js";


const  Header=(props)=>{

    function addWalletListener() {
        if (window.ethereum) {
          window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
              setWallet(accounts[0]);
              setStatus("👆🏽 Write a token_id in ttoken_id-field above.");
            } else {
              setWallet("");
              setStatus("🦊 Connect to Metamask using the top right button.");
            }
          });
        }
      }

      //State variables
      const [walletAddress, setWallet] = useState("");
      const [Status, setStatus] = useState("");
    
     
      const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setStatus(walletResponse.Status);
        setWallet(walletResponse.address);

        localStorage.setItem('owner',walletResponse.address);
      };
    
      useEffect(async () => {
        const { address, status } = await getCurrentWalletConnected();
        setWallet(address)
        setStatus(status);
    
       
      
      addWalletListener();
      }, []);
    
      useEffect(()=>{
        props.waladdhandler(walletAddress);
    
      },[walletAddress])
    
      //console.log(walletAddress);


    return (
    <div class='nav-bar'>

        <Link to='/' style={{ textDecoration: 'none',marginLeft: 0 }}><h3 className='nft-logo'>NFI</h3></Link>

        <Link to='/mortage' style={{ textDecoration: 'none',paddingLeft: 0 }}><button class='btn' ><FaHandHoldingUsd/>&ensp;MORTAGE</button></Link> 
        {/* <Link to='/splitter' style={{ textDecoration: 'none',marginLeft: 0 }}><button class='btn'><FaCut/>  SPLITTER</button></Link> */}
        {/* <Link to='/lendroom' style={{ textDecoration: 'none',marginLeft: 0 }}><button class='btn'><FaCut/>  Room</button></Link> */}
        <Link to='/lendpool' style={{ textDecoration: 'none',paddingLeft: 0 }}><button class='btn' ><FaDollarSign/>&ensp;LENDPOOL</button></Link> 
        <Link to='/pay' style={{ textDecoration: 'none',paddingLeft: 0 }}><button class='btn' ><FaBitcoin/>&ensp;PAY</button></Link> 
        {/* <button class='btn-r'><FaUserAlt/>  login</button>  */}

        <button class='btn-r' onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
                // <span><FaUserAlt/>&ensp;
                  String(walletAddress).substring(0, 6) +
                 "..." +
                 String(walletAddress).substring(38)
              ) : (
                <span><FaWallet/>&ensp;Connect Wallet</span>
              )}</button> 



    </div>
    );
    

}


export default Header;