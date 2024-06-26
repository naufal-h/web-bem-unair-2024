import { Card as MuiCard, CardProps, styled } from '@mui/material';
import { forwardRef } from 'react';
import { OwnerStateThemeType } from '.';

const CardStyled = styled(MuiCard)<CardProps>(({ theme }) => ({
  ...('bordered' && { border: `1px solid ${theme.palette.divider}` }),
  '& .card-more-options': {
    marginTop: theme.spacing(-1),
    marginRight: theme.spacing(-3),
  },
  '& .MuiTableContainer-root, & .MuiDataGrid-root, & .MuiDataGrid-columnHeaders': {
    borderRadius: 0,
  },
}));

const CardHeaderStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(6),
  '& + .MuiCardContent-root, & + .MuiCardActions-root, & + .MuiCollapse-root .MuiCardContent-root': {
    paddingTop: 0,
  },
  '& .MuiCardHeader-subheader': {
    marginTop: theme.spacing(0.5),
    color: theme.palette.text.disabled,
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
  },
  '& .MuiCardHeader-title': {
    fontWeight: 500,
    lineHeight: 1.334,
    letterSpacing: '0.15px',
    fontSize: theme.typography.h5.fontSize,
  },
  '& .MuiCardHeader-action': {
    marginTop: 0,
    marginRight: 0,
  },
}));

const CardContentStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(6),
  '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
    paddingTop: 0,
  },
  '&:last-of-type': {
    paddingBottom: theme.spacing(6),
  },
}));

const CardActionsStyled = styled('div')(({ theme }) => ({
  padding: theme.spacing(6),
  '& .MuiButton-text': {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  '&.card-action-dense': {
    padding: theme.spacing(0, 3, 3),
    '.MuiCard-root .MuiCardMedia-root + &': {
      paddingTop: theme.spacing(3),
    },
  },
  '.MuiCard-root &:first-of-type': {
    paddingTop: theme.spacing(3),
    '& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root': {
      paddingTop: 0,
    },
  },
}));

const CustomCard = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  return <CardStyled ref={ref} {...props} />;
});

export default CustomCard;
