// ** Type Import
import { styled, Avatar, AvatarProps } from '@mui/material';
import { OwnerStateThemeType } from '.';
import { forwardRef } from 'react';


const AvatarStyled = styled(Avatar)<AvatarProps>(({ theme }) =>  ({
  '& .MuiAvatar-root': {
    fontSize: theme.typography.body1.fontSize,
  },
  '& .MuiAvatar-colorDefault': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.customColors.avatarBg,
  },
  '& .MuiAvatarGroup-root': {
    justifyContent: 'flex-end',
    '&.pull-up': {
      '& .MuiAvatar-root': {
        cursor: 'pointer',
        transition: 'box-shadow 0.25s ease, transform 0.25s ease',
        '&:hover': {
          zIndex: 2,
          boxShadow: theme.shadows[3],
          transform: 'translateY(-4px)',
        },
      },
    },
    '.MuiCard-root & .MuiAvatar-root': {
      borderColor: theme.palette.background.paper,
    },
  },
}));

const CustomAvatar =  forwardRef<HTMLDivElement,AvatarProps>((props, ref)=>{

  return <AvatarStyled ref={ref} {...props} />
})


export default CustomAvatar;
