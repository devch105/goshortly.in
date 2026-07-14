import { Navigate } from "react-router-dom";

const isTokenValid = () =>{
 
  const token = localStorage.getItem("token");

  if(!token) return false;

  try {
     
    const payload = JSON.parse(atob(token.split(".")[1]));
    if(payload.exp * 1000 < Date.now()){
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }catch(error){
    localStorage.removeItem("token");
    return false
  }

};


const ProtectRoute = ({children}) => {
  return isTokenValid() ? children : <Navigate to="/login" replace/>
}
export default ProtectRoute;
