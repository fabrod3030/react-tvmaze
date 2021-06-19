import { Box, IconButton, SwipeableDrawer   } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {InputWithButton} from '@/components'
import { movieList } from '@/features/slice/movieListModelSlice'

import useStyles from './styles'

const HamburgerMenu = () => {

    const classes = useStyles()
    const dispatch = useDispatch()

    const users = useSelector(state => state.users.users)
    const loggedInUserId = useSelector(state => state.users.loginUser)

    const [drawerState, setDrawerState] = useState(false)
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
      toggleDrawer(false)
      dispatch(movieList(searchString))
    }

    const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') && event.type==='mouseclick') {
        return
      }
  
      setDrawerState(open)
    }

    const list = () => (
      <div style={{ width: '250px'}}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem button key='Home'>
            <ListItemText primary='Home' />
          </ListItem>
          <Divider />
          <ListItem button key='Features'>
            <ListItemText primary='Freatures' />
          </ListItem>
          <Divider />
          <ListItem button key='Blog'>
            <ListItemText primary='Blog' />
          </ListItem>
        </List>
        <Divider />
      </div>
    )

    return (
      <Box className={classes.hamburgerMenu}>
        <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon className={classes.icon} />
        </IconButton>
        <SwipeableDrawer
            anchor={'left'}
            open={drawerState}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
            classes={{paperAnchorLeft: classes.drawer}}
          >
            {list()}
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
          </SwipeableDrawer>
      </Box>
    )
}

export default HamburgerMenu
