// import
import { Divider} from '@mui/material';
import { styled } from "@mui/material/styles";
import { forwardRef } from 'react';
import type { DividerProps } from '@mui/material/Divider';

const DividerStyled = styled(Divider)<DividerProps>(({ theme }) => ({
  "&.MuiDivider-root": {
    '.MuiStack-root &:not(.MuiDivider-vertical)': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
  "&.MuiDivider-middle": {
    '&:not(.MuiDivider-vertical)': {
      marginLeft: theme.spacing(5),
      marginRight: theme.spacing(5)
    },
    '&.MuiDivider-vertical': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  },
}));


const CustomDivider = forwardRef((props: DividerProps, ref) => {
  const { ...rest } = props;
  return <DividerStyled {...rest} />;
});

export default CustomDivider