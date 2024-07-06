import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Plants from "./plants/Plants";
import Signup from "./components/Signup";
import Contacts from "./contact/Contacts";
import Blogs from "./blog/Blogs";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";
export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
   <>
   {/*<Home />
      <Plants />*/}
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/plant" element = {authUser?<Plants />:<Navigate to = "/signup"/>} />
        <Route path = "/signup" element = {<Signup />} />
        <Route path = "/contact" element = {<Contacts />} />
        <Route path = "/blog" element = {<Blogs/>} />
      
      </Routes>
      <Toaster />
   </>
  )
}