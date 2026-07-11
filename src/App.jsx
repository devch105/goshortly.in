import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    
   <>
    <Toaster position="top-right"/>

   <BrowserRouter>
   <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/dashboard"
       element={
        
       }
      />
   </Routes>
   </BrowserRouter>
   </>
  );
};

export default App;
