import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@mui/material";

const UserProfile = () => {
    const handleLogout = () => {
        // Lógica de logout aqui
    }

    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className="py-5 text-2xl font-semibold">Home</h1>
                <p>Wesleywesp@gmail.com</p>
                <Button onClick={handleLogout} variant="contained" fullWidth sx={{ margin: "1rem 0" }} >
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default UserProfile;
