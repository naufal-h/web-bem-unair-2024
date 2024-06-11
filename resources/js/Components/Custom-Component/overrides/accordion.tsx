import { Accordion, AccordionProps, styled } from '@mui/material';
import { OwnerStateThemeType } from '.';
import { forwardRef } from 'react';

const AccordionStyled = styled(Accordion)<AccordionProps>(({ theme }) => ({
  margin: theme.spacing(2, 0),
  '&:before': { display: 'none' },
  borderRadius: theme.shape.borderRadius,
  transition: 'box-shadow .35s ease, margin .35s ease',
  boxShadow: theme.shadows['bordered' ? 0 : 2],
  ...('bordered' && { border: `1px solid ${theme.palette.divider}` }),
  '&.Mui-disabled': {
    backgroundColor: `rgba(116,100,228, 0.12)`,
  },
  '&.Mui-expanded': {
    margin: theme.spacing(2, 0),
    boxShadow: theme.shadows['bordered' ? 0 : 7],
  },
  '& .MuiCollapse-root': {
    minHeight: 'unset !important',
    transition: 'height .35s ease !important',
    '&.MuiCollapse-entered': {
      height: 'auto !important',
    },
  },
  '& .MuiAccordionSummary-root': {
    fontWeight: 500,
    borderRadius: 'inherit',
    padding: `0 ${theme.spacing(4.5)}`,
    '& + .MuiCollapse-root': {
      '& .MuiAccordionDetails-root:first-child': {
        paddingTop: 0,
      },
    },
    '&.Mui-expanded': {
      minHeight: 'unset',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      '& .MuiAccordionSummary-content': {
        margin: theme.spacing(3.25, 0),
      },
    },
    '& .MuiTypography-root': {
      fontWeight: 500,
    },
  },
  '& .MuiAccordionSummary-content': {
    margin: theme.spacing(3.25, 0),
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: theme.palette.text.primary,
  },
  '& .MuiAccordionDetails-root': {
    padding: theme.spacing(4.5),
    '& + .MuiAccordionDetails-root': {
      paddingTop: 0,
    },
  },
}));

const CustomAccordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  return <AccordionStyled ref={ref} {...props} />;
});

export default CustomAccordion;
