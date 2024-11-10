const { createTheme } = require("@mui/material");

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            main: "#0000000",
            default: "#0D0D0D",
            paper: "#0D0D0D",
        },
        textColor: {
            main: "#FFFFFF",
            secondary: "#FFFFFF",
        },
    },
});