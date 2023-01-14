import axios from 'axios';

const updatetransaction=async(data)=>{

    var owner=window.localStorage.getItem('owner');

    
        const headers = {  
            'Content-Type': 'application/json',      
        };
    
    const result2 = await axios.post(
    'http://localhost:3001/student/update',
        {
    
    
    "token_id":data.token_id,
    "address":data.address,
    "status":0 ,
     
    },
    {
    headers: headers,
    }
    );
        
    
    
    }



export default updatetransaction;