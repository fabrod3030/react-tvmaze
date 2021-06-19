import { Box } from '@material-ui/core'
import React from 'react'

import { Filter,List, StaticFilter } from './components'
import useStyles from './styles'

const MovieList = () => {
  const classes = useStyles()

  return (
    <Box className={classes.iconBox}>
      <StaticFilter />
      <Filter />
      <List />
    </Box>
  )
}

export default MovieList
