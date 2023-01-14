import React from 'react';
import '../cssmodule/Splitterpopup.css';


const Splitterpopup=(props)=>{

    return(
        <div>
            <div className='back'  onClick={props.splitterstate==true?props.changesplitterstate:()=>{}}></div>
            <div className='spopup'>
                <form>
                    <label>Address:</label><input type='text' placeholder='Address' ></input>
                    <label>NFT Address:</label><input type='text' placeholder='NFT address'></input>
                    <label>Parts:</label><select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </form>
                <button className='btnown'>split</button>
                <button className='btnown' id='splittersubmit' onClick={props.changesplitterstate}>close</button>
            </div>
        </div>
    );
}

export default Splitterpopup;