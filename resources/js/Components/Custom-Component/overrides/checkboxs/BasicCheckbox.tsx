// ** MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import CustomCheckbox from '../checkbox'

const CheckboxesBasic = () => {
  return (
    <FormGroup row>
      <FormControlLabel label='Checked' control={<CustomCheckbox defaultChecked name='basic-checked' />} />
      <FormControlLabel label='Unchecked' control={<CustomCheckbox name='basic-unchecked' />} />
      <FormControlLabel
        disabled
        label='Disabled Checked'
        control={<CustomCheckbox defaultChecked name='basic-disabled-checked' />}
      />
      <FormControlLabel disabled label='Disabled Unchecked' control={<CustomCheckbox name='basic-disabled-unchecked' />} />
    </FormGroup>
  )
}

export default CheckboxesBasic
