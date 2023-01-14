import {React} from 'react';

import '../cssmodule/Leftnav.css';


const Leftnav=()=>{


    return(
        <div className='leftnav-outer'>
                
                <div className='leftnav-profile'>

                    <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'></img>
                    <div className='leftnav-p-inner'>
                        <h4>name</h4>
                        <h5>meta mask id</h5>
                    </div>

                </div>

               
            
        </div>
    );

}


export default Leftnav;