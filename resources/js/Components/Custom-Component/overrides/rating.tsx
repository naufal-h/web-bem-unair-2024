import React, { forwardRef } from "react";

import type { RatingProps } from "@mui/material/Rating";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";

const RatingStyled = styled(Rating)<RatingProps>(({ theme }) => ({
    "&.MuiRating-root": {
        color: "#7464e4",
        "& svg": {
            flexShrink: 0,
        },
    },
}));

const CustomRating = forwardRef((props: RatingProps, ref) => {
    const { ...rest } = props;

    return <RatingStyled {...rest} />;
});

export default CustomRating;
