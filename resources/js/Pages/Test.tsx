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
    Divider,
    Drawer,
    FormControl,
    Icon,
    IconButton,
    InputLabel,
    LinearProgress,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    MenuItem,
    Rating,
    Select,
    Slider,
    Switch,
    Tooltip,
    Typography,
} from "@mui/material";
import { List, Trash } from "react-feather";
import CustomDataGrid from "@/Components/Custom-Component/overrides/dataGrid";
import CustomDivider from "@/Components/Custom-Component/overrides/divider";

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
            ></Chip>

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
