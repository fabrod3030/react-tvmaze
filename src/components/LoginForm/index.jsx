import {Box, Button } from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useRouteMatch } from 'react-router-dom'

import {InputWithButton} from '@/components'
import { login } from '@/features/slice/userModelSlice'

import useStyles from './styles'

const LoginForm = () => {

    const classes = useStyles()
    const history = useHistory()
    const match = useRouteMatch()
    const dispatch = useDispatch()

    const user = useSelector(state => state.users.loginUser)

    useEffect(() => {
        if(user !== -1) {
            history.push(`${match.path}home`)
        }
    }, [history, match.path, user])

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onLogin = () => {
        if(email.length > 0 && password.length > 0) {
            dispatch(login(email, password, history, match))
        }
        else {
            console.log('Fill out the email and password')
        }
    }

    return (
        <div className={classes.root}>
            <Box className={classes.row}>
                <InputWithButton
                    value={email}
                    placeholder="example@example.com"
                    label="Email: "
                    type='email'
                    updateValue={(v) => setEmail(v)}
                />
            </Box>
            <Box className={classes.row}>
                <InputWithButton
                    action={() => setShowPassword(!showPassword)}
                    value={password}
                    placeholder="*********"
                    label="Password: "
                    type={showPassword?'text':'password'}
                    updateValue={(v) => setPassword(v)}
                    icon={showPassword?<VisibilityOffIcon/>:<VisibilityIcon/>}
                />
            </Box>
            <Box className={classes.row}>
                <Button
                    variant="contained"
                    className={classes.loginButton}
                    onClick={() => onLogin()}
                >
                    Log In
                </Button>
            </Box>
            <Box className={classes.row}>
                <p>Don't have an account? Sign up <a href='/'>here</a></p>
            </Box>
        </div>
    )
}

export default LoginForm
