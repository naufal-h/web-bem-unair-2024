// ** Type Imports
import { OwnerStateThemeType } from './'

const Drawer = () => {
  return {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }: OwnerStateThemeType) => ({
          boxShadow: theme.shadows['default' ? 7 : 0]
        })
      }
    }
  }
}

export default Drawer
