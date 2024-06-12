import React, { forwardRef } from "react";

import type { TooltipProps } from "@mui/material/Tooltip";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const TooltipStyled = styled(Tooltip)<TooltipProps>(({ theme }) => ({
    "& .MuiTooltip-tooltip": {
        padding: "1rem 3rem",
        backgroundColor: "#7464e4 !important",
    },
    "& .MuiTooltip-arrow": {
        color: "#7464e4 !important",
    },
}));

const CustomTooltip = forwardRef((props: TooltipProps, ref) => {
    const { ...rest } = props;

    return <TooltipStyled {...rest} />;
});

export default CustomTooltip;
