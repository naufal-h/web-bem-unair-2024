import CustomAccordion from "@/Components/Custom-Component/overrides/accordion";
import CustomLinearProgress from "@/Components/Custom-Component/overrides/progress";
import CustomRating from "@/Components/Custom-Component/overrides/rating";
import CustomSelect from "@/Components/Custom-Component/overrides/select";
import CustomSlider from "@/Components/Custom-Component/overrides/slider";
import CustomSwitch from "@/Components/Custom-Component/overrides/switches";
import CustomTooltip from "@/Components/Custom-Component/overrides/tooltip";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    FormControl,
    Icon,
    IconButton,
    InputLabel,
    LinearProgress,
    MenuItem,
    Rating,
    Select,
    Slider,
    Switch,
    Tooltip,
    Typography,
} from "@mui/material";
import { Trash } from "react-feather";

const Test = () => {
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
        </>
    );
};

export default Test;
