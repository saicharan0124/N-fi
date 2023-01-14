import addtolendpool from './addtolendpool';


const { ethers } = require("ethers");



const lendpool = async (input , days) => {
    //metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()

console.log("hlo1")


//contract initialization 

const contract = require("./abi.json");
const lendpool_addr = '0x4E9846Cc17d070589588f5D822986d9677046335' 
const lendpool_contract = new ethers.Contract(lendpool_addr, contract.lendpool_abi,signer)
const lendpool_contract_p = new ethers.Contract(lendpool_addr, contract.lendpool_abi,provider)

// console.log(amount)
const decimals = 18;
//const input = "2"; // Note: this is a string, e.g. user input
const amount = ethers.utils.parseUnits(input, decimals)
//const days=''
//lend function
const lend_fn = await lendpool_contract.lend(days,{value:amount,gasLimit: 210000})
console.log(lend_fn)



//lend emit
const lend_events= await lendpool_contract_p.on('lending',(lend_id,frm,amount,start_time,lockup_time)=>{
 
 let lend_info ={
    lend_id:lend_id,
    frm:frm,
    lend_amount:amount,
    lend_start_time:start_time,
    lend_end_time:lockup_time
 }

 console.log('kkkk'+lend_info.lend_amount._hex);
//  +' '+lend_info.frm+' '+lend_info.lend_start_time._hex+' '+lend_info.lend_end_time._hex+' '+lend_info.lend_amount._hex)
    addtolendpool(lend_info);




 console.log(lend_info)


 
 })



 
 

}


export default lendpool;