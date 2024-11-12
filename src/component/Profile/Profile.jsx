import React, { useState } from "react";
import ProfileNavigation from "./ProfileNavigation";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Orders from "./Orders";
import Address from "./Address";
import Favorites from "./Favorites"
import Event from "./Event"
/*import Notification from './Notification'
import Payments from "./Payments";
import EditProfile from "./EditProfile";*/
import Logout from "./Logout";

const Profile = () => {
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <div className="lg:flex justify-between">
            <div className="sticky h-[80vh] lg:w-[20%]">
                <ProfileNavigation open={openSideBar} handleClose={() => setOpenSideBar(false)} />
            </div>
            <div className="lg:w-[80%]">
                <Routes>
                    <Route path='/' element={<UserProfile/>}> </Route>
                    <Route path='/orders' element={<Orders/>}> </Route>
                    <Route path='/address' element={<Address/>}> </Route>
                    <Route path='/favorites' element={<Favorites/>}> </Route>
                    <Route path='/events' element={<Event/>}> </Route> 
                    {/*<Route path='/notification' element={<Notification/>}> </Route>
                    <Route path='/payments' element={<Payments/>}> </Route>
                    <Route path='/editrperfil' element={<EditProfile/>}> </Route>*/}
                    <Route path='/logout' element={<Logout/>}> </Route> 


                       
  

    
                </Routes>    
            </div>
        </div>
    );
};

export default Profile;
