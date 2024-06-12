import React, { forwardRef } from "react";

import type { TableProps } from "@mui/material/Table";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";

const TableStyled = styled(Table)<TableProps>(({ theme }) => ({
    "& MuiTableContainer-root": {
        boxShadow: "#7464e4",
        borderTopColor: "#7464e4",
    },
    "& MuiTableHead-root": {
        textTransform: "uppercase",
        "& .MuiTableCell-head": {
            fontWeight: 500,
            letterSpacing: "1px",
        },
    },
    "& MuiTableBody-root": {
        "& .MuiTableCell-body": {
            letterSpacing: "0.25px",
            color: "#7464e4",
            "&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)":
                {
                    paddingTop: "3.5rem",
                    paddingBottom: "3.5rem",
                },
        },
    },
    "& MuiTableRow-root": {
        "& .MuiTableCell-head:not(.MuiTableCell-paddingCheckbox):first-child, & .MuiTableCell-root:not(.MuiTableCell-paddingCheckbox):first-child ":
            {
                paddingLeft: "6rem",
            },
        "& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child": {
            paddingRight: "6rem",
        },
    },
    "& MuiTableCell-root": {
        borderBottom: `1px solid #7464e4`,
    },
    "& MuiTableCell-paddingCheckbox": {
        paddingLeft: "3.25rem",
    },
    "& MuiTableCell-stickyHeader": {
        backgroundColor: "#7464e4",
    },
}));

const CustomTable = forwardRef((props: TableProps, ref) => {
    const { ...rest } = props;

    return <TableStyled {...rest} />;
});

export default CustomTable;
