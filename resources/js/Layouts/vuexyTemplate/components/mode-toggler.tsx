import type { FC } from 'react';




import { Moon, Sun } from 'react-feather';
import { Settings } from '../hooks/use-settings';
import { Mode } from '../layouts/types';
import { IconButton } from './material';

interface Props {
  readonly saveSettings: (values: Settings) => void
  readonly settings: Settings
}

const ModeToggler: FC<Props> = ({ settings, saveSettings }) => {
  const handleModeChange = (mode: Mode) => {
    saveSettings({ ...settings, mode });
  };

  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark' as Mode);
    } else {
      handleModeChange('light' as Mode);
    }
  };

  return (
    <IconButton aria-haspopup="true" color="inherit" onClick={handleModeToggle}>
      { settings.mode === 'dark'
        ? <Sun fontSize="1.625rem" />
        : <Moon fontSize="1.625rem" /> }
    </IconButton>
  );
};

ModeToggler.displayName = 'ModeToggler';

export { ModeToggler };
