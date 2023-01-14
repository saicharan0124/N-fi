import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useMoralisWeb3Api } from "react-moralis";
import {Moralis} from 'moralis/node';

import '../cssmodule/Mortage.css';
import Nftblock from './Nftblock';
import '../extra/loading.css';




const Mortage=(props)=>{  

   const [item2,updatetemp]=useState([]);
   const [loading,setloading]=useState(true);  
   // console.log(props.owneraddr);

  //  const url="https://gxn2w6hjguqs.usemoralis.com:2053/server";
  //  const app="Un4NHrok9wipkug17C7ghrFXfI483sWVRNT3T0ea"; 
  // const api_key='https://eth-mainnet.alchemyapi.io/jsonrpc/qTpo5KLsQvfNVtuZx6mILiNuhNZq4lpJ';

    const apiKey = "qTpo5KLsQvfNVtuZx6mILiNuhNZq4lpJ";
    const endpoint = 'https://polygon-mumbai.g.alchemy.com/v2/qTpo5KLsQvfNVtuZx6mILiNuhNZq4lpJ';
    const own=props.owneraddr;
    const contractAddress='';


    useEffect( async() => {

            if(props.owneraddr != undefined){
         
              const  testnetNFTs= await fetch(`${endpoint}/getNFTs?owner=${own}`).then(data => data.json());        
               //console.log(testnetNFTs.ownedNfts);
                fetchdata(testnetNFTs.ownedNfts);
               // console.log(testnetNFTs.ownedNfts);
       
         // console.log(testnetNFTs.result[0].token_uri);
            }

           // summa()
        },[props.owneraddr]);





        const fetchdata=async(arr)=>{
    
        for(let j=0; j<arr.length ;j++){            
            let temp=arr[j].media[0].gateway;

            var con_add=arr[j].contract.address;
            var con_token_id=parseInt(arr[j].id.tokenId,16);
            var price=Math.pow(10,-18);

            const options = {method: 'GET', headers: {Accept: 'application/json'}};
            await fetch("https://api.covalenthq.com/v1/80001/tokens/"+con_add+"/nft_transactions/"+con_token_id+"/?quote-currency=USD&format=JSON&key=ckey_ed1c2bdcdfee41bd9fbf5422ada",options)
            .then(response => response.json())
            .then(response =>{ 
                console.log(response)
                let arr_size=response.data.items[0].nft_transactions.length;

                var temp10=0;

                for (var s=0;s<arr_size;s++){


                    if(temp10<parseInt(response.data.items[0].nft_transactions[s].value)){
                        temp10=parseInt(response.data.items[0].nft_transactions[s].value);
                    }

                }

                if(temp10==0){
                    price*=temp10;
                    console.log("value is zero")

                }else{                    
                    price*=temp10;
                }
                
                })
            .catch(err => console.error(err));        
        

             updatetemp(data=>[...data,{ src:temp,
                                            heading:arr[j].title,
                                            para:price,
                                            address:con_add,
                                            token:con_token_id,
                                            des:arr[j].description
                                        }
                            ]);      

        }

        setloading(false);  
       
    }
   
 
    const items2=item2.map((data)=>{
         return <Nftblock  src={data.src} address={data.address} des={data.des} token={data.token}  heading={data.heading} para={data.para} changepopup={props.changepopupstate} popupv={props.popupv} owner={props.owneraddr} ></Nftblock>;
     })

     

  
    return(        
        <div style={{margin:"0" ,padding:"0px"}}>
            {/* { props.popupstate && <Ownednft popupstate={props.popupstate} changepopupstate={changepopupstatehandler} popupvalue={props.popupvalue}></Ownednft>} */}
            {
                loading?(<div className='loading-center'>
                    
                            <div className="ring"></div>
                    
                    </div>):(
                    <div className='mortage wrapper'>
                         {items2}
                        <p className='summa'></p> 
                        <p className='summa'></p> 
                        <p className='summa'></p> 
                        <p className='summa'></p>
                    </div>
                )
            }
            </div>
    );
}

export default Mortage;









































  // const getvalue=async(add,id)=>{

    //     await Moralis.start({
    //         appId:app,
    //         serverUrl:url
        
    //     });   
    
    //     Moralis.initPlugins();
    //     const c=Moralis.Plugins.covalent;

    //     const r=await c.getNftTransactionsForContract({
    //         chainId:80001,
    //         contractAddress:add,
    //         tokenId:id
    //      });
         
    //     let arr_size=r.data.items[0].nft_transactions.length;
    //     // console.log(r.data.items[0].nft_transactions[arr_size-1].gas_quote);
    //     let result=r.data.items[0].nft_transactions[arr_size-1].fees_paid;
        
    //      return result;
    
    // }

  


    // const fetchdata=async(arr)=>{

    //     for(let j=0; j<arr.length ;j++){            
    //         let temp=arr[j].token_uri.toString().substring(22);

    //         const fees=await getvalue(arr[j].token_address,arr[j].token_id);
    //         const fees_paid=fees*0.70;

    //         fetch(temp).then(res => {
    //             res.json().then((res) => {
    //             console.log(res.image); // this should print the url to console
                                      
    //             updatetemp(data=>[...data,{ src:res.image,
    //                                         heading:arr[j].name,
    //                                         para:fees_paid
    //                                     }
    //                         ]);                       
    //              });
    //         });       
    //     }

    //     setloading(false);  
    // }


    // const Web3Api=useMoralisWeb3Api();
    
    // useEffect( async () => {

    //     if(props.owneraddr != undefined){
 
    //        const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
    //                                     chain: "mumbai",address:props.owneraddr
    //                              });               
        
    //         fetchdata(testnetNFTs.result);
                    
    //  // console.log(testnetNFTs.result[0].token_uri);
    //     }
    // },[props.owneraddr]);




    
   
    // useEffect(async () => {
       
    
    //     const headers = {
    //       'Content-Type': 'application/json',
    //     };
    
    //     const result = await axios.post(
    //       'https://eth-mainnet.alchemyapi.io/jsonrpc/qTpo5KLsQvfNVtuZx6mILiNuhNZq4lpJ',
    //       {"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73},
    //       {
    //         headers: headers,
    //       }
    //     );
    
    //     console.log(result.data);
    
        
    //   }, []);  

