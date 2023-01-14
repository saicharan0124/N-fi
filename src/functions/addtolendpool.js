import axios from 'axios';

const addtolendpool=async(info)=>{


    var owner=window.localStorage.getItem('owner');

    console.log('kkkk'+info.lend_id._hex+' '+info.frm+' '+info.lend_start_time._hex+' '+info.lend_end_time._hex+' '+info.lend_amount._hex);
    
    const headers = {  
        'Content-Type': 'application/json',      
    };

const result2 = await axios.post(
'http://localhost:3001/lendpool/add',
{
    "lendid":parseInt(info.lend_id._hex,16),
    "address":info.frm,
    "start_date":parseInt(info.lend_start_time._hex,16),
    "end_date":parseInt(info.lend_end_time._hex,16),
    "price":parseInt(info.lend_amount._hex,16)*Math.pow(10,-18),
    "status":0   



},
{
headers: headers,
}
);
    
alert("lendpool added..")


}


export default addtolendpool;