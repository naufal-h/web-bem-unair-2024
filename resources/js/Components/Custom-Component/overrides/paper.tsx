// React Imports
import React, { forwardRef } from "react";

// MUI Imports
import type { PaperProps } from "@mui/material/Paper";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const PaperStyled = styled(Paper)<PaperProps>(({ theme }) => ({
    "&.MuiPaper-root": {
        backgroundImage: "none",
    },
}));

const CustomPaper = forwardRef((props: PaperProps, ref) => {
    const { ...rest } = props;

    return <PaperStyled {...rest} />;
});

export default CustomPaper;
