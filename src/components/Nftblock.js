import React,{useState} from 'react';
import '../cssmodule/Nftblock.css';
import Ownednft from './Ownednft';
import img1 from './matic2.png';

const Nftblock=(props)=>{
   
    const changevalue=()=>{

        props.changepopup();

        props.popupv({
            img:props.src,
            heading:props.heading,
            para:props.para,
            address:props.address,
            token_id:props.token,
            owner:props.owner,
            price:props.para,
            des:props.des
        });
    }


    const amount=Math.round(parseFloat(props.para) * 1000) / 1000;

return(
    
    <div className='nft' onClick={changevalue}>
        
        <img src={props.src}/>
        
        <div class='subblock '>
        
            <h2>{props.heading}</h2>
            <p id='nft-price'>{amount}<img id='matic' src={img1}></img></p>
            <p className='nft-detail'>Contract address:<br></br>{props.address}</p>
            <p className='nft-detail'>token id:<br></br>{props.token}</p>
        </div>
        
    </div>
    
);

}


export default Nftblock;
