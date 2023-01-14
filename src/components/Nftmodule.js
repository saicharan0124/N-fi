import React,{useState} from 'react';
import '../cssmodule/Nftmodule.css';
import Nftblock from './Nftblock';
import Ownednft from './Ownednft';

const Nftmodule=(props)=>{

 
    
    const homeitem=[

        {
            src:'https://www.teahub.io/photos/full/5-51207_4k-gaming-wallpaper-assassins-creed-full-hd.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        },
        {
            src:'https://wallpaperaccess.com/full/7459.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        },
        {
            src:'https://upload.wikimedia.org/wikipedia/commons/d/df/4k_Wallpaper.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }, {
            src:'https://img.wallpapersafari.com/desktop/1536/864/25/57/z6GvOW.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }, {
            src:'https://wallpaperaccess.com/full/7445.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }, {
            src:'https://cdn.wallpapersafari.com/86/94/NGPF19.jpeg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }, {
            src:'https://www.wallpaperuse.com/wallp/3-32822_m.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }, {
            src:'https://images.hdqwalls.com/download/triangle-planet-4k-4h-1400x900.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }, {
            src:'https://w0.peakpx.com/wallpaper/537/108/HD-wallpaper-spider-man-ultra-games-other-games-superhero-marvel-spiderman-videogame-milesmorales.jpg',
            heading:'cartoon kids',
            para:'with your cartoon kid,you can do things that you were never aloowed to do before .lets hang put and ...'

        }

    ]

    
    const homeitems=homeitem.map((data)=>{
        return <Nftblock  src={data.src} heading={data.heading} para={data.para} changepopup={props.changepopupstate} popupv={props.popupv}></Nftblock>;
    })

return(
    <div className='nftmodule wrapper'>
            
            {homeitems}
        
        <p className='summa'></p> 
    </div>
);

}


export default Nftmodule;
