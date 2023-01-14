import {React, useState} from 'react';


import '../cssmodule/Lendblock.css';


const Lendblock=(props)=>{

    const changevalue=()=>{

        props.changepopup();

        props.popupv({
            address:props.addres,
            price:props.data.price,
            start:props.data.start_date,
            end:props.data.end_date,
            id:props.data.lendid
        });
    }

    var today=new  Date(parseInt(props.data.start_date));
        var date=new Date(parseInt(props.data.end_date));

    // const cal_no_days=(day)=>{
        
      

    //     return parseInt(""+(date.getTime()-today.getTime())/(1000 * 60 * 60 * 24));
    // }

    return(<div className='lendblock-outer'>

        <p className='lendblock-heading'>amount:</p>
        <p>{props.data.price}</p>
        <p className='lendblock-heading'>purchased on:</p>
        <p>{today.toString()}</p>
        <p className='lendblock-heading'>end date:</p>
        <p>{date.toString()}</p>

        <button onClick={changevalue} className='btnown2'>open</button>

    </div>);




}


export default Lendblock;