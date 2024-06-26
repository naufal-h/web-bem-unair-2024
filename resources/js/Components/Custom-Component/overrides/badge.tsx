import { Badge as MuiBadge, BadgeProps, styled } from '@mui/material';
import { forwardRef } from 'react';

const BadgeStyled = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    fontSize: '0.75rem',
  },
}));

const CustomBadge = forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  return <BadgeStyled ref={ref} {...props} />;
});

export default CustomBadge;
