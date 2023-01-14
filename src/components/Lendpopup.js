import {React} from 'react';

import '../cssmodule/Lendpopup.css';
import getrewards from '../functions/getrewards';
import getrewardsvalue from '../functions/getrewardsvalue';
import withdraw from '../functions/withdraw';

const Lendpopup=(props)=>{


    // var earned_value=getrewardsvalue(props.address,props.id);

// var earned_value=0
    
    return (
        <div >

<div className='back' onClick={props.popupstate==true?props.changepopupstate:()=>{}}>
</div>

<div className='lendpopup'>

    <p>Lend Id:</p>
    <p>{props.popupvalue.id}</p>

    <p>Amount:</p>
    <p>{props.popupvalue.price}</p>

    <p>Start date:</p>
    <p>{props.popupvalue.start}</p>


    <p>End date:</p>
    <p>{props.popupvalue.end}</p>

    <button  className='btnown' onClick={props.changepopupstate}>close</button>
    <button  className='btnown2' onClick={()=>{withdraw(props.popupvalue.price,props.popupvalue.id)}}>withdraw</button>
    

    {/* <div className='getrewards'>   


    <p>Rewards earned:</p>
    <p>{earned_value}</p>

    
    <button  className='btnown3'  onClick={()=>{getrewards(props.popupvalue.id)}}>get rewards</button>

</div> */}

</div>




        </div>
    )
}



export default Lendpopup;