import { Box, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {InputWithButton} from '@/components'
import { movieList } from '@/features/slice/movieListModelSlice'

import { HamburgerMenu,Mark,Menu, UserInfo } from './components'
import useStyles from './styles'

const Header = () => {
  
  const classes = useStyles()
  const dispatch = useDispatch()

  const users = useSelector(state => state.users.users)
  const loggedInUserId = useSelector(state => state.users.loginUser)

  const [searchString, setSearchString] = useState('')
  const [searchDisabled, setSearchDisabled] = useState(false)

  useEffect(() => {
    const loggedinUser = users.filter(item => item.id === loggedInUserId)
    if(loggedinUser.length > 0 && loggedinUser[0].admin === false) {
      setSearchDisabled(true)
    }
  }, [loggedInUserId, users])

  const search = () => {
    if(searchString.length === 0) return
    dispatch(movieList(searchString))
  }

  return (
      <Paper elevation={3} className={classes.root} >
        <HamburgerMenu />
        <Mark />
        <Menu />
        <Box className={classes.searchBox}>
          <InputWithButton
            action={() =>search()}
            value={searchString}
            placeholder="Search"
            label=""
            disabled={searchDisabled}
            updateValue={(v) => setSearchString(v)}
            icon={<SearchIcon />}
          />
        </Box>
        <UserInfo />
      </Paper>
  )
}

export default Header
