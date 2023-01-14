const { NFTStorage, File, Blob } = require('nft.storage')
const { default: fetch } = require('@web-std/fetch');

const addtotransactions=async(info)=>{
var owner=window.localStorage.getItem('owner');


  const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFDQTc1NjNlNWJmMDgxMkQyMzVDQTM2QzM3Rjg0OTZiYTkwMDcwNmIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDY3MDkyMjQ2MSwibmFtZSI6Im5maSJ9.QyKscH85ySqwAl-Xw3dezjU1Uc6G6sko-Oe2A3EWExE'
 
 var metadata;

  const image = await getExampleImage()
  const nft = {
    image:info.img, // use image Blob as `image` field
    token_id:parseInt(info.Tokenid._hex,16),
    owner:owner,
   address:info.frm,
   heading:info.heading,
date:info.time._hex,
price:parseInt(info.nftprice._hex,16)*Math.pow(10,-18),
status:0 
    
  }

  const client = new NFTStorage({ token: API_KEY })
   metadata = await client.store(nft)

  console.log('NFT data stored!')
  console.log('Metadata URI: ', metadata.url)
// //metamask
//   const provider = new ethers.providers.Web3Provider(window.ethereum)
//    await provider.send("eth_requestAccounts", []);
//    const signer = provider.getSigner()

//    const tableland = await connect({  chain: "polygon-mumbai" },signer);
// const { Borrow_sql,txnHash } = await tableland.create(
//     `id integer, owner string, ipfs_link string, primary key (id)`
//   );

//   console.log(Borrow_sql)
//   console.log(txnHash)


}




export default addtotransactions;
