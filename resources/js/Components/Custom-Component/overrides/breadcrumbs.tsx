import { Breadcrumbs as MuiBreadcrumbs, BreadcrumbsProps, styled } from '@mui/material';
// // import { OwnerStateThemeType } from '.';
import { forwardRef } from 'react';

const BreadcrumbsStyled = styled(MuiBreadcrumbs)<BreadcrumbsProps>(({ theme }) => ({
  '& a': {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  '& li': {
    color: theme.palette.text.primary,
    '& .MuiTypography-root': {
      color: 'inherit',
    },
  },
}));

const CustomBreadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>((props, ref) => {
  return <BreadcrumbsStyled ref={ref} {...props} />;
});

export default CustomBreadcrumbs;
