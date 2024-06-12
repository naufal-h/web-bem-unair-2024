import React, { forwardRef } from "react";

import type { SelectProps } from "@mui/material/Select";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const SelectStyled = styled(Select)<SelectProps>(({ theme }) => ({
    "& .MuiSelect-select": {
        minWidth: "6rem !important",
        "&.MuiTablePagination-select": {
            minWidth: "1.5rem !important",
        },
    },
}));

const CustomSelect = forwardRef((props: SelectProps, ref) => {
    const { ...rest } = props;

    return <SelectStyled {...rest} />;
});

export default CustomSelect;
