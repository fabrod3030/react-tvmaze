import { Box } from '@material-ui/core'
import React from 'react'

import { IconImage } from '@/utils/constants'

import useStyles from './styles'

const LoginMark = () => {
  const classes = useStyles()

  return (
    <Box className={classes.iconBox}>
      <img src={IconImage.default} alt="mark" />
      <p>TVMAZE</p>
    </Box>
  )
}

export default LoginMark
