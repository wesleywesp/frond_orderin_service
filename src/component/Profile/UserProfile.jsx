
import { logout } from "../../State/Authentication/Action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

const UserProfile = () => {
    const { auth } = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Usando o hook useNavigate

    const handleLogout = () => {
        dispatch(logout());
        navigate("/"); // Usando navigate para redirecionar após logout
    };

    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <div className="flex flex-col items-center justify-center">
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className="py-5 text-2xl font-semibold">{auth.user.fullname
                }</h1>
                <p>{auth.user.email}</p>
                <Button onClick={handleLogout} variant="contained" fullWidth sx={{ margin: "1rem 0" }} >
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default UserProfile;

