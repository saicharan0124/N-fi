import React ,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Route , Switch } from 'react-router-dom';

import Header from './components/Header';
import Nftmodule from './components/Nftmodule';
import Showcase from './components/Showcase';
import Mortage from './components/Mortage';
import Splitter from './components/Splitter';
import Ownednft from './components/Ownednft';
import Room from './components/Room';
import Repay from './components/Repay';
import './App.css';
import Splitterpopup from './components/Splitterpopup';
import Lendpool from './components/Lendpool';
import Lendpopup from './components/Lendpopup';
import Tablecreate from './functions/createTable';





function App() {


 
  
  
 


  const [popupstate,changepopuphandler]=useState(false);
  const changepopup=()=>{
  
      changepopuphandler(!popupstate);
      
  
  }

  const [popupvalue,popupvaluehandler]=useState({img:'https://images.cdn.circlesix.co/image/2/1200/700/5/uploads/media/2020-07/29/741ca08763521051/20c0379_005.jpg',heading:'merscides amg',para:' Mercedes-AMG GmbH, commonly known as AMG, is the high-performance subsidiary of Mercedes-Benz AG. AMG independently hires engineers and contracts with manufacturers to customize Mercedes-Benz AMG vehicles. The company has its headquarters in Affalterbach, Baden-Württemberg,Mercedes-AMG GmbH, commonly known as AMG, is the high-performance subsidiary of Mercedes-Benz AG. AMG independently hires engineers and contracts with manufacturers to customize Mercedes-Benz AMG vehicles. The company has its headquarters in Affalterbach, Baden-Württemberg,Mercedes-AMG GmbH, commonly known as AMG, is the high-performance subsidiary of Mercedes-Benz AG. AMG independently hires engineers and contracts with manufacturers to customize Mercedes-Benz AMG vehicles. The company has its headquarters in Affalterbach,'});
  const changepopupalue=(temp)=>{

      popupvaluehandler(temp);
  }


  const [splitterstate,changesplitter]=useState(false);
  const  changesplittervalue=()=>{

      changesplitter(!splitterstate);
  }
  

 

  const[waladd,changewaladd]=useState();
  const waladdhandler2=(temp)=>{
    changewaladd(temp);
  }



  return (
    <Router>
    <div className='body'> 
      <Header waladdhandler={waladdhandler2}/>  
      
     
      <Switch>

          <Route exact path='/' >
         
              <Showcase/>
              <Nftmodule  changepopupstate={changepopup} popupv={changepopupalue}/> 
              {popupstate && <Ownednft popupstate={popupstate} changepopupstate={changepopup} popupvalue={popupvalue} />}  
                       
          </Route>


          <Route exact path='/mortage'>
            
            {/* <Mortage popupstate={popupstate} changepopupstates={changepopup} popupvalue={popupvalue}/> */}
            <Mortage changepopupstate={changepopup} popupv={changepopupalue} owneraddr={waladd}/>
            {popupstate && <Ownednft popupstate={popupstate} changepopupstate={changepopup} popupvalue={popupvalue} display={'mortage'}/>}  
          
          </Route>
          


          <Route exact path='/splitter'>
          
            <Splitter changepopupstate={changepopup} popupv={changepopupalue}/>
            {popupstate && <Ownednft popupstate={popupstate} changesplitterstate={changesplittervalue} changepopupstate={changepopup} popupvalue={popupvalue} display={'splitter'}/>}  
            {splitterstate && <Splitterpopup splitterstate={splitterstate} changesplitterstate={changesplittervalue}></Splitterpopup>}
          
          </Route>

          <Route exact path='/lendroom'>          
            <Room></Room>
          </Route>


          <Route exact path='/pay'>          
            <Repay changepopupstate={changepopup} popupv={changepopupalue} owneraddr={waladd}></Repay>
            {popupstate && <Ownednft popupstate={popupstate} changepopupstate={changepopup} popupvalue={popupvalue} display={'mortage2'}/>}  
          </Route>


          <Route exact path='/lendpool'> 
            <Lendpool  owneraddr={waladd} changepopupstate={changepopup} popupv={changepopupalue}></Lendpool>
            {popupstate && <Lendpopup popupstate={popupstate} changepopupstate={changepopup} popupvalue={popupvalue}/>}  
          </Route>

      </Switch>

      
      </div>
     <div>
      Tablecreate();
      </div> 
      
    </Router>
         
   
  );


}

export default App;
