import axios from 'axios';

import addtotransactions from './addtotransaction';

const { ethers } = require("ethers");


const m_initial2=async(data)=>{

 // console.log(data)

   //metamask
   const provider = new ethers.providers.Web3Provider(window.ethereum)
   await provider.send("eth_requestAccounts", []);
   const signer = provider.getSigner()

   console.log("hlo1")

//contract initialization 

 const contract = require("./abi.json");
 const mortgage_addr = '0xe18c8bD1f7EcBe80aec6c44E5f5c83B2f8ee1F91' 
 const mortgage_contract = new ethers.Contract(mortgage_addr, contract.mortgage_abi,signer)
 const mortgage_contract_p = new ethers.Contract(mortgage_addr, contract.mortgage_abi,provider)
 console.log("hlo2")

 //price to send
const decimals = 18;
const input = ""+data.price; // Note: this is a string, e.g. user input

const amount = ethers.utils.parseUnits(input, decimals)


//borrow function
const summa=async()=>{
const Borrow = await mortgage_contract.borrow(data.address,data.token_id,amount,{gasLimit: 210000})
console.log(Borrow)



const txn= await mortgage_contract_p.on('transaction',(ans)=>{
   let answer={ans:ans}
   console.log(answer)
})

var result;

const Borrow_events= await mortgage_contract_p.on('MortgageItemCreated',(tk_id,frm,price,time)=>{
 

let info ={
   Tokenid:tk_id,
   frm:data.address,
   nftprice:price,
   time:time,
   heading:data.heading,
   img:data.img,
}

addtotransactions(info);

console.log(info)



})



}

summa()


}

//   Borrow()
//   console.log(Borrow)
//   Borrow_events()

//  console.log('borrow finished');







export default m_initial2;
