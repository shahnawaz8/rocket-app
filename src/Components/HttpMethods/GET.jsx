import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './GET.css' 
export const GET = (props) => {
    const [urlIn,setUrlIn] = useState("");
    const [getRes,setGetRes] = useState("");
    const [tg,setTg] = useState(false);
    const handleEvent = () =>{
        console.log(urlIn);
        axios.get(`${urlIn}`).then((res)=>{
            setGetRes(res.data)
            setTg(true)
        })
        .catch((err)=>setGetRes(err))
    }
    console.log(getRes??getRes[0].id);
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
            <div className='getResponse'>
                {tg?'See response in console':'invalid url'}
                {/* {tg?getRes.map((el)=>{
                    return (
                        
                    )
                }):""} */}
            </div>


        </div>
    </>
    )
} 