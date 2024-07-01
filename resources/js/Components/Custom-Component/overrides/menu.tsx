import { Menu, MenuItem, MenuItemProps, MenuProps, styled } from "@mui/material";
import React, { forwardRef } from "react";
import { hexToRGBA } from "./utils/hex-to-rgba";

const MenuStyled = styled(Menu)<MenuProps>(({ theme }) => ({
  ".MuiMenu-paper": {
    '& .MuiMenuItem-root .MuiCheckbox-root.Mui-checked path:first-of-type': {
      fill: theme.palette.common.white
    },
    '& .MuiMenuItem-root .MuiCheckbox-root.Mui-checked path:last-of-type': {
      fill: theme.palette.primary.main,
      stroke: theme.palette.primary.main
    }
  }
}))


const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  ".MuiMenuItem-root": {
    padding: theme.spacing(2, 4),
    margin: theme.spacing(0, 2, 1),
    borderRadius: theme.shape.borderRadius,
    '&:last-child': {
      marginBottom: 0
    },
    '&:not(.Mui-focusVisible):hover': {
      color: theme.palette.primary.main,
      backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
      '& .MuiListItemIcon-root, & .MuiListItemText-primary, & .MuiListItemText-secondary, & .MuiListItemSecondaryAction-root .MuiIconButton-root':
      {
        color: theme.palette.primary.main
      }
    },
    '&.Mui-selected': {
      color: `${theme.palette.common.white} !important`,
      backgroundColor: `${theme.palette.primary.main} !important`,
      '&.Mui-focusVisible': {
        backgroundColor: `${theme.palette.primary.dark} !important`
      },
      '& .MuiListItemIcon-root, & .MuiListItemText-primary, & .MuiListItemText-secondary, & .MuiListItemSecondaryAction-root .MuiIconButton-root':
      {
        color: `${theme.palette.common.white} !important`
      }
    }
  }

  // defaultProps: {
  //   disableRipple: true
  // }
}))


const MenuCustom = forwardRef((props, ref) => {
  return <MenuStyled  open={false} {...props} />;
});

const MenuItemCustom = forwardRef((props, ref) => {
  return <MenuItemStyled  {...props} />;
});