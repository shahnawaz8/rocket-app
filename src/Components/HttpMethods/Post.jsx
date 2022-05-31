import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import './GET.css' 
import swal from 'sweetalert';
export const POST = ({name}) => {
    const [urlIn,setUrlIn] = useState("");
    const [text,setText] = useState("");
    const [token,setToken] = useState(false);

    const [tg,setTg] = useState(false);
    const handleEvent = () =>{
        if(name=="post" && text.length!=0){
            try {
                axios.post(`${urlIn}`,JSON.parse((text.trim())))
                .then((res)=>{
                    setTg(true)
                    swal("Data posted successfully");
                })
                .catch((err)=>(""))
                
            } catch (error) {
                swal(error.message);
            }

        }
        else if(name=='delete'){
            try {
                axios.delete(`${urlIn}`)
                .then((res)=>{
                    setTg(true)
                    swal("Data Deleted successfully");
                })
                .catch((err)=>swal(err.message));
                
            } catch (error) {
                swal(error.message);
            }
        }
        else if(name=='patch'){
            try {
                axios.patch(`${urlIn}`,JSON.parse((text.trim())))
                .then((res)=>{
                    setTg(true)
                    swal("Data Updated successfully");
                })
                .catch((err)=>swal(err.message));
                
            } catch (error) {
                swal(error.message);
            }
        }
        else if(name=='put'){
            try {
                axios.put(`${urlIn}`,JSON.parse((text.trim())))
                .then((res)=>{
                    setTg(true)
                    swal("Data Updated successfully");
                })
                .catch((err)=>swal(err.message));
                
            } catch (error) {
                swal(error.message);
            }
        }
        
    }
    console.log(token);
    return (
        <>
        <div className="getContainer">
            <div className='getEmptyArea'>
                {urlIn?urlIn:'Enter url in the input box'}
            </div>
            <div className='getInput'>
                <span>URL</span>
                <input type="text" onChange={(e)=>setUrlIn(e.target.value)} className='getRealIntput' placeholder='Enter url'/>
                <button className='getbtn' onClick={handleEvent}>Send</button>
            </div>
            {name=='post'?
                <div className='getInput'>
                   <h1 onClick={()=>token?setToken(false):setToken(true)}>Autherisation</h1>

                </div>:""

            }
            {token?<div>
                <input type="text" placeholder='Enter token'/>
            </div>:''}

            <textarea disabled={name=='delete'} placeholder='Enter data in json formate' onChange={(e)=>setText(e.target.value)}
             className='getResponse'></textarea>
                
            


        </div>
    </>
    )
} 