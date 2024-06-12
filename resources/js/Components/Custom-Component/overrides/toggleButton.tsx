import React, { forwardRef } from "react";

import type { ToggleButtonProps } from "@mui/material/ToggleButton";
import ToggleButton from "@mui/material/ToggleButton";
import { styled } from "@mui/material/styles";

const ToggleButtonStyled = styled(ToggleButton)<ToggleButtonProps>(
    ({ theme }) => ({
        "& .MuiToggleButtonGroup-root": {
            borderRadius: 4,
        },
        "& .MuiToggleButton-root": {
            borderRadius: 4,
        },
    })
);

const CustomToggleButton = forwardRef((props: ToggleButtonProps, ref) => {
    const { ...rest } = props;

    return <ToggleButtonStyled {...rest} />;
});

export default CustomToggleButton;
