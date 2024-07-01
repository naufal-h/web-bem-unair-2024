import {
    ListItemAvatar,
    ListItemAvatarProps,
    ListItemButton,
    ListItemButtonProps,
    ListItemIcon,
    ListItemIconProps,
    ListItemText,
    ListItemTextProps,
    ListSubheader,
    ListSubheaderProps,
    StyledEngineProvider,
    styled,
} from "@mui/material";
import React, { forwardRef } from "react";
import { hexToRGBA } from "./utils/hex-to-rgba";

const ListItemButtonStyled = styled(ListItemButton)<ListItemButtonProps>(
    ({ theme }) => ({
        ".MuiListItemButton-root": {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            "&:hover": {
                backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
                "& .MuiListItemIcon-root, & .MuiListItemText-primary, & .MuiListItemText-secondary, & .MuiListItemSecondaryAction-root .MuiIconButton-root":
                    {
                        color: theme.palette.primary.main,
                    },
            },
            "&.Mui-selected, &.Mui-selected:hover": {
                color: theme.palette.common.white,
                backgroundColor: theme.palette.primary.main,
                "& .MuiListItemIcon-root, & .MuiListItemText-primary, & .MuiListItemText-secondary, & .MuiListItemSecondaryAction-root .MuiIconButton-root":
                    {
                        color: theme.palette.common.white,
                    },
            },
        },
    })
);

const ListItemIconStyled = styled(ListItemIcon)<ListItemIconProps>(
    ({ theme }) => ({
        ".MuiListItemIcon-root": {
            minWidth: "0 !important",
            marginRight: theme.spacing(2.25),
            color: theme.palette.text.primary,
        },
    })
);

const ListItemAvatarStyled = styled(ListItemAvatar)<ListItemAvatarProps>(
    ({ theme }) => ({
        ".MuiListItemAvatar-root": {
            minWidth: "0 !important",
            marginRight: theme.spacing(4),
        },
    })
);

const ListItemTextStyled = styled(ListItemText)<ListItemTextProps>(
    ({ theme }) => ({
        ".MuiListItemText-root": {
            marginTop: theme.spacing(0.5),
            marginBottom: theme.spacing(0.5),
        },
        ".MuiListItemText-dense": {
            "& .MuiListItemText-primary": {
                color: theme.palette.text.primary,
            },
        },
    })
);

const ListSubheaderStyled = styled(ListSubheader)<ListSubheaderProps>(
    ({ theme }) => ({
        ".MuiListSubheader-root": {
            textTransform: "uppercase",
            color: theme.palette.text.disabled,
        },
    })
);


const ListItemButtonCustom = forwardRef((props: ListItemButtonProps, ref) => {
    return <ListItemButtonStyled {...props} />;
})

const ListItemIconCustom = forwardRef((props: ListItemIconProps, ref) => {
    return <ListItemIconStyled {...props} />;
})

const ListItemAvatarCustom = forwardRef((props: ListItemAvatarProps, ref) => {
    return <ListItemAvatarStyled {...props} />;
})

const ListItemTextCustom = forwardRef((props: ListItemTextProps, ref) => {
    return <ListItemTextStyled {...props} />;
})

const ListSubheaderCustom = forwardRef((props: ListSubheaderProps, ref) => {
    return <ListSubheaderStyled {...props} />;
})

export {
    ListItemButtonCustom,
    ListItemIconCustom,
    ListItemAvatarCustom,
    ListItemTextCustom,
    ListSubheaderCustom
};