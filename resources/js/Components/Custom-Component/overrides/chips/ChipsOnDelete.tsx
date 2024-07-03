// ** React Imports
import { Fragment } from 'react'

// ** MUI Imports
import Typography from '@mui/material/Typography'

// ** Icon Imports
import CustomChip from '../chip'
import Icon from '../utils/icon'

const ChipsOnDelete = () => {
  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <Fragment>
      <Typography sx={{ fontWeight: 500 }}>Default</Typography>
      <div className='demo-space-x'>
        <CustomChip label='Basic' variant='outlined' onDelete={handleDelete} />
        <CustomChip label='Primary' color='primary' variant='outlined' onDelete={handleDelete} />
        <CustomChip label='Secondary' color='secondary' variant='outlined' onDelete={handleDelete} />
      </div>
      <Typography sx={{ mt: 4, fontWeight: 500 }}>Custom</Typography>
      <div className='demo-space-x'>
        <CustomChip label='Basic' onDelete={handleDelete} deleteIcon={<Icon icon='tabler:trash' />} />
        <CustomChip label='Primary' color='primary' onDelete={handleDelete} deleteIcon={<Icon icon='tabler:trash' />} />
        <CustomChip label='Secondary' color='secondary' onDelete={handleDelete} deleteIcon={<Icon icon='tabler:trash' />} />
      </div>
    </Fragment>
  )
}

export default ChipsOnDelete