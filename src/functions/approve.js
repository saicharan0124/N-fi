import m_initial2 from './mortgage';


const {use,POSClient} = require('@maticnetwork/maticjs')
const {Web3ClientPlugin} = require('@maticnetwork/maticjs-ethers')
const {ethers} = require('ethers')


use(Web3ClientPlugin);



const initial=async(data)=>{

//   console.log(data);

  const to_address='0xe18c8bD1f7EcBe80aec6c44E5f5c83B2f8ee1F91'  //need to be declared 

  const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()

  const input=data.owner;
  const posClient = new POSClient();
  await posClient.init({
    network: 'testnet',
    version: 'mumbai',
    parent: {
      provider: signer,
      defaultConfig: {
        from : input
      }
    },
    child: {
      provider:signer,
      defaultConfig: {
        from :input
      }
    }
});


    const erc721Token = posClient.erc721(data.address);
   const result= await erc721Token.transfer(data.token_id,data.owner,to_address);
    const txReceipt = await result.getReceipt();
    console.log(txReceipt);
    if( txReceipt.status==1){
     console.log("transfer completed")
   
    }

    m_initial2(data);


  

  }
 
 







  
 





export default initial;
