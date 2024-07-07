// ** Type Import
// import { OwnerStateThemeType } from '.'

import MuiAlert from '@mui/material/Alert';


// ** Util Import
import { hexToRGBA } from './utils/hex-to-rgba'

import { styled, AlertProps } from '@mui/material';
import { forwardRef } from 'react';

const AlertStyled = styled(MuiAlert)<AlertProps>(({ theme }) => ({
  '& .MuiAlert-root': {
    fontWeight: 500,
    lineHeight: 1.467,
    alignItems: 'flex-start',
    padding: theme.spacing(1.25, 3.5),
    fontSize: theme.typography.body1.fontSize,
    '& .MuiAlertTitle-root': {
      marginBottom: theme.spacing(2.5),
    },
    '& a': {
      fontWeight: 700,
      color: 'inherit',
    },
  },
  '& .MuiAlert-icon': {
    opacity: 1,
    fontSize: '1.125rem',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(1.75, 2.5, 1.75, 0),
    '& + .MuiAlert-message': {
      padding: theme.spacing(2.25, 0),
    },
    '& ~ .MuiAlert-action': {
      paddingTop: theme.spacing(1.75),
    },
  },
  '& .MuiAlert-message': {
    padding: theme.spacing(1.75, 0),
  },
  '& .MuiAlert-action': {
    paddingTop: theme.spacing(1.25),
    '& svg': {
      fontSize: '1rem',
    },
  },
  '& .MuiAlert-standard': {
    '& .MuiAlert-icon': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  '& .MuiAlert-standardSuccess': {
    color: theme.palette.success.main,
    backgroundColor: hexToRGBA(theme.palette.success.main, 0.16),
    '& .MuiAlertTitle-root': {
      color: theme.palette.success.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.success.main,
    },
  },
  '& .MuiAlert-standardInfo': {
    color: theme.palette.info.main,
    backgroundColor: hexToRGBA(theme.palette.info.main, 0.16),
    '& .MuiAlertTitle-root': {
      color: theme.palette.info.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.info.main,
    },
  },
  '& .MuiAlert-standardWarning': {
    color: theme.palette.warning.main,
    backgroundColor: hexToRGBA(theme.palette.warning.main, 0.16),
    '& .MuiAlertTitle-root': {
      color: theme.palette.warning.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.warning.main,
    },
  },
  '& .MuiAlert-standardError': {
    color: theme.palette.error.main,
    backgroundColor: hexToRGBA(theme.palette.error.main, 0.16),
    '& .MuiAlertTitle-root': {
      color: theme.palette.error.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.error.main,
    },
  },
  '& .MuiAlert-outlined': {
    padding: theme.spacing(1, 3.25),
  },
  '& .MuiAlert-outlinedSuccess': {
    borderColor: theme.palette.success.main,
    color: theme.palette.success.main,
    '& .MuiAlertTitle-root': {
      color: theme.palette.success.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.success.main,
    },
  },
  '& .MuiAlert-outlinedInfo': {
    borderColor: theme.palette.info.main,
    color: theme.palette.info.main,
    '& .MuiAlertTitle-root': {
      color: theme.palette.info.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.info.main,
    },
  },
  '& .MuiAlert-outlinedWarning': {
    borderColor: theme.palette.warning.main,
    color: theme.palette.warning.main,
    '& .MuiAlertTitle-root': {
      color: theme.palette.warning.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.warning.main,
    },
  },
  '& .MuiAlert-outlinedError': {
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
    '& .MuiAlertTitle-root': {
      color: theme.palette.error.main,
    },
    '& .MuiAlert-icon': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.error.main,
    },
  },
  '& .MuiAlert-filled': {
    color: theme.palette.common.white,
    '& .MuiAlert-icon': {
      backgroundColor: theme.palette.common.white,
    },
  },
  '& .MuiAlert-filledSuccess': {
    '& .MuiAlert-icon': {
      color: theme.palette.success.main,
    },
  },
  '& .MuiAlert-filledInfo': {
    '& .MuiAlert-icon': {
      color: theme.palette.info.main,
    },
  },
  '& .MuiAlert-filledWarning': {
    '& .MuiAlert-icon': {
      color: theme.palette.warning.main,
    },
  },
  '& .MuiAlert-filledError': {
    '& .MuiAlert-icon': {
      color: theme.palette.error.main,
    },
  },
  '& .MuiAlertTitle-root': {
    marginTop: 0,
    lineHeight: 1.3334,
    fontSize: '1.125rem',
  },
}));

const CustomAlert = forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  return <AlertStyled ref={ref} {...props} />;
});

export default CustomAlert;
