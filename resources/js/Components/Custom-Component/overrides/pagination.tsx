// import

import { Pagination, styled } from "@mui/material";
import type { PaginationProps } from "@mui/material/Pagination";



const PaginationStyled = styled(Pagination)<PaginationProps>(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    height: 38,
    minWidth: 38,
    '&:not(.MuiPaginationItem-rounded)': {
      borderRadius: '50%'
    },
    '&:not(.MuiPaginationItem-outlined):not(.Mui-disabled)': {
      transition: theme.transitions.create(['color', 'background-color', 'box-shadow'], {
        duration: 250,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }),
      '&.Mui-selected': {
        boxShadow: theme.shadows[2]
      }
    }
  },
  '& .MuiPaginationItem-outlined': {
    borderColor: `rgba(${theme.palette.customColors.main}, 0.2)`
  },
  '& .MuiPaginationItem-outlinedPrimary': {
    borderColor: theme.palette.primary.main
  },
  '& .MuiPaginationItem-outlinedSecondary': {
    borderColor: theme.palette.secondary.main
  },
}));

const CustomPagination = (props: PaginationProps) => {
  return <PaginationStyled {...props} />;
};

export default CustomPagination