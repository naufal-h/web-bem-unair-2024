import type { FC, SyntheticEvent } from 'react';
import {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings as SettingsType } from '../hooks/use-settings'; // Alias for settings from hooks
import { Avatar, Badge, Box, Divider, Menu, MenuItem, MenuItemProps, Typography, styled } from './material';
import { useAuth } from '../hooks/use-auth';
import { CreditCard, DollarSign, Info, LifeBuoy, LogOut, Settings as SettingsIcon, UserCheck } from 'react-feather'; // Alias for settings from react-feather





interface Props {
  readonly settings: SettingsType
}

// ** Styled Components
const BadgeContentSpan = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  borderRadius: '50%',
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  height: 8,
  width: 8
}));

const MenuItemStyled = styled(MenuItem)<MenuItemProps>(({ theme }) => ({
  '&:hover .MuiBox-root, &:hover .MuiBox-root svg': {
    color: theme.palette.primary.main
  }
}));

const UserDropdown: FC<Props> = ({ settings }) => {
  const { direction } = settings;

  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url?: string) => {
    if (url) {
      navigate(url);
    }

    setAnchorEl(null);
  };

  const styles = {
    alignItems: 'center',
    color: 'text.primary',
    display: 'flex',
    px: 4,
    py: 1.75,
    textDecoration: 'none',
    width: '100%',

    '& svg': {
      color: 'text.secondary',
      fontSize: '1.5rem',
      mr: 2.5
    }
  };

  const handleLogout = () => {
    logout().then(() => { handleDropdownClose('/'); });
  };

  return (
    <>
      <Badge
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        badgeContent={<BadgeContentSpan />}
        overlap="circular"
        sx={{ cursor: 'pointer', ml: 2 }}
        onClick={handleDropdownOpen}
      >
        <Avatar
          alt="John Doe"
          src="/images/avatars/1.png"
          sx={{ height: 38, width: 38 }}
          onClick={handleDropdownOpen} />
      </Badge>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ horizontal: direction === 'ltr' ? 'right' : 'left', vertical: 'bottom' }}
        open={Boolean(anchorEl)}
        sx={{ '& .MuiMenu-paper': { mt: 4.75, width: 230 } }}
        transformOrigin={{ horizontal: direction === 'ltr' ? 'right' : 'left', vertical: 'top' }}
        onClose={() => handleDropdownClose()}
      >
        <Box sx={{ px: 6, py: 1.75 }}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <Badge
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'bottom'
              }}
              badgeContent={<BadgeContentSpan />}
              overlap="circular"
            >
              <Avatar alt="John Doe" src="/images/avatars/1.png" sx={{ height: '2.5rem', width: '2.5rem' }} />
            </Badge>
            <Box sx={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', ml: 2.5 }}>
              <Typography sx={{ fontWeight: 500 }}>John Doe</Typography>
              <Typography variant="body2">Admin</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: (theme) => `${theme.spacing(2)} !important` }} />
        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <UserCheck />
            My Profile
          </Box>
        </MenuItemStyled>
        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <SettingsIcon />
            Settings
          </Box>
        </MenuItemStyled>
        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <CreditCard />
            Billing
          </Box>
        </MenuItemStyled>
        <Divider sx={{ my: (theme) => `${theme.spacing(2)} !important` }} />
        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <LifeBuoy />
            Help
          </Box>
        </MenuItemStyled>
        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <Info />
            FAQ
          </Box>
        </MenuItemStyled>
        <MenuItemStyled sx={{ p: 0 }} onClick={() => handleDropdownClose()}>
          <Box sx={styles}>
            <DollarSign />
            Pricing
          </Box>
        </MenuItemStyled>
        <Divider sx={{ my: (theme) => `${theme.spacing(2)} !important` }} />
        <MenuItemStyled sx={{ p: 0 }} onClick={handleLogout}>
          <Box sx={styles}>
            <LogOut />
            Sign Out
          </Box>
        </MenuItemStyled>
      </Menu>
    </>
  );
};

UserDropdown.displayName = 'UserDropdown';

export { UserDropdown };
