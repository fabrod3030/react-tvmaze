import { Box } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const Menu = () => {
    const classes = useStyles()

    return (
        <Box className={classes.headerMenu}>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Blog</li>
          </ul>
        </Box>
    )
}

export default Menu
