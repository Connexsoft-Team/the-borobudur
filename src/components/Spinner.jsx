import { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

export default function Spinner() {
    
    
    return(
        <>
            <div className="spinner w-full h-[100vh] flex justify-center items-center">
                <PropagateLoader 
                color="#524d4f"
                size={15}
                 />
            </div>
        </>
    )


}