import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
// import { Link } from "@inertiajs/react";

const pages = [
    { name: "BERANDA", href: "/" },
    { name: "TENTANG KAMI", href: "/About" },
    { name: "ARTIKEL", href: "/artikel" },
    { name: "SOP", href: "#" },
    { name: "FORM GENERATOR", href: "/form/create" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="/images/logo/logo.png"
                        sx={{
                            height: "100px",
                            overflow: "hidden",
                            display: { xs: "none", md: "flex" },
                            marginRight: 2,
                        }}
                    />

                    {/* Burger menu */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            component="img"
                            src="/images/logo/logo.png"
                            sx={{
                                height: "100px",
                                display: { xs: "flex", md: "none" },
                            }}
                        />
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography
                                        component={Link}
                                        href={page.href}
                                        sx={{
                                            fontFamily: "Open Sans",
                                            textDecoration: "none",
                                            color: "inherit",
                                        }}
                                        textAlign="center"
                                    >
                                        {page.name}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Normal display */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page) => (
                            <Link key={page.name} href={page.href} sx={{
                                        fontWeight: "medium",
                                        fontSize: "1rem",
                                        fontFamily: "Open Sans",
                                        my: 2,
                                        // mx: 3,
                                        color: "black",
                                        display: "block",
                                        textDecoration: 'none',
                                        paddingX:"28px"
                                    }}>
                                        {page.name}   
                            </Link>
                        ))}
                        

                        {/* <Link href="/form/create" sx={{ 
                            textDecoration: 'none',
                            color: 'black',
                         }}> Testtt</Link>  */}
                        {/* {pages.map((page) => (
                            <Link key={page.name} href={page.href} style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        fontWeight: "medium",
                                        fontSize: "1rem",
                                        fontFamily: "Open Sans",
                                        my: 2,
                                        mx: 3,
                                        color: "black",
                                        display: "block",
                                    }}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))} */}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "center",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        {setting}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
