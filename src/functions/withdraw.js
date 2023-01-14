const { ethers } = require("ethers");



const withdraw=async(input,lend_id)=>{

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
     const input1=input
      // Note: this is a string, e.g. user input
     const amount = ethers.utils.parseUnits(input1, decimals)



    
 //write fn for conversion of amount too wei
//withdraw function
const withdraw_fn = await lendpool_contract.withdraw(amount,lend_id,{gasLimit: 210000})
console.log(withdraw_fn)
//withdraw emit 
const withdraw_events= await lendpool_contract_p.on('withdraws',(lend_id,frm,amount,withdraw_time)=>{
 
    let withdraw_info ={
       lend_id:lend_id,
       frm:frm,
       withdrawed_amount:amount,
       withdrawed_time:withdraw_time,
       
    }
    console.log(withdraw_info)
   
    
    })
}


export default withdraw;