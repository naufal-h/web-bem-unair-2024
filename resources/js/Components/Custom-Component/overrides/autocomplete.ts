// ** Type Imports
import { OwnerStateThemeType } from './'


// ** Util Import
import { hexToRGBA } from '../overrides/utils/hex-to-rgba'

const Autocomplete = () => {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        popper: ({ theme }: OwnerStateThemeType) => ({
          '.MuiPaper-root': {
            boxShadow: 'light',
            ...('bordered' && { border: `1px solid ${theme.palette.divider}` }),
            '& .MuiAutocomplete-option .MuiListItemButton-root:hover': {
              backgroundColor: 'transparent'
            },
            '&.custom-autocomplete-paper': {
              ...theme.typography.body1,
              '& .MuiAutocomplete-option': {
                '&.Mui-focused': {
                  color: theme.palette.primary.main,
                  backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08),
                  '& .MuiTypography-root, & svg': {
                    color: 'inherit'
                  }
                },
                '&[aria-selected="true"]': {
                  color: theme.palette.common.white,
                  backgroundColor: theme.palette.primary.main,
                  '& .MuiTypography-root, & svg': {
                    color: 'inherit'
                  }
                },
                '& .MuiCheckbox-root.Mui-checked path:first-of-type': {
                  fill: theme.palette.common.white
                },
                '& .MuiCheckbox-root.Mui-checked path:last-of-type': {
                  fill: theme.palette.primary.main,
                  stroke: theme.palette.primary.main
                }
              }
            }
          }
        }),
        inputRoot: {
          '& .MuiAutocomplete-tagSizeSmall': {
            height: 22
          }
        }
      }
    }
  }
}

export default Autocomplete
