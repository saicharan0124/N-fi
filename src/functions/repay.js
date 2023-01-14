import {React, useEffect, useState} from 'react';

import axios from 'axios';
import updatetransaction from './updatetransaction';
 const { ethers } = require("ethers");


const m_initial3=async(data)=>{


  


     //metamask
     const provider = new ethers.providers.Web3Provider(window.ethereum)
     await provider.send("eth_requestAccounts", []);
     const signer = provider.getSigner()
 
 //contract initialization 
 
   const contract = require("./abi.json");
   const mortgage_addr = '0xe18c8bD1f7EcBe80aec6c44E5f5c83B2f8ee1F91' 
   const mortgage_contract = new ethers.Contract(mortgage_addr, contract.mortgage_abi,signer)
   const mortgage_contract_p = new ethers.Contract(mortgage_addr, contract.mortgage_abi,provider)
   const decimals = 18;
  //  const input = ""+data.price; // Note: this is a string, e.g. user input
   const input =""+ data.price*0.9;
   const amount = ethers.utils.parseUnits(input, decimals)



   const nftadrr=data.address;
   const id=data.token_id;


 //repay function 
  //  const repay = await mortgage_contract.repay(data.address,data.token_id,{value:0.90*amount,gasLimit: 210000})
  const repay = await mortgage_contract.repay(nftadrr,id,{value:amount,gasLimit: 500000})
   console.log(repay)
 
    const repay_events= await mortgage_contract_p.on(' MortgageRepaid',(tk_id,frm,ans,time)=>{
 
 
     let info ={
       Tokenid:tk_id,
       frm:frm,
       repaid_or_not:ans,
       time:time
     }
 
     console.log(info)


     if(info.repaid_or_not==true){

      updatetransaction({
        token_id:tk_id,
        address:frm
      });
     }
    })



 
  
  
  }

  

  export default m_initial3;