import React from 'react';
import Nftblock from './Nftblock';


import '../cssmodule/Splitter.css';

const Splitter=(props)=>{

    const item3=[

        {
            src:'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        },
        {
            src:'https://theithacan.org/wp-content/uploads/2022/02/2.8-Cartoon_MikeRoss-3.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        },
        {
            src:'https://i.insider.com/61efe1a2702f4b001866d4db?width=700',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        }, {
            src:'https://cdn.benzinga.com/files/images/story/2012/bord_ape_2.png',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        }, {
            src:'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=cb647d991d8897cc8a81d2c33c4406d5',
            heading:'kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        }, {
            src:'https://www.reuters.com/resizer/PL3RvMiTCioj2BPnMoTZp1wlDYc=/480x600/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg',
            heading:'kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        }, {
            src:'https://www.cryptodefinance.com/wp-content/uploads/2021/08/image-46.jpg',
            heading:'kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'
    
        }
    ]
    

    

    

    const items3=item3.map((data)=>{
         return <Nftblock  src={data.src} heading={data.heading} para={data.para} changepopup={props.changepopupstate} popupv={props.popupv} ></Nftblock>;
     })

   
    return(
        <div className='splitter wrapper'>
            {/* { props.popupstate && <Ownednft popupstate={props.popupstate} changepopupstate={changepopupstatehandler} popupvalue={props.popupvalue}></Ownednft>} */}
            
            {items3}
        </div>
    );
}


export default Splitter;