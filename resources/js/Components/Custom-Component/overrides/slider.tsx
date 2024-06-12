import React, { forwardRef } from "react";

import type { SliderProps } from "@mui/material/Slider";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SliderStyled = styled(Slider)<SliderProps>(({ theme }) => ({
    "& .MuiSlider-root": {
        "&:not(.MuiSlider-vertical)": {
            height: 6,
        },
        "&.MuiSlider-vertical": {
            width: 6,
        },
        "&.MuiSlider-colorPrimary": {
            "& .MuiSlider-thumb.Mui-active": {
                boxShadow: `0 0 0 10px #7464e4`,
            },
            "& .MuiSlider-thumbSizeSmall:hover, &.MuiSlider-sizeSmall .MuiSlider-thumb.Mui-focusVisible":
                {
                    boxShadow: `0 0 0 6px #7464e4`,
                },
            "& .MuiSlider-thumbSizeSmall.Mui-active": {
                boxShadow: `0 0 0 8px #7464e4`,
            },
        },
        "&.MuiSlider-colorSecondary": {
            "& .MuiSlider-thumb.Mui-active": {
                boxShadow: `0 0 0 10px #7464e4`,
            },
            "& .MuiSlider-thumbSizeSmall:hover, &.MuiSlider-sizeSmall .MuiSlider-thumb.Mui-focusVisible":
                {
                    boxShadow: `0 0 0 6px #7464e4`,
                },
            "& .MuiSlider-thumbSizeSmall.Mui-active": {
                boxShadow: `0 0 0 8px #7464e4`,
            },
        },
    },
    "& .MuiSlider-rail": {
        opacity: 1,
        backgroundColor: "#7464e4",
    },
    "& .MuiSlider-track": {
        border: 0,
    },
    "& .MuiSlider-thumb": {
        width: 14,
        height: 14,
        "&:before": {
            boxShadow: theme.shadows[3],
            border: `2px solid ${theme.palette.background.paper}`,
        },
        "&:not(.Mui-active):after": {
            width: 30,
            height: 30,
        },
        "&.Mui-active": {
            width: 19,
            height: 19,
            "&:before": {
                borderWidth: 3,
            },
            "&:after": {
                width: 38,
                height: 38,
            },
        },
    },
    "& .MuiSlider-sizeSmall": {
        "&:not(.MuiSlider-vertical)": {
            height: 4,
        },
        "&.MuiSlider-vertical": {
            width: 4,
        },
    },
    "& .MuiSlider-thumbSizeSmall": {
        width: 12,
        height: 12,
        "&:before": {
            boxShadow: theme.shadows[2],
        },
        "&:not(.Mui-active):after": {
            width: 24,
            height: 24,
        },
        "&.Mui-active": {
            width: 14,
            height: 14,
            "&:before": {
                borderWidth: 2,
            },
            "&:after": {
                width: 30,
                height: 30,
            },
        },
    },
    "& .MuiSlider-valueLabel": {
        borderRadius: 4,
        padding: theme.spacing(1, 2),
        backgroundColor: "#7464e4",

        "&:before": {
            display: "none",
        },
        "& .MuiSlider-valueLabelCircle": {
            lineHeight: "normal",
        },
    },
    "& .MuiSlider-markLabel": {
        color: theme.palette.text.disabled,
    },
}));

const CustomSlider = forwardRef((props: SliderProps, ref) => {
    const { ...rest } = props;

    return <SliderStyled {...rest} />;
});

export default CustomSlider;
