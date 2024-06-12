import React, { forwardRef } from "react";

import type { LinearProgressProps } from "@mui/material/LinearProgress";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const LinearProgressStyled = styled(LinearProgress)<LinearProgressProps>(
    ({ theme }) => ({
        "&.MuiLinearProgress-root": {
            height: 12,
            borderRadius: "10px",
            backgroundColor: "#7464e4",
            "& .MuiLinearProgress-dashed": {
                marginTop: "1rem",
            },
        },
        "&.MuiLinearProgress-bar": {
            borderRadius: "10px",
        },
    })
);

const CustomLinearProgress = forwardRef((props: LinearProgressProps, ref) => {
    const { ...rest } = props;

    return <LinearProgressStyled {...rest} />;
});

export default CustomLinearProgress;
