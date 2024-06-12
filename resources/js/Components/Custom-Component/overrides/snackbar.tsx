import React, { forwardRef } from "react";

import type { SnackbarProps } from "@mui/material/Snackbar";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";

const SnackbarStyled = styled(Snackbar)<SnackbarProps>(({ theme }) => ({
    "& .MuiSnackbarContent-root": {
        boxShadow: "none",
        backgroundColor: "#7464e4",
        color: "#7464e4",
    },
}));

const CustomSnackbar = forwardRef((props: SnackbarProps, ref) => {
    const { ...rest } = props;

    return <SnackbarStyled {...rest} />;
});

export default CustomSnackbar;
