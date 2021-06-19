import { Avatar, IconButton, Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { logout } from '@/features/slice/userModelSlice'

import useStyles from './styles'

const UserInfo = () => {
    
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const logOut = () => {
    setAnchorEl(null)
    dispatch(logout())
    history.replace('/')
  }


    return (
      <div>
        <IconButton onClick={handleClick} className={classes.headerUserInfo}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
    )
}

export default UserInfo
