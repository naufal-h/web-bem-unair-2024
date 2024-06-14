// ** Type Import
// import { OwnerStateThemeType } from '.'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import { DataGrid } from '@mui/x-data-grid'

// ** Type Import
import { DataGridProps } from '@mui/x-data-grid'

const DataGridStyled = styled(DataGrid)<DataGridProps>(({ theme }) => ({
  "& .MuiDataGrid-root": {
    border: 0,
    color: theme.palette.text.primary,
    '& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within': {
      outline: 'none'
    }
  },
  "& .MuiDataGrid-toolbarContainer": {
    paddingRight: `${theme.spacing(6)} !important`,
    paddingLeft: `${theme.spacing(3.25)} !important`
  },
  "&.MuiDataGrid-columnHeaders": {
    backgroundColor: theme.palette.customColors.tableHeaderBg
    // backgroundColor: "#7464e4 !important"
  },
  "& .MuiDataGrid-columnHeader": {
    '&:not(.MuiDataGrid-columnHeaderCheckbox)': {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      '&:first-of-type': {
        paddingLeft: theme.spacing(6)
      }
    },
    '&:last-of-type': {
      paddingRight: theme.spacing(6)
    }
  },
  "& .MuiDataGrid-columnHeaderCheckbox": {
    maxWidth: '58px !important',
    minWidth: '58px !important'
  },
  "& .MuiDataGrid-columnHeaderTitleContainer": {
    padding: 0
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: 500,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontSize: theme.typography.body2.fontSize
  },
  "& .MuiDataGrid-columnSeparator": {
    color: theme.palette.divider
  },
  "& .MuiDataGrid-row": {
    '&:last-child': {
      '& .MuiDataGrid-cell': {
        borderBottom: 0
      }
    }
  },
  "& .MuiDataGrid-cell": {
    borderColor: theme.palette.divider,
    '&:not(.MuiDataGrid-cellCheckbox)': {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
      '&:first-of-type': {
        paddingLeft: theme.spacing(6)
      }
    },
    '&:last-of-type': {
      paddingRight: theme.spacing(6)
    },
    '&:focus, &:focus-within': {
      outline: 'none'
    }
  },
  "& .MuiDataGrid-cellCheckbox": {
    maxWidth: '58px !important',
    minWidth: '58px !important'
  },
  "& .MuiDataGrid-editInputCell": {
    padding: 0,
    color: theme.palette.text.primary,
    '& .MuiInputBase-input': {
      padding: 0
    }
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: `1px solid ${theme.palette.divider}`,
    '& .MuiTablePagination-toolbar': {
      paddingLeft: `${theme.spacing(4)} !important`,
      paddingRight: `${theme.spacing(4)} !important`
    },
    '& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel': {
      color: theme.palette.text.primary
    }
  },
  "& .MuiDataGrid-selectedRowCount": {
    margin: 0,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}));

const CustomDataGrid = (props: DataGridProps) => {
  return <DataGridStyled {...props} />;
};

export default CustomDataGrid;
