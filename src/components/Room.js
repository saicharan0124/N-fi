import {React, useState} from 'react';
import Leftnav from './Leftnav';

import '../cssmodule/Room.css';
import NftRoom from './NftRoom';

const Room=()=>{


    const [id,update_id]=useState('');
    const [id_state,update_id_state]=useState(false);



    return(
        <div className='room-outer'>

            <Leftnav></Leftnav>
            <div className='rightside'>

                {!id_state && (
                <div className='joinform'>

                    <p>hiii</p>

                    <form>
                        <input type={'text'} placeholder={'enter the code to join'}></input>
                        <input type={'submit'} value={'join'}></input>
                    </form>

                </div>
                )}

                {id_state && <NftRoom></NftRoom>}
                    

            </div>

        </div>
    );

}


export default Room;