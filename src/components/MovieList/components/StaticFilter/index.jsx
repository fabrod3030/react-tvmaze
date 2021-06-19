import { Box, Button,Fab, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import AdjustIcon from '@material-ui/icons/Adjust'
import _ from 'lodash'
import React, {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'

import { InputWithButton } from '@/components'
import { filterList } from '@/features/slice/movieListModelSlice'

import useStyles from './styles'

const GreenRadio = withStyles({
    root: {
      color: 'white',
      '&$checked': {
        color: 'black',
      },
      padding: '0 5px',
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />)

const StaticFilter = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [key1, setKey1] = useState('')
    const [key2, setKey2] = useState('')
    const [type, setType] = useState('and')
    const [showFilter, setShowFilter] = useState(false)

    const movies = useSelector(state => state.movieList.movieList)

  const onChangeType = (value) => {
    setType(value)
  }

  const filter = () => {
    let result = []
    if(key1.length > 0 && key2.length > 0) {
      if(type === 'and') {
        const firstResult = movies.filter(item => item.show.name.toLowerCase().includes(key1.toLowerCase()))
        result = firstResult.filter(item => item.show.name.toLowerCase().includes(key2.toLowerCase()))
      }
      if(type === 'or') {
        const firstResult = movies.filter(item => item.show.name.toLowerCase().includes(key1.toLowerCase()))
        const secondResult = movies.filter(item => item.show.name.toLowerCase().includes(key2.toLowerCase()))
        const totalResult = [...firstResult, ...secondResult]
        result = _.uniqBy(totalResult, (item) => {
          return item.show.id
        })
      }
    }
    else {
      if(key1.length > 0) {
        result = movies.filter(item => item.show.name.toLowerCase().includes(key1.toLowerCase()))
      }
      else if(key2.length > 0) { 
        result = movies.filter(item => item.show.name.toLowerCase().includes(key2.toLowerCase()))
      }
      else {
        result = movies
      }
    }
    dispatch(filterList(result, key1, key2))
  }

    return (
      <Box className={classes.staticFilter}>
        <Fab onClick={() => setShowFilter(!showFilter)} className={classes.button} size='small' aria-label="add">
            <AdjustIcon />
        </Fab>
        {showFilter &&
        <Box className={classes.filterBox}>
            <Box className={classes.inputBox}>
                <InputWithButton
                    value={key1}
                    placeholder="Type the keyword"
                    label=""
                    type='text'
                    updateValue={(value) => setKey1(value)}
                />
            </Box>
            <RadioGroup aria-label="Type" name="type" value={type} onChange={(event) => onChangeType(event.target.value)}>
                <FormControlLabel value='and' control={<GreenRadio size="small"/>} label="AND" />
                <FormControlLabel value='or' control={<GreenRadio size="small"/>} label="OR" />
            </RadioGroup>
            <Box className={classes.inputBox}>
                <InputWithButton
                    value={key2}
                    placeholder="Type the keyword"
                    label=""
                    type='text'
                    updateValue={(value) => setKey2(value)}
                />
            </Box>
            <Button onClick={() => filter()} className={classes.filter} variant="contained">Filter</Button>
        </Box>
        }
      </Box>
    )
}

export default StaticFilter
