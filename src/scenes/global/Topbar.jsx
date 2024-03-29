import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import useTheme from "@mui/material/styles/useTheme";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
    return (
        <Box display={"flex"} justifyContent={"space-between"} p={2}>
            <Box display={"flex"} backgroundColor={colors.primary[400]} borderRadius={2} p={1}>
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                <IconButton sx={{ display: "flex" }}>
                    <SearchIcon />
                </IconButton>
            </Box>
            <Box display={"flex"}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {colors === 'dark' ? (
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon />
                    )}

                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>

        </Box>
    )
}

export default Topbar