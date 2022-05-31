import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './GET.css' 
import swal from 'sweetalert';
export const POST = ({name}) => {
    const [urlIn,setUrlIn] = useState("");
    const [text,setText] = useState("");

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
    }
    console.log(text);
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
            <textarea placeholder='Enter data in json formate' onChange={(e)=>setText(e.target.value)}
             className='getResponse'></textarea>
                
            


        </div>
    </>
    )
} 