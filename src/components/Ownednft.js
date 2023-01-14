import React, { useEffect } from 'react';

import '../cssmodule/Ownednft.css';
import initial  from '../functions/approve';
import m_initial3 from '../functions/repay';
import axios from 'axios';


import img1 from './matic2.png';

const Ownednft=(props)=>{

    const amount=Math.round(parseFloat(props.popupvalue.para) * 1000) / 1000;

   
    return(
    <div>
      <div className='back' onClick={props.popupstate==true?props.changepopupstate:()=>{}}>
        </div>
            <div className='ownednft'>
                 <img src={props.popupvalue.img}/>
                <div className='innerdiv'>
                    <h2>
                        {props.popupvalue.heading}
                    </h2>
                    <p id='nft-price-2'>{amount}<img id='matic-2' src={img1}></img></p>
                    <p className='nft-detail-2'>contract address:<br></br>{props.popupvalue.address}</p>
                    <p  className='nft-detail-2'>token id:<br></br>{props.popupvalue.token_id}</p>
                    <p  className='nft-detail-2'>description:<br></br>{props.popupvalue.des}</p>
                    <button  className='btnown' onClick={props.changepopupstate}>close</button>
                    {props.display=='mortage' && <button className='btnown2'  onClick={async()=>{
                        
                        initial(
                            {
                                address:props.popupvalue.address,
                                token_id:props.popupvalue.token_id,
                                owner:props.popupvalue.owner,
                                price:props.popupvalue.price,
                                img:props.popupvalue.img,
                                heading:props.popupvalue.heading,
                            }
                        )

                        


                        }}>Mortage</button>}
                    {props.display=='splitter' && <button className='btnown2' onClick={()=>{props.changesplitterstate(); props.changepopupstate();}}>Split</button>}
                    {props.display=='mortage2' && <button className='btnown2'  onClick={()=>{
                        m_initial3(

                            {
                                address:props.popupvalue.address,
                                token_id:props.popupvalue.token_id,
                                owner:props.popupvalue.owner,
                                price:props.popupvalue.price,
                            }
                        );                       
                        
                        }}>pay</button>}
                </div>
            </div>
            
    </div> 
       
        
    );

}



export default Ownednft;