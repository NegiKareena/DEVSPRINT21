import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Plants from "./plants/Plants";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
export default function App() {
  return (
   <>
   {/*<Home />
      <Plants />*/}
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/plant" element = {<Plants />} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/contact" element = {<Contacts />} />
      
      </Routes>
   </>
  )
}