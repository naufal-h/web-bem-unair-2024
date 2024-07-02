/* eslint-disable capitalized-comments */
/* eslint-disable multiline-comment-style */

/**
 * Config
 * -------------------------------------------------------------------------------------
 * ! IMPORTANT: Make sure you clear the browser local storage in order to see the config changes in the template.
 * ! To clear local storage, you may refer https://www.leadshook.com/help/how-to-clear-local-storage-in-google-chrome-browser/.
 */

import type { ReactNode } from 'react';


import { Direction, ThemeOptions } from '../components/material';
import { AppBar, ContentWidth, Footer, HorizontalMenuToggle, Mode, Skin, VerticalNavToggle } from '../layouts/types';

interface ThemeConfig {
  afterVerticalNavMenuContentPosition: 'fixed' | 'static'
  appBar: AppBar
  appBarBlur: boolean
  beforeVerticalNavMenuContentPosition: 'fixed' | 'static'
  collapsedNavigationSize: number
  contentWidth: ContentWidth
  direction: Direction
  disableCustomizer: boolean
  disableRipple: boolean
  footer: Footer
  horizontalMenuAnimation: boolean
  horizontalMenuToggle: HorizontalMenuToggle
  layout: 'horizontal' | 'vertical'
  menuTextTruncate: boolean
  mode: Mode
  navCollapsed: boolean
  navHidden: boolean
  navigationSize: number
  navSubItemIcon: ReactNode
  responsiveFontSizes: boolean
  routingLoader: boolean
  skin: Skin
  templateName: string
  toastPosition: 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right'
  verticalNavToggleType: VerticalNavToggle
}

export const config: ThemeConfig = {
  // ** Layout Configs
  contentWidth: 'boxed' /* full | boxed */,
  direction: 'ltr' /* ltr | rtl */,
  footer: 'static' /* fixed | static | hidden */,
  layout: 'vertical' /* vertical | horizontal */,
  mode: 'light' as Mode /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  skin: 'default' /* default | bordered */,
  templateName: 'Vuexy' /* App Name */,

  // ** Routing Configs
  routingLoader: true /* true | false */,

  // ** Navigation (Menu) Configs
  afterVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  beforeVerticalNavMenuContentPosition: 'fixed' /* fixed | static */,
  collapsedNavigationSize: 82 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  horizontalMenuAnimation: true /* true | false */,
  horizontalMenuToggle: 'hover' /* click | hover /*! Note: This is for Horizontal navigation menu only */,
  menuTextTruncate: true /* true | false */,
  navCollapsed: false /* true | false /*! Note: This is for Vertical navigation menu only */,
  navHidden: false /* true | false */,
  navigationSize: 260 /* Number in px(Pixels) /*! Note: This is for Vertical navigation menu only */,
  navSubItemIcon: 'tabler:circle' /* Icon */,
  verticalNavToggleType: 'accordion' /* accordion | collapse /*! Note: This is for Vertical navigation menu only */,

  // ** AppBar Configs
  appBar: 'fixed' /* fixed | static | hidden /*! Note: hidden value will only work for Vertical Layout */,
  appBarBlur: true /* true | false */,

  // ** Other Configs
  disableCustomizer: false /* true | false */,
  disableRipple: false /* true | false */,
  responsiveFontSizes: false /* true | false */,
  toastPosition: 'top-right' /* Top-left | top-center | top-right | bottom-left | bottom-center | bottom-right */
};

// ** To use core palette, uncomment the below import
// import { PaletteMode } from '@components/material.js';

// ** To use core palette, uncomment the below import
// import corePalette from '@lib/theme/palette.js';

// ** To use mode (light/dark/semi-dark), skin(default/bordered), direction(ltr/rtl), etc. for conditional styles, uncomment below line
// import { useSettings } from '@hooks/use-settings.js'

export const options = (): ThemeOptions => {
  // ** To use mode (light/dark/semi-dark), skin(default/bordered), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  // const { settings } = useSettings();

  // ** To use mode (light/dark/semi-dark), skin(default/bordered), direction(ltr/rtl), etc. for conditional styles, uncomment below line
  // const { mode, skin } = settings;

  // ** To use core palette, uncomment the below line
  // const palette = corePalette(mode as PaletteMode, skin);

  return {
    /*
    palette:{
      primary: {
        light: '#8479F2',
        main: '#7367F0',
        dark: '#655BD3',
        contrastText: '#FFF'
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 992,
        lg: 1200,
        xl: 1920
      }
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true
        },
        styleOverrides: {
          root: {
            textTransform: 'none'
          },
          sizeSmall: {
            padding: '6px 16px'
          },
          sizeMedium: {
            padding: '8px 20px'
          },
          sizeLarge: {
            padding: '11px 24px'
          },
          textSizeSmall: {
            padding: '7px 12px'
          },
          textSizeMedium: {
            padding: '9px 16px'
          },
          textSizeLarge: {
            padding: '12px 16px'
          }
        }
      },
      MuiCardActions: {
        styleOverrides: {
          root: {
            padding: '16px 24px'
          }
        }
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: '32px 24px',
            '&:last-child': {
              paddingBottom: '32px'
            }
          }
        }
      },
      MuiCssBaseline: {
        styleOverrides: {
          '*': {
            boxSizing: 'border-box'
          },
          html: {
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          },
          body: {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            minHeight: '100%',
            width: '100%'
          },
          '#__next': {
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            height: '100%',
            width: '100%'
          }
        }
      }
    },
    shape: {
      borderRadius: 8
    },
    typography: {
      fontFamily:
        '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    },
    shadows: mode === 'light' ? [
      'none',
      '0px 2px 4px 0px rgba(47, 43, 61, 0.12)',
      '0px 2px 6px 0px rgba(47, 43, 61, 0.14)',
      '0px 3px 8px 0px rgba(47, 43, 61, 0.14)',
      '0px 3px 9px 0px rgba(47, 43, 61, 0.15)',
      '0px 4px 10px 0px rgba(47, 43, 61, 0.15)',
      '0px 4px 11px 0px rgba(47, 43, 61, 0.16)',
      '0px 4px 18px 0px rgba(47, 43, 61, 0.1)',
      '0px 4px 13px 0px rgba(47, 43, 61, 0.18)',
      '0px 5px 14px 0px rgba(47, 43, 61, 0.18)',
      '0px 5px 15px 0px rgba(47, 43, 61, 0.2)',
      '0px 5px 16px 0px rgba(47, 43, 61, 0.2)',
      '0px 6px 17px 0px rgba(47, 43, 61, 0.22)',
      '0px 6px 18px 0px rgba(47, 43, 61, 0.22)',
      '0px 6px 19px 0px rgba(47, 43, 61, 0.24)',
      '0px 7px 20px 0px rgba(47, 43, 61, 0.24)',
      '0px 7px 21px 0px rgba(47, 43, 61, 0.26)',
      '0px 7px 22px 0px rgba(47, 43, 61, 0.26)',
      '0px 8px 23px 0px rgba(47, 43, 61, 0.28)',
      '0px 8px 24px 6px rgba(47, 43, 61, 0.28)',
      '0px 9px 25px 0px rgba(47, 43, 61, 0.3)',
      '0px 9px 26px 0px rgba(47, 43, 61, 0.32)',
      '0px 9px 27px 0px rgba(47, 43, 61, 0.32)',
      '0px 10px 28px 0px rgba(47, 43, 61, 0.34)',
      '0px 10px 30px 0px rgba(47, 43, 61, 0.34)'
    ] : [
      'none',
      '0px 2px 4px 0px rgba(15, 20, 34, 0.12)',
      '0px 2px 6px 0px rgba(15, 20, 34, 0.14)',
      '0px 3px 8px 0px rgba(15, 20, 34, 0.14)',
      '0px 3px 9px 0px rgba(15, 20, 34, 0.15)',
      '0px 4px 10px 0px rgba(15, 20, 34, 0.15)',
      '0px 4px 11px 0px rgba(15, 20, 34, 0.16)',
      '0px 4px 18px 0px rgba(15, 20, 34, 0.1)',
      '0px 4px 13px 0px rgba(15, 20, 34, 0.18)',
      '0px 5px 14px 0px rgba(15, 20, 34, 0.18)',
      '0px 5px 15px 0px rgba(15, 20, 34, 0.2)',
      '0px 5px 16px 0px rgba(15, 20, 34, 0.2)',
      '0px 6px 17px 0px rgba(15, 20, 34, 0.22)',
      '0px 6px 18px 0px rgba(15, 20, 34, 0.22)',
      '0px 6px 19px 0px rgba(15, 20, 34, 0.24)',
      '0px 7px 20px 0px rgba(15, 20, 34, 0.24)',
      '0px 7px 21px 0px rgba(15, 20, 34, 0.26)',
      '0px 7px 22px 0px rgba(15, 20, 34, 0.26)',
      '0px 8px 23px 0px rgba(15, 20, 34, 0.28)',
      '0px 8px 24px 6px rgba(15, 20, 34, 0.28)',
      '0px 9px 25px 0px rgba(15, 20, 34, 0.3)',
      '0px 9px 26px 0px rgba(15, 20, 34, 0.32)',
      '0px 9px 27px 0px rgba(15, 20, 34, 0.32)',
      '0px 10px 28px 0px rgba(15, 20, 34, 0.34)',
      '0px 10px 30px 0px rgba(15, 20, 34, 0.34)'
    ],
    zIndex: {
      appBar: 1200,
      drawer: 1100
    } */
  };
};
