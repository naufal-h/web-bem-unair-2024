import React, { forwardRef } from "react";

import type { TypographyProps } from "@mui/material/Typography";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { OwnerStateThemeType } from "./";
const TypographyStyled = styled(Typography)<TypographyProps>(({ theme }) => ({
    "& .MuiTypography-gutterBottom": {
        marginBottom: theme.spacing(2),
    },
    variants: [
        {
            props: { variant: "h1" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "h2" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "h3" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "h4" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "h5" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "h6" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "subtitle1" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "subtitle2" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.secondary,
            }),
        },
        {
            props: { variant: "body1" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "body2" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.secondary,
            }),
        },
        {
            props: { variant: "button" },
            style: ({ theme }: OwnerStateThemeType) => ({
                textTransform: "none",
                color: theme.palette.text.primary,
            }),
        },
        {
            props: { variant: "caption" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.secondary,
            }),
        },
        {
            props: { variant: "overline" },
            style: ({ theme }: OwnerStateThemeType) => ({
                color: theme.palette.text.secondary,
            }),
        },
    ],
}));

const CustomTypography = forwardRef((props: TypographyProps, ref) => {
    const { ...rest } = props;

    return <TypographyStyled {...rest} />;
});

export default CustomTypography;
