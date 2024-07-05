import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Plants from "./plants/Plants";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Blogs from "./blog/Blogs";
import { Toaster } from 'react-hot-toast';
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
        <Route path = "/blog" element = {<Blogs/>} />
      
      </Routes>
      <Toaster />
   </>
  )
}