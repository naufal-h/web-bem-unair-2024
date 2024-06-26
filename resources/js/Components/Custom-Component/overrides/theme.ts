import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import { green, purple, red, blue } from '@mui/material/colors';

// Extend the theme interface to include custom properties
declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      dark: string
      main: string
      light: string
      bodyBg: string
      trackBg: string
      avatarBg: string
      darkPaperBg: string
      lightPaperBg: string
      tableHeaderBg: string
    };
    bemPrimary: PaletteColorOptions;
    bemSecondary: PaletteColorOptions;
  }

  interface PaletteOptions {
    customColors?: {
      dark?: string
      main?: string
      light?: string
      bodyBg?: string
      trackBg?: string
      avatarBg?: string
      darkPaperBg?: string
      lightPaperBg?: string
      tableHeaderBg?: string
    };
    bemPrimary?: PaletteColorOptions;
    bemSecondary?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    bemPrimary: true;
    bemSecondary: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    bemPrimary: true;
    bemSecondary: true;
  }
}

declare module '@mui/material/Autocomplete' {
  interface AutocompletePropsColorOverrides {
    bemPrimary: true;
    bemSecondary: true;
  }
}

declare module '@mui/material/Avatar' {
  interface AvatarPropsColorOverrides {
    bemPrimary: true;
    bemSecondary: true;
  }
}

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: green[500],
    },
    customColors: {
      main: red[500],
      tableHeaderBg: '#F6F6F7',
      avatarBg: '#4A5072',
    },
    bemPrimary: palette.augmentColor({ color: {
      main:'#A020F0',
    } }),
    bemSecondary: palette.augmentColor({ color: {
      main: '#2986cc',
    } }),
  },
});

export default theme;

// bemPrimary: {  
    //   main:'#A020F0',
    // },