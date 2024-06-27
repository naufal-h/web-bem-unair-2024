import CustomAccordion from "@/Components/Custom-Component/overrides/accordion";
import CustomChip from "@/Components/Custom-Component/overrides/chip";
import CustomLinearProgress from "@/Components/Custom-Component/overrides/progress";
import CustomRating from "@/Components/Custom-Component/overrides/rating";
import CustomSelect from "@/Components/Custom-Component/overrides/select";
import CustomSlider from "@/Components/Custom-Component/overrides/slider";
import CustomSwitch from "@/Components/Custom-Component/overrides/switches";
import Avatar from "@mui/material/Avatar";
import CustomTooltip from "@/Components/Custom-Component/overrides/tooltip";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import CustomDialog, {
    CustomDialogActions,
    CustomDialogContent,
    CustomDialogTitle,
} from "@/Components/Custom-Component/overrides/dialog";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Chip,
    CircularProgress,
    Divider,
    Drawer,
    FormControl,
    Icon,
    IconButton,
    InputLabel,
    LinearProgress,
    Link,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Rating,
    Select,
    Slider,
    Switch,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import { List, Trash } from "react-feather";
import CustomDataGrid from "@/Components/Custom-Component/overrides/dataGrid";
import CustomDivider from "@/Components/Custom-Component/overrides/divider";
import CustomAlert from "@/Components/Custom-Component/overrides/alerts";
import AutocompleteCustom from "@/Components/Custom-Component/overrides/autocomplete";
import CustomAvatar from "@/Components/Custom-Component/overrides/avatars";
import BackdropCustom from "@/Components/Custom-Component/overrides/backdrop";
import CustomBadge from "@/Components/Custom-Component/overrides/badge";
import CustomBreadcrumbs from "@/Components/Custom-Component/overrides/breadcrumbs";
import CardWithCollapse from "@/Components/Custom-Component/overrides/cards/CardWithCollapse";
import CheckboxesBasic from "@/Components/Custom-Component/overrides/checkboxs/BasicCheckbox";
import CheckboxesCustomIcons from "@/Components/Custom-Component/overrides/checkboxs/IconCheckbox";
import ChipsColors from "@/Components/Custom-Component/overrides/chips/ChipsColors";
import ChipsOnDelete from "@/Components/Custom-Component/overrides/chips/ChipsOnDelete";

const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
        label: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
        label: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
    },
    {
        label: "Star Wars: Episode V - The Empire Strikes Back",
        year: 1980,
    },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    {
        label: "The Lord of the Rings: The Two Towers",
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: "Goodfellas", year: 1990 },
    { label: "The Matrix", year: 1999 },
    { label: "Seven Samurai", year: 1954 },
    {
        label: "Star Wars: Episode IV - A New Hope",
        year: 1977,
    },
    { label: "City of God", year: 2002 },
    { label: "Se7en", year: 1995 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "The Usual Suspects", year: 1995 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "Once Upon a Time in the West", year: 1968 },
    { label: "American History X", year: 1998 },
    { label: "Interstellar", year: 2014 },
    { label: "Casablanca", year: 1942 },
    { label: "City Lights", year: 1931 },
    { label: "Psycho", year: 1960 },
    { label: "The Green Mile", year: 1999 },
    { label: "The Intouchables", year: 2011 },
    { label: "Modern Times", year: 1936 },
    { label: "Raiders of the Lost Ark", year: 1981 },
    { label: "Rear Window", year: 1954 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Terminator 2: Judgment Day", year: 1991 },
    { label: "Back to the Future", year: 1985 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "Memento", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "Alien", year: 1979 },
    { label: "Sunset Boulevard", year: 1950 },
    {
        label: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        year: 1964,
    },
    { label: "The Great Dictator", year: 1940 },
    { label: "Cinema Paradiso", year: 1988 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Grave of the Fireflies", year: 1988 },
    { label: "Paths of Glory", year: 1957 },
    { label: "Django Unchained", year: 2012 },
    { label: "The Shining", year: 1980 },
    { label: "WALL·E", year: 2008 },
    { label: "American Beauty", year: 1999 },
    { label: "The Dark Knight Rises", year: 2012 },
    { label: "Princess Mononoke", year: 1997 },
    { label: "Aliens", year: 1986 },
    { label: "Oldboy", year: 2003 },
    { label: "Once Upon a Time in America", year: 1984 },
    { label: "Witness for the Prosecution", year: 1957 },
    { label: "Das Boot", year: 1981 },
    { label: "Citizen Kane", year: 1941 },
    { label: "North by Northwest", year: 1959 },
    { label: "Vertigo", year: 1958 },
    {
        label: "Star Wars: Episode VI - Return of the Jedi",
        year: 1983,
    },
    { label: "Reservoir Dogs", year: 1992 },
    { label: "Braveheart", year: 1995 },
    { label: "M", year: 1931 },
    { label: "Requiem for a Dream", year: 2000 },
    { label: "Amélie", year: 2001 },
    { label: "A Clockwork Orange", year: 1971 },
    { label: "Like Stars on Earth", year: 2007 },
    { label: "Taxi Driver", year: 1976 },
    { label: "Lawrence of Arabia", year: 1962 },
    { label: "Double Indemnity", year: 1944 },
    {
        label: "Eternal Sunshine of the Spotless Mind",
        year: 2004,
    },
    { label: "Amadeus", year: 1984 },
    { label: "To Kill a Mockingbird", year: 1962 },
    { label: "Toy Story 3", year: 2010 },
    { label: "Logan", year: 2017 },
    { label: "Full Metal Jacket", year: 1987 },
    { label: "Dangal", year: 2016 },
    { label: "The Sting", year: 1973 },
    { label: "2001: A Space Odyssey", year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: "Toy Story", year: 1995 },
    { label: "Bicycle Thieves", year: 1948 },
    { label: "The Kid", year: 1921 },
    { label: "Inglourious Basterds", year: 2009 },
    { label: "Snatch", year: 2000 },
    { label: "3 Idiots", year: 2009 },
    { label: "Monty Python and the Holy Grail", year: 1975 },
];

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 110,
        editable: true,
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (value, row) =>
            `${row.firstName || ""} ${row.lastName || ""}`,
    },
];

const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Test = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
            <Divider />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Divider>Accordion</Divider>
            <CustomAccordion
                sx={{
                    marginBottom: 2,
                }}
            >
                <AccordionSummary
                    id="panel-header-1"
                    aria-controls="panel-content-1"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                        Wafer sesame snaps chocolate bar candy canes halvah.
                        Cupcake sesame snaps sweet tart dessert biscuit. Topping
                        soufflé tart sweet croissant.
                    </Typography>
                </AccordionDetails>
            </CustomAccordion>

            <Accordion
                sx={{
                    marginBottom: 2,
                }}
            >
                <AccordionSummary
                    id="panel-header-1"
                    aria-controls="panel-content-1"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ color: "text.secondary" }}>
                        Wafer sesame snaps chocolate bar candy canes halvah.
                        Cupcake sesame snaps sweet tart dessert biscuit. Topping
                        soufflé tart sweet croissant.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Divider>Alerts</Divider>

            <CustomAlert severity="success">This is Succes Alert</CustomAlert>
            <CustomAlert severity="info">This is Info Alert</CustomAlert>
            <CustomAlert severity="warning">This is Warning Alert</CustomAlert>
            <CustomAlert severity="error">This is error Alert</CustomAlert>
            <Divider>Auto Complete</Divider>
            <AutocompleteCustom
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                )}
            />
            <Divider>Avatar</Divider>
            <CustomAvatar color="success"> R </CustomAvatar>
            <CustomAvatar color="bemPrimary"> H </CustomAvatar>
            <CustomAvatar> D </CustomAvatar>
            <Divider>Backdrop</Divider>
            <Button onClick={handleClickOpen}>Show backdrop</Button>
            <BackdropCustom
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </BackdropCustom>
            <Divider>Badge</Divider>

            <CustomBadge color="primary" badgeContent={4}>
                <MailIcon />
            </CustomBadge>
            <CustomBadge
                color="secondary"
                badgeContent={4}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <MailIcon />
            </CustomBadge>
            <Divider>Breadcrumb</Divider>
            <CustomBreadcrumbs aria-label="breadcrumb">
                <Link href="/" color="inherit">
                    Home
                </Link>
                <Link href="/category" color="inherit">
                    Category
                </Link>
                <Typography color="textPrimary">Current Page</Typography>
            </CustomBreadcrumbs>
            <Divider>Button Group</Divider>
            <Divider>Button</Divider>
            <Divider>Card</Divider>
            <Box sx={{ 
                width: 300,
             }}>
            <CardWithCollapse />
            </Box>
            <Divider>Checkbox</Divider>
            <h1>Checkbox Basic</h1>
            <CheckboxesBasic />
            <h1>Checkbox Icon</h1>
            <CheckboxesCustomIcons/>
            <Divider>Progress</Divider>
            <CustomLinearProgress
                color="secondary"
                sx={{
                    marginBottom: 2,
                }}
            />

            <LinearProgress
                color="secondary"
                sx={{
                    marginBottom: 2,
                }}
            />

            <Divider>Rating</Divider>
            <Box
                sx={{
                    "& > legend": { mt: 2 },
                    marginBottom: 2,
                }}
            >
                <Typography component="legend">Controlled</Typography>
                <CustomRating name="simple-controlled" value={3} />
                <Typography component="legend">Read only</Typography>
                <CustomRating name="read-only" value={2} readOnly />
                <Typography component="legend">Disabled</Typography>
                <CustomRating name="disabled" value={5} disabled />
                <Typography component="legend">No rating given</Typography>
                <CustomRating name="no-value" value={null} />
            </Box>

            <Box
                sx={{
                    "& > legend": { mt: 2 },
                    marginBottom: 2,
                }}
            >
                <Typography component="legend">Controlled</Typography>
                <Rating name="simple-controlled" value={3} />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={2} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={5} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Box>

            <Divider>Select</Divider>

            <FormControl
                sx={{
                    marginBottom: 2,
                }}
            >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <CustomSelect
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </CustomSelect>
            </FormControl>

            <FormControl
                sx={{
                    marginBottom: 2,
                }}
            >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={10}
                    label="Age"
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <Divider>Slider</Divider>

            <CustomSlider aria-label="Volume" value={69} />

            <Slider aria-label="Volume" value={69} />

            <Divider>Switch</Divider>

            <CustomSwitch defaultChecked />

            <Switch defaultChecked />

            <Divider>Chip</Divider>
            <ChipsColors/>
            <ChipsOnDelete/>
{/* 
            <CustomChip
                label="custom"
                variant="outlined"
                avatar={<Avatar>M</Avatar>}
                onDelete={() => console.log("click")}
                color="bemSecondary"
            ></CustomChip>

            <Chip
                label="default"
                variant="outlined"
                avatar={<Avatar>M</Avatar>}
                onDelete={() => console.log("click")}
            ></Chip> */}

            <Divider>Data grid</Divider>
            <h1>Data grid default</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />

            <h1>Data grid custom</h1>
            <CustomDataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />

            <Divider>Dialog</Divider>
            <h1>Default dialog</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means
                            sending anonymous location data to Google, even when
                            no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>

            <h1>Custom dialog</h1>
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <CustomDialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <CustomDialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </CustomDialogTitle>
                    <CustomDialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means
                            sending anonymous location data to Google, even when
                            no apps are running.
                        </DialogContentText>
                    </CustomDialogContent>
                    <CustomDialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </CustomDialogActions>
                </CustomDialog>
            </React.Fragment>

            <Divider>Divider default</Divider>

            <CustomDivider>Divider default</CustomDivider>

            <Divider>Drawer</Divider>
            <div>
                <Button onClick={toggleDrawer(true)}>Open drawer</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
            </div>
        </>
    );
};

export default Test;
