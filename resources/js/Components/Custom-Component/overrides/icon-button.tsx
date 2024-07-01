// ** Type Import
import { forwardRef } from 'react'
import { OwnerStateThemeType } from '.'

// ** Util Import
import { hexToRGBA } from './utils/hex-to-rgba'
import { IconButton, IconButtonProps, styled } from '@mui/material'

const IconButtonStyled = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  '&:hover': {
    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`,
  },
  variants: [
    {
      props: { color: 'primary' },
      style: ({ theme }: OwnerStateThemeType) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(theme.palette.primary.main, 0.08)
        }
      })
    },
    {
      props: { color: 'secondary' },
      style: ({ theme }: OwnerStateThemeType) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.08)
        }
      })
    },
    {
      props: { color: 'success' },
      style: ({ theme }: OwnerStateThemeType) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(theme.palette.success.main, 0.08)
        }
      })
    },
    {
      props: { color: 'error' },
      style: ({ theme }: OwnerStateThemeType) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(theme.palette.error.main, 0.08)
        }
      })
    },
    {
      props: { color: 'warning' },
      style: ({ theme }: OwnerStateThemeType) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(theme.palette.warning.main, 0.08)
        }
      })
    },
    {
      props: { color: 'info' },
      style: ({ theme }: OwnerStateThemeType) => ({
        '&:hover': {
          backgroundColor: hexToRGBA(theme.palette.info.main, 0.08)
        }
      })
    }
  ],


}))

const CustomIconButton = forwardRef((props: IconButtonProps, ref) => {
  const { ...rest } = props
  return <IconButtonStyled {...rest} />
})

export default CustomIconButton
