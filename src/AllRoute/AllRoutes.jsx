import { Route, Routes } from "react-router-dom"
import { TabMethods } from "../Components/TabMethods/TabMethods"

export const AllRoutes = () =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<TabMethods/>}/>
            </Routes>
        
        </>

    )
}