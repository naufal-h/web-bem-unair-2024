import React, { forwardRef } from "react";

import type { SwitchProps } from "@mui/material/Switch";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const SwitchStyled = styled(Switch)<SwitchProps>(({ theme }) => ({
    "& .MuiSwitch-root": {
        width: 54,
        height: 42,
        "& .MuiSwitch-track": {
            width: 30,
            height: 18,
            opacity: 1,
            borderRadius: 30,
            backgroundColor: theme.palette.background.paper,
            border: `1px solid #7464e4`,
            transition:
                "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, background-color 0.15s ease-in-out",
        },
    },
    "& .MuiSwitch-switchBase": {
        top: 5,
        left: 6,
        padding: "0.5rem !important",
        transition:
            "left 0.15s ease-in-out, transform 0.15s ease-in-out, color 0.15s ease-in-out",
        color: `#7464e4, #7464e4`,
        "&:hover": {
            backgroundColor: "transparent !important",
        },
        "&.Mui-disabled": {
            color: `#7464e4, #7464e4`,
            "& + .MuiSwitch-track": {
                borderColor: "transparent !important",
                backgroundColor: `#7464e4, #7464e4`,
            },
            "&, & + .MuiSwitch-track": {
                opacity: 0.5,
            },
            "&.Mui-checked": {
                opacity: 0.9,
                "& + .MuiSwitch-track": {
                    opacity: 0.3,
                    boxShadow: "none",
                },
            },
        },
        "&.Mui-checked": {
            transform: "translateX(11px)",
            color: `#7464e4 !important`,
            "& + .MuiSwitch-track": {
                opacity: 1,
                boxShadow: "#7464e4",
                borderColor: "#7464e4",
                backgroundColor: "#7464e4",
            },
            "&.MuiSwitch-colorSecondary + .MuiSwitch-track": {
                borderColor: "#7464e4",
                backgroundColor: "#7464e4",
            },
            "&.MuiSwitch-colorSuccess + .MuiSwitch-track": {
                borderColor: "#7464e4",
                backgroundColor: "#7464e4",
            },
            "&.MuiSwitch-colorError + .MuiSwitch-track": {
                borderColor: "#7464e4",
                backgroundColor: "#7464e4",
            },
            "&.MuiSwitch-colorWarning + .MuiSwitch-track": {
                borderColor: "#7464e4",
                backgroundColor: "#7464e4",
            },
            "&.MuiSwitch-colorInfo + .MuiSwitch-track": {
                borderColor: "#7464e4",
                backgroundColor: "#7464e4",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        width: 12,
        height: 12,
        boxShadow: "none",
    },
    "& .MuiSwitch-sizeSmall": {
        width: 38,
        height: 30,
        "& .MuiSwitch-track": {
            width: 24,
            height: 16,
        },
        "& .MuiSwitch-thumb": {
            width: 10,
            height: 10,
        },
        "& .MuiSwitch-switchBase": {
            top: 4,
            left: 5,
            "&.Mui-checked": {
                transform: "translateX(7px)",
            },
        },
    },
}));

const CustomSwitch = forwardRef((props: SwitchProps, ref) => {
    const { ...rest } = props;

    return <SwitchStyled {...rest} />;
});

export default CustomSwitch;
