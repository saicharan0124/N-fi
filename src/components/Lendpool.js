import {React, useEffect,useState } from 'react';



import '../cssmodule/Lendpool.css';
import Lendblock from './Lendblock';
import axios from 'axios';

import lendpool from '../functions/lendpool';


const Lendpool=(props)=>{


  const owner=localStorage.getItem('owner');

    const [amount_value,update_amount_value]=useState(0);
    const [date,update_date]=useState('');
    const [item,update_item]=useState([]);
    const [total_supply,update_total_supply]=useState(0);
    
    const [your_supply_balance,update_your_supply_balance]=useState(0);


   


   useEffect(async()=>{

    

    

    const headers = {
        'Content-Type':'application/json',      
      };
      
      const result = await axios.post(
        'http://localhost:3001/lendpool/fetch/getbyaddress',
        {   address:owner          
        },
        {
          headers: headers,
        }
      );

      const result1 = await axios.post(
        'http://localhost:3001/lendpool/fetch',
        {        
        },
        {
          headers: headers,
        }
      );

      //console.log(result.data);

      if(result.data.result!=undefined){


      

        update_item(result.data.result);

        update_total_supply(result1.data.result.length);
        
        

        var sum=0;

        for(var i=0;i<result.data.result.length;i++){

            sum+=parseInt(result.data.result[i].price);
            

        }


        update_your_supply_balance(sum);

      }
      
      

   },[]);
    
    
    


    const formsubmit=async(event)=>{

        event.preventDefault();
        //console.log(amount_value);


       lendpool(amount_value,date);

        
          // window.location.reload();
    

    }


    const items=item.map((data)=>{
        return  <Lendblock data={data}  changepopup={props.changepopupstate} popupv={props.popupv} addres={owner}></Lendblock>
    });


    

    return (

        <div className='lendpool-outer'>

<div className='lendpool-detail'>

<div className='lendpool-detail-inner'>

    <h1>Total supply:</h1>
    <p>{total_supply}</p>

</div>

<div className='lendpool-detail-inner'>

    <h1>Your Supply Balance:</h1>
    <p>{your_supply_balance}</p>

</div>




</div>

            <div className='lendform'>


                

                <form>

                    <label>Amount:</label>

                    <input type={'text'}  value={amount_value}  name={amount_value} onChange={(event)=>{
                        update_amount_value(event.target.value);
                    }} placeholder={'enter the amount'}></input>

                    <label>Days:</label> 

                    <input type={'number'}  value={date}  name={date} onChange={(event)=>{
                        update_date(event.target.value);
                    }} placeholder={'enter the date'}></input>


                    <input type={'submit'} value={'lend'} onClick={(event)=>{formsubmit(event)}}></input>
                </form>

            </div>

            {items}



        </div>

    );


}


export default Lendpool;