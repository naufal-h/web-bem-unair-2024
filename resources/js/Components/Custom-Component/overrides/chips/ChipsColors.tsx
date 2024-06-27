// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Typography from '@mui/material/Typography'
import CustomChip from '../chip'

const ChipsColors = () => {
  return (
    <Fragment>
      <Typography sx={{ fontWeight: 500 }}>Filled Chips</Typography>

        <CustomChip label='Primary' color='primary' />
        <CustomChip label='Secondary' color='secondary' />
        <CustomChip label='Success' color='success' />
        <CustomChip label='Error' color='error' />
        <CustomChip label='Warning' color='warning' />
        <CustomChip label='Info' color='info' />
      
      <Typography sx={{ mt: 4, fontWeight: 500 }}>Outlined Chips</Typography>
   
        <CustomChip label='Primary' color='primary' variant='outlined' />
        <CustomChip label='Secondary' color='secondary' variant='outlined' />
        <CustomChip label='Success' color='success' variant='outlined' />
        <CustomChip label='Error' color='error' variant='outlined' />
        <CustomChip label='Warning' color='warning' variant='outlined' />
        <CustomChip label='Info' color='info' variant='outlined' />

    </Fragment>
  )
}

export default ChipsColors
