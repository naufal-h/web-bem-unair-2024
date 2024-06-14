import { forwardRef } from 'react';
import { styled } from '@mui/material';
import Chip from '@mui/material/Chip';
import type { ChipProps } from '@mui/material/Chip';

// ** Util Imports
import { hexToRGBA } from './utils/hex-to-rgba';

// ** Type Import

const ChipStyled = styled(Chip)<ChipProps>(({ theme }) => ({
  '& .MuiChip-root': {
    fontWeight: 500,
    fontSize: theme.typography.body2.fontSize,
    '&.MuiChip-medium': {
      height: 30,
    },
    '&.MuiChip-rounded': {
      borderRadius: 4,
    },
  },
  '& .MuiChip-outlined': {
    '&.MuiChip-colorDefault': {
      borderColor: `rgba(${theme.palette.customColors.main}, 0.2)`,
    },
  },
  '& .MuiChip-labelSmall': {
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
  },
  '& .MuiChip-deleteIcon': {
    width: 18,
    height: 18,
  },
  '& .MuiChip-avatar': {
    color: `${hexToRGBA('#7464e4', 1)} !important`,
  },
  '& .MuiChip-deletableColorPrimary': {
    '&.MuiChip-light .MuiChip-deleteIcon': {
      color: `${hexToRGBA(theme.palette.primary.main, 0.7)} !important`,
      '&:hover': {
        color: `${theme.palette.primary.main} !important`,
      },
    },
  },
  '& .MuiChip-deletableColorSecondary': {
    '&.MuiChip-light .MuiChip-deleteIcon': {
      color: `${hexToRGBA(theme.palette.secondary.main, 0.7)} !important`,
      '&:hover': {
        color: `${theme.palette.secondary.main} !important`,
      },
    },
  },
  '& .MuiChip-deletableColorSuccess': {
    '&.MuiChip-light .MuiChip-deleteIcon': {
      color: `${hexToRGBA(theme.palette.success.main, 0.7)} !important`,
      '&:hover': {
        color: `${theme.palette.success.main} !important`,
      },
    },
  },
  '& .MuiChip-deletableColorError': {
    '&.MuiChip-light .MuiChip-deleteIcon': {
      color: `${hexToRGBA(theme.palette.error.main, 0.7)} !important`,
      '&:hover': {
        color: `${theme.palette.error.main} !important`,
      },
    },
  },
  '& .MuiChip-deletableColorWarning': {
    '&.MuiChip-light .MuiChip-deleteIcon': {
      color: `${hexToRGBA(theme.palette.warning.main, 0.7)} !important`,
      '&:hover': {
        color: `${theme.palette.warning.main} !important`,
      },
    },
  },
  '& .MuiChip-deletableColorInfo': {
    '&.MuiChip-light .MuiChip-deleteIcon': {
      color: `${hexToRGBA(theme.palette.info.main, 0.7)} !important`,
      '&:hover': {
        color: `${theme.palette.info.main} !important`,
      },
    },
  },
}));

const CustomChip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  return <ChipStyled ref={ref} {...props} />;
});

export default CustomChip;
