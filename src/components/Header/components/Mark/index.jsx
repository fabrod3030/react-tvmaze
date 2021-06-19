import { Box } from '@material-ui/core'
import React from 'react'

import { IconImage } from '@/utils/constants'

import useStyles from './styles'

const Mark = () => {
    const classes = useStyles()

    return (
      <Box className={classes.headerMark}>
        <a href='/'>
          <img src={IconImage.default} alt="mark" />
        </a>
      </Box>
    )
}

export default Mark
