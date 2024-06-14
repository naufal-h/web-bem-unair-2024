// import

import { Drawer, styled } from "@mui/material";
import { forwardRef } from "react";
import type { DrawerProps } from "@mui/material/Drawer";



const DrawerStyled = styled(Drawer)<DrawerProps>(({ theme }) => ({
  ".&.MuiDrawer-paper": {
    boxShadow: theme.shadows['default' ? 7 : 0]
  }
}));

const CustomDrawer = forwardRef((props: DrawerProps, ref) => {
  const { ...rest } = props;
  return <DrawerStyled {...rest} />;
});

export default CustomDrawer;

