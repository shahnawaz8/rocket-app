import { Route, Routes } from "react-router-dom"
import { TabMethods } from "../Components/TabMethods/TabMethods"

export const AllRoutes = () =>{
    return (
        <>
            <Routes>
                <Route path="/tab" element={<TabMethods/>}/>
            </Routes>
        
        </>

    )
}