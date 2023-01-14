const { ethers } = require("ethers");


const getrewardsvalue=async(lend_id,owner)=>{

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
     // const decimals = 18;
     // const input = "2"; // Note: this is a string, e.g. user input
     // const amount = ethers.utils.parseUnits(input, decimals)

    
const earned_fn = await lendpool_contract.earned(lend_id,{gasLimit: 210000})
console.log(earned_fn)

return earned_fn;


}


export default getrewardsvalue;