import {React, useEffect, useState} from 'react';

import axios from 'axios';
import '../cssmodule/Mortage.css';
import Nftblock2 from './Nftblock2';
import '../extra/loading.css';
import m_initial3 from '../functions/repay';


const Repay=(props)=>{


    



    const [item,update_item]=useState([]);
    const [item2,updatetemp]=useState([]);
    const [loading,setloading]=useState(true);  

    const apiKey = "qTpo5KLsQvfNVtuZx6mILiNuhNZq4lpJ";
    const endpoint = 'https://polygon-mumbai.g.alchemy.com/v2/qTpo5KLsQvfNVtuZx6mILiNuhNZq4lpJ';
    const own=props.owneraddr;
    const contractAddress='';

    


    useEffect(async()=>{

        const headers = {
            'Content-Type': 'application/json',            
          };      
          const result = await axios.post(
            'http://localhost:3001/student/fetch',
            { },
            { headers: headers, }
          );
       
          console.log(result.data.result);
          update_item(result.data.result);

          setloading(false)
    },[]);


    




    
    

        const items2=item.map((data)=>{  
                
    
               console.log(data.img)
                if (props.owneraddr==data.img){                    
                
                    return <Nftblock2  src={data.owner} address={data.address}  heading={data.heading} token={data.token_id}  para={data.price} changepopup={props.changepopupstate} popupv={props.popupv} owner={props.owneraddr}></Nftblock2>;
                }  
            
            
        })


        


    

    



    return (
        <div style={{margin:"0" ,padding:"0px"}}>
        
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


export default Repay;