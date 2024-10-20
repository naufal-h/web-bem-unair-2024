import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const pages = [
    { name: "BERANDA", href: "/" },
    { name: "TENTANG KAMI", href: "/About" },
    { name: "ARTIKEL", href: "/artikel" },
    { name: "SOP", href: "/Sop" },
    { name: "STRUKTUR ORGANISASI", href: "/Struktur" },
    { name: "FORM", href: "/form/create" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const drawerList = () => (
        <Box
        sx={{ width: 256, padding: '0' }}
        role="presentation"
        onKeyDown={toggleDrawer(false)}
    >
        {/* Close Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2, height: '56px' }}>
            <IconButton sx={{ padding: '0' }} onClick={toggleDrawer(false)}>
                <CloseIcon sx={{padding: '0', color: 'black' }} />
            </IconButton>
        </Box>
        
        <List>
            {pages.map((page) => (
                <ListItem sx={
                    {
                        height: '40px',
                    }
                } button key={page.name} component="a" href={page.href} onClick={toggleDrawer(false)}>
                    <ListItemText primary={page.name} />
                </ListItem>
            ))}
        </List>
    </Box>
    );

    return (
        <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="/images/logo/logo.png"
                        sx={{
                            height: "130px",
                            overflow: "hidden",
                            display: { xs: "none", md: "flex" },
                            marginRight: 2,
                        }}
                    />

                    {/* Burger menu (Drawer) */}
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
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={isDrawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {drawerList()}
                        </Drawer>
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
                            <Link
                                key={page.name}
                                href={page.href}
                                sx={{
                                    fontWeight: "medium",
                                    fontSize: "1rem",
                                    fontFamily: "Open Sans",
                                    my: 2,
                                    color: "black",
                                    display: "block",
                                    textDecoration: 'none',
                                    paddingX: "28px",
                                    transition: "all 0.3s ease",
                                    '&:hover': {
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
