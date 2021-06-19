import {Paper} from '@material-ui/core'
import React from 'react'

import {
  LoginForm,
  LoginMark,
} from '@/components'

import useStyles from './styles'

const Login = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Paper className={classes.container}>
                <LoginMark />
                <LoginForm />
            </Paper>
        </div>
    )
}

export default Login
