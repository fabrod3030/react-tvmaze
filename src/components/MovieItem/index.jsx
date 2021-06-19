import { Box } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const MovieItem = (props) => {
  const classes = useStyles()
  const { item } = props

    return (
      <Box className={classes.container}>
        <img
          src={
            item.show.image?
              item.show.image.original?
                item.show.image.original
                :
                item.show.image.medium
              :
            '/'
          }
          alt='thumbnail'
        />
        <Box id='detail' className={classes.detail}>
          <a href={item.show.url}>{item.show.name}</a>
          <a href={item.show.url}>{item.show.genres.toString()}</a>
        </Box>
      </Box>
    )
}

export default MovieItem
