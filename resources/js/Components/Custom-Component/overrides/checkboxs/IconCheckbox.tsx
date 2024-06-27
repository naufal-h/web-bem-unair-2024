// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import StarBorder from '@mui/icons-material/StarBorder';
import Star from '@mui/icons-material/Star';

import CustomCheckbox from '../checkbox'
import Icon from '../utils/icon'

const CheckboxesCustomIcons = () => {
  return (
    <FormGroup row>
      <FormControlLabel
        label='Heart'
        control={
          <CustomCheckbox
            defaultChecked
            name='size-small'
            checkedIcon={<Favorite />}
            icon={<FavoriteBorder/>}
          />
        }
      />
      <FormControlLabel
        label='Star'
        control={
          <CustomCheckbox
            defaultChecked
            name='size-small'
            checkedIcon={<Star/>}
            icon={<StarBorder />}
          />
        }
      />
    </FormGroup>
  )
}

export default CheckboxesCustomIcons
