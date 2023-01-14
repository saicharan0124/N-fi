import ReactDOM from 'react-dom';
import React from 'react';
import { MoralisProvider } from "react-moralis";
import './index.css';
import App from './App';


// const url="https://gxn2w6hjguqs.usemoralis.com:2053/server";
// const app="Un4NHrok9wipkug17C7ghrFXfI483sWVRNT3T0ea";


ReactDOM.render(
<React.StrictMode>
    {/* <MoralisProvider serverUrl={url} appId={app}> */}
         <App />
        {/* </MoralisProvider> */}
    </React.StrictMode>,
     document.getElementById('root'));
