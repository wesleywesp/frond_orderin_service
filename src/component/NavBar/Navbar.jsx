import React from 'react';
import { IconButton, Avatar, Badge } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
    const navigator=useNavigate();
    return (
        <div className="px-5 sticky top-0 z-50 py-[0.8rem] bg-[#90caf9] lg:px-20 flex justify-between">
            <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                <div className="logo font-semibold text-gray-300 text-2xl">Logo</div>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-10">
                <div>                <IconButton>
                    <SearchIcon sx={{ fontSize: "1.5rem" }} />
                </IconButton>
                </div>
                <div> 
                    {false?<Avatar sx={{ bgcolor: "white", color: blue[300] }}>C</Avatar>:
                    <IconButton>
                        <PersonIcon onClick={()=>navigator("/account/login")}/>
                    </IconButton>}
                </div>

               <div>                <IconButton>
                    <Badge color="primary" badgeContent={4}>
                        <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                    </Badge>
                </IconButton>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

