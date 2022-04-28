import { useState } from 'react'
import './GET.css' 
export const GET = () => {
    const [urlIn,setUrlIn] = useState("");
    return (
        <>
        <div className="getContainer">
            <div className='getEmptyArea'>
                {urlIn?urlIn:'Enter url in the input box'}
            </div>
            <hr />
            <div className='getInput'>
                <span>URL</span>
                <input type="text" onChange={(e)=>setUrlIn(e.target.value)} className='getRealIntput' placeholder='Enter url'/>
                <button className='getbtn'>Send</button>
            </div>
            <hr />
            <div className='getResponse'>

            </div>


        </div>
    </>
    )
} 