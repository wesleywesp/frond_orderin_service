import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LogoutIcon from '@mui/icons-material/Logout';
import EventIcon from '@mui/icons-material/Event';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../State/Authentication/Action";
const menu=[
    {title:"Dashboard",icon:<DashboardIcon/>,path:"/"},
    {title:"Orders",icon:<ShoppingBagIcon/>,path:"/orders"},
    {title:"Menu",icon:<ShopTwoIcon/>,path:"/menu"},
    {title:"Food Category",icon:<CategoryIcon/>,path:"/category"},
    {title:"Ingredients",icon:<FastfoodIcon/>,path:"/ingredients"},
    {title:"Events",icon:<EventIcon/>,path:"/event"},
    {title:"Details",icon:<AdminPanelSettingsIcon/>,path:"/details"},
    {title:"Logout",icon:<LogoutIcon/>,path:"/logout"},



]
export const AdminSideBar = (handleClose) => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const hadleNavigate=(item)=>{
        navigate(`/admin/restaurant${item.path}`)
        if(item.title==="Logout"){
            navigate("/");
            dispatch(logout());
            handleClose();
        }
    }
    return(<div>
     <Drawer
            variant={isSmallScreen ? "temporary" : "permanent"}
            onClose={handleClose}
            open={true}
            anchor="left"
            sx={{ zIndex: -1 }}
            
        >
            <div className="w-[70vw] lg:w-[20vw] h-screen flex flex-col justify-center text-xl space-y-[1.65rem]">
                
            {menu.map((item, i) => (
                    <div key={i} >
                        <div>
                        <div  onClick={()=>hadleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer ">
                            {item.icon}
                            <span>{item.title}</span>
                        </div>
                        {i !== menu.length - 1 && <Divider sx={{ my: 1 }}/>}
                        </div>
                    </div>
                ))}
                </div>
        </Drawer>
        </div>);
}