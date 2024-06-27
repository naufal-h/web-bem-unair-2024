// ** MUI Imports
import Chip from '@mui/material/Chip'
import Icon from '../utils/icon'
import CustomChip from '../chip'

// ** Icon Imports


const ChipsIcon = () => {
  return (
    <div className='demo-space-x'>
      <CustomChip label='Previous' icon={<Icon icon='tabler:circle-chevron-left' fontSize={20} />} />
      <CustomChip
        label='Next'
        color='primary'
        variant='outlined'
        icon={<Icon icon='tabler:circle-chevron-right' fontSize={20} />}
      />
    </div>
  )
}

export default ChipsIcon
