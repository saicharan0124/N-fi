const Moralis=require('moralis/node');

const url="https://gxn2w6hjguqs.usemoralis.com:2053/server";
const app="Un4NHrok9wipkug17C7ghrFXfI483sWVRNT3T0ea";


const init=async()=>{

 await Moralis.start({
    appId:app,
    serverUrl:url

 });   

Moralis.initPlugins();

const c=Moralis.Plugins.covalent;


const r=await c.getNftTransactionsForContract({
   chainId:80001,
   contractAddress:"0x102d7d235795744d44f862cc8d92dccc8f46112e",
   tokenId: "29650"
});

let arr_size=r.data.items[0].nft_transactions.length;

//console.log(r.data.items[0].nft_transactions[arr_size-1].gas_quote);
let result=r.data.items[0].nft_transactions[arr_size-1].gas_quote;

console.log(r.data.items[0]);
};

init();
