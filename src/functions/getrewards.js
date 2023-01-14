const { ethers } = require("ethers");

const getrewards=async(lend_id)=>{

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
     
     


    
//get interestrewards
const getInterstReward_fn = await lendpool_contract.getinterestReward(lend_id,{gasLimit: 210000})
console.log(getInterstReward_fn)
//get rewards emit

let temp_id;
let temp_reward_amount;



const getInterstReward_events= await lendpool_contract_p.on('rewardstaken',(lend_id,frm,reward_amount,reward_withdrawn_time)=>{
 
    let getInterstReward_info ={
       lend_id:lend_id,
       frm:frm,
       reward_amount:reward_amount,
       reward_withdrawn_time:reward_withdrawn_time,
       
    }


    temp_id=getInterstReward_info.lend_id;
    temp_reward_amount=getInterstReward_info.reward_amount;
   

    console.log(getInterstReward_info)
   
    
    })



    return {
        id:temp_id,
        amount:temp_reward_amount
    }




}


export default getrewards;