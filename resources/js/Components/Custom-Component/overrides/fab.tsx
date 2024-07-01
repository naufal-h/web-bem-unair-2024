// import { OwnerStateThemeType } from './'

// const FabButton = () => {
//   return {
//     MuiFab: {
//       styleOverrides: {
//         default: ({ theme }: OwnerStateThemeType) => ({
//           color: theme.palette.text.primary
//         })
//       }
//     }
//   }
// }

// export default FabButton


import { Fab, FabProps, styled } from "@mui/material";
import React, { forwardRef } from "react";

const FabButtonStyled = styled(Fab)<FabProps>(({ theme }) => ({
  ".MuiFab-root":{
    color: theme.palette.text.primary
  }
}))

const CustomFab = forwardRef((props: FabProps, ref) => {
  const { ...rest } = props;

  return <FabButtonStyled {...rest} />;
});

export default CustomFab