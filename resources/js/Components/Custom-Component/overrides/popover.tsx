import React, { forwardRef } from "react";

import type { PopoverProps } from "@mui/material/Popover";
import Popover from "@mui/material/Popover";
import { styled } from "@mui/material/styles";

const PopoverStyled = styled(Popover)<PopoverProps>(({ theme }) => ({
    "&.MuiPopover-paper": {
        boxShadow: "#7464e4",
        border: `1px solid #7464e4`,
    },
}));

const CustomPopover = forwardRef((props: PopoverProps, ref) => {
    const { ...rest } = props;

    return <PopoverStyled {...rest} />;
});

export default CustomPopover;
