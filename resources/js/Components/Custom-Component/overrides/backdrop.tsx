// ** Type Import
import { styled, Backdrop, BackdropProps } from '@mui/material';
// // import { OwnerStateThemeType } from '.';
import { hexToRGBA } from './utils/hex-to-rgba';

// ** Styled Backdrop Component
const BackdropStyled = styled(Backdrop)<BackdropProps>(({ theme }) => ({
  '&.MuiBackdrop-root': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? `rgba(${theme.palette.customColors.main}, 0.7)`
        : hexToRGBA(theme.palette.background.default, 0.7),
  },
  '&.MuiBackdrop-invisible': {
    backgroundColor: 'transparent',
  },
}));

const BackdropCustom = (props: BackdropProps) => {
  return <BackdropStyled {...props} />;
};

export default BackdropCustom;
