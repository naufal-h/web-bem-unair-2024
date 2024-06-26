import { styled, Autocomplete, AutocompleteProps } from '@mui/material';
import { hexToRGBA } from './utils/hex-to-rgba';
import { forwardRef } from 'react';

// Define the generic type arguments for AutocompleteProps
type CustomAutocompleteProps<T> = AutocompleteProps<T, boolean, boolean, boolean>;

const AutocompleteStyled = styled(Autocomplete)<CustomAutocompleteProps<any>>(({ theme }) => ({
  '& .MuiAutocomplete-root': {
    '& .MuiAutocomplete-popper': {
      '& .MuiPaper-root': {
        boxShadow: theme.shadows[1],
        border: `1px solid ${theme.palette.divider}`,
        '& .MuiAutocomplete-option .MuiListItemButton-root:hover': {
          backgroundColor: 'transparent',
        },
        '&.custom-autocomplete-paper': {
          ...theme.typography.body1,
          '& .MuiAutocomplete-option': {
            '&.Mui-focused': {
              color: theme.palette.bemPrimary,
              backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
              '& .MuiTypography-root, & svg': {
                color: 'inherit',
              },
            },
            '&[aria-selected="true"]': {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.bemPrimary,
              '& .MuiTypography-root, & svg': {
                color: 'inherit',
              },
            },
            '& .MuiCheckbox-root.Mui-checked path:first-of-type': {
              fill: theme.palette.common.white,
            },
            '& .MuiCheckbox-root.Mui-checked path:last-of-type': {
              fill: theme.palette.bemPrimary,
              stroke: theme.palette.bemPrimary,
            },
          },
        },
      },
    },
    '& .MuiAutocomplete-inputRoot': {
      '& .MuiAutocomplete-tagSizeSmall': {
        height: 22,
      },
    },
  },
}));

const AutocompleteCustom = forwardRef<HTMLDivElement, CustomAutocompleteProps<any>>((props, ref) => {
  return <AutocompleteStyled ref={ref} {...props} />;
});

export default AutocompleteCustom;
