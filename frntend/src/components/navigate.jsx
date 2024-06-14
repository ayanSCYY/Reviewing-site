import { useNavigate } from "react-router-dom";

export const Navigate=({route})=>{
    const navigate=useNavigate();
    
        navigate(route)

}