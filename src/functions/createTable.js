const { ethers } = require("ethers");

//metamask
  const provider = new ethers.providers.Web3Provider(window.ethereum)
   await provider.send("eth_requestAccounts", []);
   const signer = provider.getSigner()

//creating a table
async function Tablecreate() {
    const tableland = await connect({  chain: "polygon-mumbai" },signer);
    const { Borrow_sql,txnHash } = await tableland.create(
        `id integer, owner string, ipfs_link string, primary key (id)`
      );
    
      console.log(Borrow_sql)
      console.log(txnHash)
    }
    export default Tablecreate;