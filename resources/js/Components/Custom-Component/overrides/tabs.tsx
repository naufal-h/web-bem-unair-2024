import React, { forwardRef } from "react";

import type { TabsProps } from "@mui/material/Tabs";
import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

const TabsStyled = styled(Tabs)<TabsProps>(({ theme }) => ({
    "& .MuiTabs-root": {
        minHeight: 38,
        "&:not(.MuiTabs-vertical)": {
            borderBottom: `1px solid #7464e4`,
        },
    },
    "& .MuiTabs-vertical": {
        minWidth: 130,
        marginRight: theme.spacing(4),
        borderRight: `1px solid #7464e4`,
        "& .MuiTab-root": {
            minWidth: 130,
        },
    },
    "& .MuiTab-root": {
        minHeight: 38,
        textTransform: "none",
        padding: "1.75rem 5rem",
    },
    "& .MuiTab-textColorSecondary": {
        "&.Mui-selected": {
            color: "#7464e4",
        },
    },
    "& .MuiTabPanel-root": {
        padding: theme.spacing(6),
    },
}));

const CustomTabs = forwardRef((props: TabsProps, ref) => {
    const { ...rest } = props;

    return <TabsStyled {...rest} />;
});

export default CustomTabs;
